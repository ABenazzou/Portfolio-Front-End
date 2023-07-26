// import Card from "../../shared/Card";
// import Placement from "../../shared/Enums";
// import certificateThumbnail from "../../../assets/basketball.png";
import "./styles.css";
import { useEffect, useState } from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { State } from "../../../store/reducers";

const Certificates = () => {
  let [certificates, setCertificates] = useState<any[]>([]);
  let isDarkMode = useSelector((state: State) => state.theme);
  let [isLoading, setIsLoading] = useState(true);

  const handleCertificateClick = (certificateLink: string) => {
    window.open(certificateLink, '_blank', 'noopener,noreferrer');
  }

  useEffect(() => {
    fetch("api/certificate/latest")
      .then((response) => response.json())
      .then((data) => setCertificates(data))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <Container className={isDarkMode ? "text-white" : ""}>
      <Row xs={1} className="mb-3 mt-2">
        <Col xs={{ offset: 1, span: 7 }}>
          <MDBTypography tag="h2">Recent Certificates</MDBTypography>
        </Col>
      </Row>
      <Row md={4} xs={2} className="justify-content-md-right offset-1">
        {isLoading &&
          <div className='d-flex justify-content-center'>
            <Spinner animation="border" variant={isDarkMode ? "secondary" : "dark"} className="d-flex justify-content-center" />
          </div>
        }
        {certificates.map((certificate) => {
          return (
            <Col key={certificate.id} className="mb-3 align-items-stretch">
              <Card bg={isDarkMode ? 'dark' : 'light'} text={isDarkMode ? 'white' : 'dark'} className="d-flex align-items-center pointerHover justify-content-center" onClick={() => handleCertificateClick(certificate.validity_link)}>
                <Card.Img src={certificate.thumbnail} />
                <Card.Title className="pt-3 text-center pb-1">{certificate.name}</Card.Title>
              </Card>
            </Col>
          )
        })}

      </Row>

    </Container>
    // <div className="certificatesContainer">
    //   <h1 className="title">Recent Certificates</h1>
    //   <div className="certificatesSubContainer">
    //     {certificates.map((certificate) => {
    //       return (
    //         <div key={certificate.id} className="certificateCard" onClick={() => handleCertificateClick(certificate.validity_link)}>
    //         <Card
    //           key={certificate.id}
    //           title={certificate.name}
    //           thumbnail={certificateThumbnail}
    //           radius={25}
    //           titlePlacement={Placement.Below}
    //           height={500}
    //           width={500}
    //         />
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Certificates;
