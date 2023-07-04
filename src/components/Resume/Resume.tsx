import Card from "../shared/Card";
import Placement from "../shared/Enums";
import "./styles.css";
import webDevLogo from "../../assets/basketball.png";
import Button from "../shared/Button";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import samplePDF from '../../assets/TestResume.pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer";

const downloadResume = () => {
  fetch(samplePDF)
  .then( (response) => {
    response.blob()
    .then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = samplePDF;
      alink.click();
      alink.parentNode?.removeChild(alink);
    })
  })
};

const Resume = () => {
  let [resume, setResume] = useState(null);
  let [resumeDomain, setResumeDomain] = useState("web development");

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  useEffect(() => {
    fetch(`https://portfolio.abenazzou.com/api/domain?name=${resumeDomain}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.resume) setResume(data.resume);
      });
  }, [resumeDomain]);

  const handleDomainClick = (domain: string) => {
    if (domain != resumeDomain) setResumeDomain(domain);
    console.log(domain);
  }

  return (
    <div className="Resumes">
      <div className="resumes-sidebar">
        <ul className="left-navbar-list">
          <li className="left-navbar-item" onClick={() => handleDomainClick("web development")}>
            <Card
              title="Web Development"
              thumbnail={webDevLogo}
              titlePlacement={Placement.Above}
              radius={0}
              height={200}
            />
          </li>
          <li className="left-navbar-item" onClick={() => handleDomainClick("data science")}>
            <Card
              title="Data Science"
              thumbnail={webDevLogo}
              titlePlacement={Placement.Above}
              radius={0}
              height={200}
            />
          </li>
          <li className="left-navbar-item" onClick={() => handleDomainClick("data engineering")}>
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
          <Document file={samplePDF}>
            <Page pageNumber={1} renderTextLayer={false} className="resumeEmbedding" renderAnnotationLayer={false}/>
          </Document>

        <div className="portfolioButton resumeButton">
          <Button buttonText="Download" handleClick={downloadResume} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
