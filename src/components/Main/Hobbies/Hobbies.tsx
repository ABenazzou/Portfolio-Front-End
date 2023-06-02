import Hobby from "./Hobby";
import "./styles.css";
import basketballLogo from "../../../assets/basketball.png";

const Hobbies = () => {
  return (
    <div className="hobbiesContainer">
      <h1 className="title">Hobbies</h1>
      <div className="hobbiesSubContainer">
        <Hobby
          hobbyName="Basketball"
          hobbyLogo={basketballLogo}
          hobbyDescription="I Love Basketball"
        />

        <Hobby
          hobbyName="Football"
          hobbyLogo={basketballLogo}
          hobbyDescription="I Love Football"
        />

        <Hobby
          hobbyName="Music"
          hobbyLogo={basketballLogo}
          hobbyDescription="I Love Music"
        />
        <Hobby
          hobbyName="Competitive Programming"
          hobbyLogo={basketballLogo}
          hobbyDescription="I Love Competitive Programming"
        />
      </div>
    </div>
  );
};

export default Hobbies;
