import "./styles.css";
import projectThumbnail from "../../../assets/basketball.png";
import Card from "../../shared/Card";
import Placement from "../../shared/Enums";
import { useEffect, useState } from "react";

const Projects = () => {
  let [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://portfolio.abenazzou.com/api/project/mostVisited")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="projectsContainer">
      <h1 className="title">Popular Projects</h1>
      <div className="projectsSubContainer">
        {projects.map((project) => {
          return (
            <Card
              title={project.name}
              thumbnail={projectThumbnail}
              radius={25}
              titlePlacement={Placement.Below}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
