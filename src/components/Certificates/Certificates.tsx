// import Card from "../shared/Card";
import Placement from "../shared/Enums";
import "./styles.css";
import certificateLogo from "../../assets/basketball.png";
import { useEffect, useState } from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import { Container, Row, Col, Card } from "react-bootstrap";

const Certificates = () => {
  let [certificates, setCertificates] = useState<any[]>([]);
  const handleCertificateClick = (certificateLink: string) => {
    console.log(certificateLink);
    window.open(certificateLink, '_blank', 'noopener,noreferrer');
  }


  useEffect(() => {
    fetch("api/certificate/latest")
      .then((response) => response.json())
      .then((data) => setCertificates(data));
  }, []);

  return (
    <Container className="text-white mt-5">
      <Row xs={1} className="mb-3 mt-2">
        <Col className="mb-3">
          <MDBTypography tag="h2" className="d-flex justify-content-center">{certificates.length} Certificates</MDBTypography>
        </Col>
      </Row>
      <Row md={4} xs={2} className="justify-content-md-right offset-1">
        {certificates.map((certificate) => {
          return (
            <Col key={certificate.id} className="mb-3">
              <Card bg='dark' text='white' className="d-flex align-items-center pointerHover" onClick={() => handleCertificateClick(certificate.validity_link)}>
                <Card.Img src={certificateLogo} />
                <Card.Title className="pt-3">{certificate.name}</Card.Title>
              </Card>
            </Col>
          )
        })}

      </Row>

    </Container>
    // <div className="certificateContainer">
    //   <h1 className="title center">5 Certificates</h1>
    //   <div className="certificateSubContainer">
    //     {certificates.map((certificate) => {
    //       return (
    //         <div key={certificate.id} className="certificateCard" onClick={() => handleCertificateClick(certificate.validity_link)}>
    //           <Card
    //             key={certificate.id}
    //             title={certificate.name}
    //             thumbnail={certificateLogo}
    //             radius={50}
    //             titlePlacement={Placement.Undefined}
    //             height={300}
    //             width={500}
    //           />
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Certificates;
