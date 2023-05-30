import Button from "../../shared/Button";
import Avatar from "./Avatar";
import "./styles.css";

const forwardPortfolio = () => {
  console.log("Go to portfolio page");
};
const Description = () => {
  return (
    <div className="Container">
      <Avatar />
      <div className="subContainer">
        <div className="descriptionContent">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
        <div className="descriptionContent">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div className="portfolioButton">
          <Button buttonText="My Portfolio" handleClick={forwardPortfolio} />
        </div>
      </div>
    </div>
  );
};

export default Description;
