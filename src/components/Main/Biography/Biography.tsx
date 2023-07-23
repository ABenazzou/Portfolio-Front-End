import { useEffect, useState } from "react";
import "./styles.css";
import { Col, Container, Row } from "react-bootstrap";
import { MDBIcon, MDBTypography } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { State } from "../../../store/reducers";
const Biography = () => {
  let [biography, setBiography] = useState<any[]>([]);
  let isDarkMode = useSelector((state: State) => state.theme);
  


  useEffect(() => {
    fetch("api/biography/sorted")
      .then((response) => response.json())
      .then((data) => setBiography(data));
  }, []);

  return (
    <Container className={isDarkMode?"text-white":""} >
      <Row xs={1} className="mb-3 mt-2">
        <Col xs={{ offset: 1, span: 7 }}>
          <MDBTypography tag="h2">Biography</MDBTypography>
        </Col>
      </Row>

      {biography.map((bio) => {
        return (
          <Row xs={1} className="biography" key={bio.id}>
            <Col xs={{ offset: 2, span: 10 }} className="d-flex gap-3 align-items-center">
              <MDBIcon fas icon="angle-right" />
              {bio.start_year ? bio.start_year + " - " : ""}
              {bio.end_year ? bio.end_year : "Now"} : {bio.occupation.split(" - ")[0]}
            </Col>
            <Col className="mb-3 biography-job" xs={{ offset: 2, span: 7 }}> 
              {bio.occupation.split(" - ")[1]}
            </Col>
          </Row>
        );
      })
      }

    </Container>
    // <div className="biographyContainer">
    //   <h1 className="title">Biography</h1>
    //   <div className="biography">
    //     {biography.map((bio) => {
    //       return (
    //         <div key={bio.id}>
    //           {bio.start_year ? bio.start_year + " - " : ""}
    //           {bio.end_year ? bio.end_year : "Now"} : {bio.occupation}
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Biography;
