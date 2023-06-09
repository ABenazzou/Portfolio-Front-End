import Hobby from "./Hobby";
import "./styles.css";
import basketballLogo from "../../../assets/basketball.png";
import { useEffect, useState } from "react";

const Hobbies = () => {
  let [hobbies, setHobbies] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://portfolio.abenazzou.com/api/hobby")
      .then((response) => response.json())
      .then((data) => setHobbies(data));
  }, []);
  return (
    <div className="hobbiesContainer">
      <h1 className="title">Hobbies</h1>
      <div className="hobbiesSubContainer">
        {hobbies.map((hobby) => {
          return (
            <Hobby
              hobbyName={hobby.name}
              hobbyLogo={basketballLogo}
              hobbyDescription={hobby.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hobbies;
