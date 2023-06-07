import Card from "../shared/Card";
import Placement from "../shared/Enums";
import "./styles.css";
import webDevLogo from '../../assets/basketball.png';
import Button from "../shared/Button";

const downloadResume = () => {
  console.log("Clicked download resume");
}
const Resume = () => {
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
        <div className="resumeEmbedding">
          PLACEHOLDER FOR RESUME EMBEDDING
        </div>
        <div className="portfolioButton resumeButton">
          <Button buttonText="Download" handleClick={downloadResume} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
