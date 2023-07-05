import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import Avatar from "./Avatar";
import "./styles.css";


const Description = () => {
  const navigate = useNavigate();

  const forwardPortfolio = () => {
    navigate('/projects')
  };

  let [mainDescription, setMainDescription] = useState(null);
  let [secondaryDescription, setSecondaryDescription] = useState(null);

  useEffect(() => {
    fetch("api/section?title=Main Description")
      .then((response) => response.json())
      .then((data) => setMainDescription(data.content));

    fetch(
      "api/section?title=Secondary Description"
    )
      .then((response) => response.json())
      .then((data) => setSecondaryDescription(data.content));
  }, []);

  return (
    <div className="Container">
      <Avatar />
      <div className="subContainer">
        <div className="descriptionContent">{mainDescription}</div>
        <div className="descriptionContent">{secondaryDescription}</div>
        <div className="portfolioButton">
          <Button buttonText="My Portfolio" handleClick={forwardPortfolio} />
        </div>
      </div>
    </div>
  );
};

export default Description;
