import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Button from "../../shared/Button";
import Avatar from "./Avatar";
import Img from "../../../assets/basketball.png";
import "./styles.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

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
    <Container className="text-white mt-5" >
      <Row md={2} xs={1}>
        <Col className="d-flex justify-content-center align-items-center" >
          <Image src={Img} roundedCircle className="img-fluid" style={{maxWidth: '100%', height: 'auto', width: 'auto'}} />
        </Col>
        <Col className="my-auto">
          <Container className="d-flex justify-content-center align-items-center descriptionContent">
            {mainDescription}
          </Container>
          <Container className="d-flex justify-content-center align-items-center descriptionContent">
            {secondaryDescription}
          </Container>
          <Container className="d-flex justify-content-center align-items-center">
            <Button variant="secondary" className="portfolioButton" onClick={forwardPortfolio}>My Portfolio</Button>
          </Container>
        </Col>
      </Row>
    </Container>
    // <div className="Container">
    //   <Avatar />
    //   <div className="subContainer">
    //     <div className="descriptionContent">{mainDescription}</div>
    //     <div className="descriptionContent">{secondaryDescription}</div>
    //     <div className="portfolioButton">
    //       <Button buttonText="My Portfolio" handleClick={forwardPortfolio} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Description;
