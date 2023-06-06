import "./styles.css";
import projectThumbnail from "../../../assets/basketball.png";
import Card from "../../shared/Card";
import Placement from "../../shared/Enums";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <h1 className="title">Popular Projects</h1>
      <div className="projectsSubContainer">
        <Card
          title="Project 1"
          thumbnail={projectThumbnail}
          radius={25}
          titlePlacement={Placement.Below}
        />
        <Card
          title="Project 2"
          thumbnail={projectThumbnail}
          radius={25}
          titlePlacement={Placement.Below}
        />
        <Card
          title="Project 3"
          thumbnail={projectThumbnail}
          radius={25}
          titlePlacement={Placement.Below}
        />
        <Card
          title="Project 4"
          thumbnail={projectThumbnail}
          radius={25}
          titlePlacement={Placement.Below}
        />
      </div>
    </div>
  );
};

export default Projects;
