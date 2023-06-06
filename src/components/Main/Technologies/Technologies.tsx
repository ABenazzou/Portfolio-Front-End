import "./styles.css";
import Placement from "../../shared/Enums";
import Card from "../../shared/Card";
import reactThumbnail from "../../../assets/basketball.png";

const Technologies = () => {
  return (
    <div className="technologiesContainer">
      <h1 className="title">Technologies</h1>
      <div className="technologiesSubContainer">
        <Card
          title="React"
          thumbnail={reactThumbnail}
          radius={400}
          titlePlacement={Placement.Below}
        />
        <Card
          title="React"
          thumbnail={reactThumbnail}
          radius={400}
          titlePlacement={Placement.Below}
        />
        <Card
          title="React"
          thumbnail={reactThumbnail}
          radius={400}
          titlePlacement={Placement.Below}
        />
        <Card
          title="React"
          thumbnail={reactThumbnail}
          radius={400}
          titlePlacement={Placement.Below}
        />
      </div>
    </div>
  );
};

export default Technologies;
