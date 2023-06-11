import "./styles.css";
import Placement from "../../shared/Enums";
import Card from "../../shared/Card";
import reactThumbnail from "../../../assets/basketball.png";
import { useEffect, useState } from "react";

const Technologies = () => {
  let [technologies, setTechnologies] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://portfolio.abenazzou.com/api/technology")
      .then((response) => response.json())
      .then((data) => setTechnologies(data));
  }, []);

  return (
    <div className="technologiesContainer">
      <h1 className="title">Technologies</h1>
      <div className="technologiesSubContainer">
        {technologies.map((technology) => {
          return (
            <Card
              key={technology.id}
              title={technology.name}
              thumbnail={reactThumbnail}
              radius={400}
              titlePlacement={Placement.Below}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
