import "./styles.css";
import projectThumbnail from "../../../assets/basketball.png";
import Card from "../../shared/Card";
import Placement from "../../shared/Enums";
import { useEffect, useState } from "react";

const Projects = () => {
  let [projects, setProjects] = useState<any[]>([]);
  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    fetch("api/project/mostVisited")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="projectsContainer">
      <h1 className="title">Popular Projects</h1>
      <div className="projectsSubContainer">
        {projects.map((project) => {
          return (
            <div className="projectCard" key={project.id} onClick={() => handleProjectClick(project.github_link)}>
              <Card
                key={project.id}
                title={project.name}
                thumbnail={projectThumbnail}
                radius={25}
                titlePlacement={Placement.Below}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
