import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Button from "../../shared/Button";
// import Img from "../../../assets/basketball.png";
import "./styles.css";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Avatar } from '@readyplayerme/visage';
import { useSelector } from "react-redux";
import { State } from "../../../store/reducers";

const Description = () => {
  const navigate = useNavigate();
  const forwardPortfolio = () => {
    navigate('/projects')
  };

  let [mainDescription, setMainDescription] = useState('');
  let [secondaryDescription, setSecondaryDescription] = useState('');
  let [avatar, setAvatar] = useState('');
  let isDarkMode = useSelector((state: State) => state.theme);
  let [isLoadingAvatar, setIsLoadingAvatar] = useState(true);
  let [isLoadingDescription1, setIsLoadingDescription1] = useState(true);
  let [isLoadingDescription2, setIsLoadingDescription2] = useState(true);

  useEffect(() => {
    fetch("api/section?title=Main Description")
      .then((response) => response.json())
      .then((data) => setMainDescription(data.content))
      .then(() => setIsLoadingDescription1(false));

    fetch(
      "api/section?title=Secondary Description"
    )
      .then((response) => response.json())
      .then((data) => setSecondaryDescription(data.content))
      .then(() => setIsLoadingDescription2(false));

    fetch("api/section?type=image_content&title=Avatar")
      .then((response) => response.json())
      .then((data) => setAvatar(data.content))
      .then(() => setIsLoadingAvatar(false));
  }, []);

  return (
    <Container className={isDarkMode ? "text-white mt-5" : "mt-5"} >
      <Row md={2} xs={1}>
        <Col className="d-flex justify-content-center" >
          {isLoadingAvatar &&
            <div className='d-flex justify-content-center'>
              <Spinner animation="border" variant={isDarkMode ? "secondary" : "dark"} className="d-flex justify-content-center" />
            </div>
          }
          <Avatar modelSrc={avatar} />
          {/* <Image src={Img} roundedCircle className="img-fluid" style={{maxWidth: '100%', height: 'auto', width: 'auto'}} /> */}
        </Col>
        <Col className="my-auto">
          {(isLoadingDescription1 || isLoadingDescription2) &&
            <div className='d-flex justify-content-center'>
              <Spinner animation="border" variant={isDarkMode ? "secondary" : "dark"} className="d-flex justify-content-center" />
            </div>
          }
          <Container className="d-flex justify-content-center align-items-center descriptionContent">
            {mainDescription}
          </Container>
          <Container className="d-flex justify-content-center align-items-center descriptionContent">
            {secondaryDescription}
          </Container>
          <Container className="d-flex justify-content-center align-items-center">
            <Button variant={isDarkMode ? "secondary" : "dark"} className="portfolioButton" onClick={forwardPortfolio}>My Portfolio</Button>
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
