import Card from "../shared/Card";
import Placement from "../shared/Enums";
import "./styles.css";
import webDevLogo from "../../assets/basketball.png";
import Button from "../shared/Button";
import { useEffect, useState } from "react";

const downloadResume = () => {
  console.log("Clicked download resume");
};
const Resume = () => {
  let [webDevResume, setWebDevResume] = useState(null);
  let [dataScienceResume, setDataScienceResume] = useState(null);
  let [dataEngineeringResume, setDataEngineeringResume] = useState(null);

  useEffect(() => {
    fetch("https://portfolio.abenazzou.com/api/domain?name=web development")
      .then((response) => response.json())
      .then((data) => {
        if (data.resume) setWebDevResume(data.resume);
      });
  }, []);

  useEffect(() => {
    fetch("https://portfolio.abenazzou.com/api/domain?name=data science")
      .then((response) => response.json())
      .then((data) => {
        if (data.resume) setDataScienceResume(data.resume);
      });
  }, []);

  useEffect(() => {
    fetch("https://portfolio.abenazzou.com/api/domain?name=data engineering")
      .then((response) => response.json())
      .then((data) => {
        if (data.resume) setDataEngineeringResume(data.resume);
      });
  }, []);

  return (
    <div className="Resumes">
      <div className="resumes-sidebar">
        <ul className="left-navbar-list">
          <li className="left-navbar-item">
            <Card
              title="Web Development"
              thumbnail={webDevLogo}
              titlePlacement={Placement.Above}
              radius={0}
              height={200}
            />
          </li>
          <li className="left-navbar-item">
            <Card
              title="Data Science"
              thumbnail={webDevLogo}
              titlePlacement={Placement.Above}
              radius={0}
              height={200}
            />
          </li>
          <li className="left-navbar-item">
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
        <div className="resumeEmbedding">PLACEHOLDER FOR RESUME EMBEDDING</div>
        <div className="portfolioButton resumeButton">
          <Button buttonText="Download" handleClick={downloadResume} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
