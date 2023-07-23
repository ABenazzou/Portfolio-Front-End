import "./styles.css";
// import basketballLogo from "../../../assets/basketball.png";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { MDBTypography } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { State } from "../../../store/reducers";


const Hobbies = () => {
  let [hobbies, setHobbies] = useState<any[]>([]);
  let isDarkMode = useSelector((state: State) => state.theme);

  useEffect(() => {
    fetch("api/hobby")
      .then((response) => response.json())
      .then((data) => setHobbies(data));
  }, []);

  return (
    <Container  className={isDarkMode?"text-white":""}>
      <Row xs={1} className="mb-3 mt-2">
        <Col xs={{ offset: 1, span: 7 }}>
          <MDBTypography tag="h2">Hobbies</MDBTypography>
        </Col>
      </Row>
      <Row md={4} xs={2} className="justify-content-md-right offset-1 ">
        {hobbies.map((hobby) => {
          return (
            <Col key={hobby.id} className="mb-3 d-flex align-items-stretch">
              <Card bg={isDarkMode?'dark':'light'} text={isDarkMode?'white':'dark'} className="d-flex align-items-center justify-content-center">
                <Card.Title className="pt-3 text-center pb-1">{hobby.name}</Card.Title>
                <Card.Img src={hobby.logo} height={'250px'}/>
                <Card.Body className="pb-3">
                  <Card.Text>{hobby.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })} 
                 
      </Row>

    </Container>
    // <div className="hobbiesContainer">
    //   <h1 className="title">Hobbies</h1>
    //   <div className="hobbiesSubContainer">
    //     {hobbies.map((hobby) => {
    //       return (
    //         <Hobby
    //           key={hobby.id}
    //           hobbyName={hobby.name}
    //           hobbyLogo={basketballLogo}
    //           hobbyDescription={hobby.description}
    //         />
    //       );
    //     })}
    //  </div>
    // </div>
  );
};

export default Hobbies;
