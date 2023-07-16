import Certificates from "./Certificates/Certificates";
import Biography from "./Biography/Biography";
import Description from "./Description/Description";
import Hobbies from "./Hobbies/Hobbies";
import "./Home.css";
import Technologies from "./Technologies/Technologies";
import Projects from "./Projects/Projects";
import { Container } from "react-bootstrap";
const Home = () => {
  return (
    <Container className="mt-5">
      <Description />
      <Biography />
      <Hobbies />
      <Technologies />
      <Projects />
      <Certificates />
    </Container>
  );
};

export default Home;
