import "./styles.css";
// import Placement from "../../shared/Enums";
// import Card from "../../shared/Card";
// import reactThumbnail from "../../../assets/basketball.png";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { MDBTypography } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { State } from "../../../store/reducers";

const Technologies = () => {
  let [technologies, setTechnologies] = useState<any[]>([]);
  let isDarkMode = useSelector((state: State) => state.theme);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://portfolio.abenazzou.com/api/technology")
      .then((response) => response.json())
      .then((data) => setTechnologies(data))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <Container className={isDarkMode ? "text-white" : ""}>
      <Row xs={1} className="mb-3 mt-2">
        <Col xs={{ offset: 1, span: 7 }}>
          <MDBTypography tag="h2">Favorite Technologies</MDBTypography>
        </Col>
      </Row>
      <Row md={5} xs={2} className="justify-content-md-right offset-1">
        {isLoading &&
          <div className='d-flex justify-content-center'>
            <Spinner animation="border" variant={isDarkMode ? "secondary" : "dark"} className="d-flex justify-content-center" />
          </div>
        }
        {technologies.map((technology) => {
          return (
            <Col key={technology.id} className="mb-3 d-flex align-items-stretch">
              <Card bg={isDarkMode ? 'dark' : 'light'} text={isDarkMode ? 'white' : 'dark'} className="d-flex align-items-center">
                <Card.Img src={technology.logo} />
                <Card.Title className="pt-3 text-center pb-1">{technology.name}</Card.Title>
              </Card>
            </Col>
          )
        })}

      </Row>

    </Container>
    // <div className="technologiesContainer">
    //   <h1 className="title">Technologies</h1>
    //   <div className="technologiesSubContainer">
    //     {technologies.map((technology) => {
    //       return (
    //         <Card
    //           key={technology.id}
    //           title={technology.name}
    //           thumbnail={reactThumbnail}
    //           radius={400}
    //           titlePlacement={Placement.Below}
    //         />
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Technologies;
