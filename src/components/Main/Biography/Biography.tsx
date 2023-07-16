import { useEffect, useState } from "react";
import "./styles.css";
import { Col, Container, Row } from "react-bootstrap";
import { MDBIcon, MDBTypography } from "mdb-react-ui-kit";
const Biography = () => {
  let [biography, setBiography] = useState<any[]>([]);

  useEffect(() => {
    fetch("api/biography/sorted")
      .then((response) => response.json())
      .then((data) => setBiography(data));
  }, []);

  return (
    <Container className="text-white" >
      <Row xs={1} className="mb-3 mt-2">
        <Col xs={{ offset: 1, span: 7 }}>
          <MDBTypography tag="h2">Biography</MDBTypography>
        </Col>
      </Row>
      <Row xs={1} className="biography">
        {biography.map((bio) => {
          return (
            <Col className="mb-3" xs={{ offset: 2, span: 6 }} key={bio.id}>
              <MDBIcon fas icon="angle-right" />
              {bio.start_year ? bio.start_year + " - " : ""}
              {bio.end_year ? bio.end_year : "Now"} : {bio.occupation}
            </Col>
          );
        })
        }
      </Row>
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
