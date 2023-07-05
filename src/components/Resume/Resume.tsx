import Card from "../shared/Card";
import Placement from "../shared/Enums";
import "./styles.css";
import webDevLogo from "../../assets/basketball.png";
import Button from "../shared/Button";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer";

const downloadResume = (pdf: string) => {
  fetch(pdf)
  .then( (response) => {
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
};

const Resume = () => {
  let [resume, setResume] = useState('');
  let [resumeDomain, setResumeDomain] = useState("web development");
  const [activeCard, setActiveCard] = useState('');

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  useEffect(() => {
    fetch(`api/domain?name=${resumeDomain}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.resume) setResume(data.resume.pdf);
      });
  }, [resumeDomain]);

  const handleDomainClick = (domain: string) => {
    if (domain != resumeDomain) setResumeDomain(domain);
    setActiveCard(domain);
  }

  return (
    <div className="Resumes">
      <div className="resumes-sidebar">
        <ul className="left-navbar-list">
          <li className={`left-navbar-item ${activeCard === 'web development' ? 'active' : ''}`} onClick={() => handleDomainClick("web development")}>
            <Card
              title="Web Development"
              thumbnail={webDevLogo}
              titlePlacement={Placement.Above}
              radius={0}
              height={200}
            />
          </li>
          <li className={`left-navbar-item ${activeCard === 'data science' ? 'active' : ''}`} onClick={() => handleDomainClick("data science")}>
            <Card
              title="Data Science"
              thumbnail={webDevLogo}
              titlePlacement={Placement.Above}
              radius={0}
              height={200}
            />
          </li>
          <li className={`left-navbar-item ${activeCard === 'data engineering' ? 'active' : ''}`} onClick={() => handleDomainClick("data engineering")}>
            <Card
              title="Data Engineering"
              thumbnail={webDevLogo}
              titlePlacement={Placement.Above}
              radius={0}
              height={200}
            />
          </li>
        </ul>
      </div>

      <div className="resumeContainer">
          <Document file={resume}>
            <Page pageNumber={1} renderTextLayer={false} className="resumeEmbedding" renderAnnotationLayer={false}/>
          </Document>

        <div className="portfolioButton resumeButton">
          <Button buttonText="Download" handleClick={() => downloadResume(resume)} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
