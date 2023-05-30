import Certificates from "./Certificates/Certificates";
import Biography from "./Biography/Biography";
import Description from "./Description/Description";
import Hobbies from "./Hobbies/Hobbies";
import "./Home.css";
import Projects from "./Projects/Projects";
import Technologies from "./Technologies/Technologies";
const Home = () => {
  return (
    <div className="Home">
      <Description />
      <Biography />
      <Hobbies />
      <Technologies />
      <Projects />
      <Certificates />
    </div>
  );
};

export default Home;
