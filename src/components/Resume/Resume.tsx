// import Card from "../shared/Card";
// import Placement from "../shared/Enums";
import "./styles.css";
// import webDevLogo from "../../assets/basketball.png";
// import Button from "../shared/Button";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer";
import { Container, Tabs, Tab, Row, Col, Button, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { State } from "../../store/reducers";

const Resume = () => {
  let [resume, setResume] = useState<any>(null);
  let [resumeDomain, setResumeDomain] = useState('');
  // const [activeCard, setActiveCard] = useState('');
  let [categories, setCategories] = useState<any[]>([]);
  let [width, setWidth] = useState<number>(0);
  let isDarkMode = useSelector((state: State) => state.theme);
  let [isLoading, setIsLoading] = useState(true);
  let [isLoadingTab, setIsLoadingTab] = useState(true);
  let [isDownloading, setIsDownloading] = useState(false);


  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const handleSelect = (key: string | null) => {
    if (key) setResumeDomain(categories[parseInt(key) - 1].name);
  }


  const downloadResume = (pdf: string) => {
    setIsDownloading(true);
    fetch(pdf)
      .then((response) => {
        response.blob()
          .then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = pdf;
            alink.click();
            alink.parentNode?.removeChild(alink);
          })
      })
      .then(() => setTimeout(() => setIsDownloading(false), 1000));
  };

  const onDocumentLoadSuccess = () => {
    setIsLoadingTab(false);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize)

    fetch(`api/domain`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          // console.log(data)
          // console.log(data[0].name)
          setCategories(data);
          setResumeDomain(data[0].name); // default
        }
      })
      .then(() => setIsLoading(false));
    // console.log(resumeDomain)
    // console.log("in");


  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setIsLoadingTab(true);
      // console.log(categories)
      // console.log(resumeDomain)
      fetch(`api/domain?name=${resumeDomain}`)
        .then((response) => response.json())
        .then((data) => {
          setResume(data.resume);// even null should be considered
          if (data.resume == null) {
            setIsLoadingTab(false);// no need to wait for PDF
          }
        });
      // .then(() => setIsLoadingTab(false));

      setWidth(window.innerWidth);
    }
    else {
      setIsLoadingTab(false);
    }
  }, [resumeDomain]);



  // const handleDomainClick = (domain: string) => {
  //   if (domain != resumeDomain) setResumeDomain(domain);
  //   setActiveCard(domain);
  // }

  return (
    // <div className="Resumes">
    //   <div className="resumes-sidebar">
    //     <ul className="left-navbar-list">
    //       <li className={`left-navbar-item ${activeCard === 'web development' ? 'active' : ''}`} onClick={() => handleDomainClick("web development")}>
    //         <Card
    //           title="Web Development"
    //           thumbnail={webDevLogo}
    //           titlePlacement={Placement.Above}
    //           radius={0}
    //           height={200}
    //         />
    //       </li>
    //       <li className={`left-navbar-item ${activeCard === 'data science' ? 'active' : ''}`} onClick={() => handleDomainClick("data science")}>
    //         <Card
    //           title="Data Science"
    //           thumbnail={webDevLogo}
    //           titlePlacement={Placement.Above}
    //           radius={0}
    //           height={200}
    //         />
    //       </li>
    //       <li className={`left-navbar-item ${activeCard === 'data engineering' ? 'active' : ''}`} onClick={() => handleDomainClick("data engineering")}>
    //         <Card
    //           title="Data Engineering"
    //           thumbnail={webDevLogo}
    //           titlePlacement={Placement.Above}
    //           radius={0}
    //           height={200}
    //         />
    //       </li>
    //     </ul>
    //   </div>
    <Container className="mt-5">

      {isLoading &&
        <div className='d-flex justify-content-center'>
          <Spinner animation="border" variant={isDarkMode ? "secondary" : "dark"} className="d-flex justify-content-center" />
        </div>
      }
      <Tabs defaultActiveKey={1} onSelect={(key) => handleSelect(key)}>
        {categories.map((category, index) => {
          return (
            <Tab key={category.id} eventKey={index + 1} title={category.name} >
              {isLoadingTab &&
                <div className='d-flex justify-content-center mt-4'>
                  <Spinner animation="border" variant={isDarkMode ? "secondary" : "dark"} className="d-flex justify-content-center" />
                </div>
              }
              {resume && !isLoadingTab &&
                <Row>
                  <Col className={isDarkMode ? "justify-content-md-center mt-4 text-white " : "justify-content-md-center mt-4"} xs={{ span: 12, offset: 2 }} md={{ span: 12, offset: 4 }}>
                    This resume was last updated on: {resume.lastUpdated}
                  </Col>
                </Row>
              }
              {resume &&
                <Row className="justify-content-md-right offset-1 mt-4">

                  <Col xs={{ span: 1, offset: 1 }} md={{ span: 1, offset: 0 }} className="mb-3">
                    <Document file={resume.pdf} >
                      <Page pageNumber={1} renderTextLayer={false} className="resumeEmbedding" renderAnnotationLayer={false} width={width * 0.6} onLoadSuccess={onDocumentLoadSuccess} />
                    </Document>

                  </Col>

                </Row>
              }
              {resume && !isLoadingTab &&
                <Row >
                  <Col xs={{ offset: 3, span: 1 }} md={{ offset: 5, span: 1 }} className="mb-3">
                    <Button variant={isDarkMode ? 'secondary' : 'dark'} className="portfolioButton" onClick={() => downloadResume(resume.pdf)}>{isDownloading ? <div className='d-flex justify-content-center mt-4'>
                      <Spinner size="sm" animation="border" variant={isDarkMode ? "dark" : "secondary"} />
                    </div> : "Download"}</Button>
                  </Col>
                </Row>
              }

            </Tab>
          )
        })
        }
      </Tabs>

    </Container>

    /* <div className="resumeContainer">
      <Document file={resume}>
        <Page pageNumber={1} renderTextLayer={false} className="resumeEmbedding" renderAnnotationLayer={false}/>
      </Document>

    <div className="portfolioButton resumeButton">
      <Button buttonText="Download" handleClick={() => downloadResume(resume)} />
    </div>
  </div>
</div> */
  );
};

export default Resume;
