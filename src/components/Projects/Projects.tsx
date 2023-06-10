import Card from "../shared/Card";
import Placement from "../shared/Enums";
import webDevLogo from "../../assets/basketball.png";
import projectThumbnail from "../../assets/basketball.png";
import "./styles.css";
import { useEffect, useState } from "react";

const Projects = () => {
  let [webDevProjects, setWebDevProjects] = useState<any[]>([]);
  let [dataScienceProjects, setDataScienceProejcts] = useState<any[]>([]);
  let [dataEngineeringProejcts, setDataEngineeringProejcts] = useState<any[]>(
    []
  );

  useEffect(() => {
    fetch("https://portfolio.abenazzou.com/api/domain?name=web deva")
      .then((response) => response.json())
      .then((data) => setWebDevProjects(data.projects));
  }, []);

  return (
    <div className="Projects">
      <div className="projects-sidebar">
        <ul className="right-navbar-list">
          <li className="right-navbar-item">
            <Card
              title="Web Development"
              thumbnail={webDevLogo}
              titlePlacement={Placement.Above}
              radius={0}
              height={200}
            />
          </li>
          <li className="right-navbar-item">
            <Card
              title="Data Science"
              thumbnail={webDevLogo}
              titlePlacement={Placement.Above}
              radius={0}
              height={200}
            />
          </li>
          <li className="right-navbar-item">
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

      <div className="projects-container">
        <div className="section-container">
          <h1 className="title">Web Development</h1>
          <div className="projectsSubContainer">
            {webDevProjects.map((project) => {
              return (
                <Card
                  title={project.name}
                  thumbnail={projectThumbnail}
                  radius={25}
                  titlePlacement={Placement.Above}
                  height={200}
                  width={300}
                />
              );
            })}
          </div>
        </div>
        <div className="section-container">
          <h1 className="title">Data Science</h1>
          <div className="projectsSubContainer">
           
          </div>
        </div>
        <div className="section-container">
          <h1 className="title">Data Engineering</h1>
          <div className="projectsSubContainer">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
