import Card from "../shared/Card";
import Placement from "../shared/Enums";
import webDevLogo from "../../assets/basketball.png";
import projectThumbnail from "../../assets/basketball.png";
import "./styles.css";
import { useEffect, useState } from "react";

const Projects = () => {
  let [webDevProjects, setWebDevProjects] = useState<any[]>([]);
  let [dataScienceProjects, setDataScienceProjects] = useState<any[]>([]);
  let [dataEngineeringProjects, setDataEngineeringProjects] = useState<any[]>(
    []
  );
  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    fetch("https://portfolio.abenazzou.com/api/domain?name=web development")
      .then((response) => response.json())
      .then((data) => {
        if (data.projects) setWebDevProjects(data.projects);
      });
  }, []);

  useEffect(() => {
    fetch("https://portfolio.abenazzou.com/api/domain?name=data science")
      .then((response) => response.json())
      .then((data) => {
        if (data.projects) setDataScienceProjects(data.projects);
      });
  }, []);

  useEffect(() => {
    fetch("https://portfolio.abenazzou.com/api/domain?name=data engineering")
      .then((response) => response.json())
      .then((data) => {
        if (data.projects) setDataEngineeringProjects(data.projects);
      });
  }, []);

  return (
    <div className="Projects">
      <div className="projects-sidebar">
        <ul className="right-navbar-list">
          <li className="right-navbar-item">
            <a href="#webDev">
              <Card
                title="Web Development"
                thumbnail={webDevLogo}
                titlePlacement={Placement.Above}
                radius={0}
                height={200}
              />
            </a>
          </li>
          <li className="right-navbar-item">
            <a href="#dataScience">
              <Card
                title="Data Science"
                thumbnail={webDevLogo}
                titlePlacement={Placement.Above}
                radius={0}
                height={200}
              />
            </a>
          </li>
          <li className="right-navbar-item">
            <a href="#dataEngineering">
              <Card
                title="Data Engineering"
                thumbnail={webDevLogo}
                titlePlacement={Placement.Above}
                radius={0}
                height={200}
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="projects-container">
        <div className="section-container">
          <h1 className="title" id="webDev">Web Development</h1>
          <div className="projectsSubContainer">
            {webDevProjects.map((project) => {
              return (
                <div className="projectCard" key={project.id} onClick={() => handleProjectClick(project.github_link)}>
                  <Card
                    key={project.id}
                    title={project.name}
                    thumbnail={projectThumbnail}
                    radius={25}
                    titlePlacement={Placement.Above}
                    height={200}
                    width={300}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="section-container">
          <h1 className="title" id="dataScience">Data Science</h1>
          <div className="projectsSubContainer">
            {dataScienceProjects.map((project) => {
              return (
                <div className="projectCard" key={project.id} onClick={() => handleProjectClick(project.github_link)}>
                  <Card
                    key={project.id}
                    title={project.name}
                    thumbnail={projectThumbnail}
                    radius={25}
                    titlePlacement={Placement.Above}
                    height={200}
                    width={300}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="section-container">
          <h1 className="title" id="dataEngineering">Data Engineering</h1>
          <div className="projectsSubContainer">

            {dataEngineeringProjects.map((project) => {
              return (
                <div className="projectCard" key={project.id} onClick={() => handleProjectClick(project.github_link)}>
                  <Card
                    key={project.id}
                    title={project.name}
                    thumbnail={projectThumbnail}
                    radius={25}
                    titlePlacement={Placement.Above}
                    height={200}
                    width={300}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
