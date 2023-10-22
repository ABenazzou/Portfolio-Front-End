// import Card from "../shared/Card";
// import Placement from "../shared/Enums";
import "./styles.css";
// import certificateLogo from "../../assets/basketball.png";
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FloatingLabel,
  Alert,
  Spinner,
  Nav,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../store/reducers";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../store";
import { Link, useLocation } from "react-router-dom";

const EditCertificate = () => {
  let isDarkMode = useSelector((state: State) => state.theme);
  let isAdmin = useSelector((state: State) => state.isAdmin);
  const { state } = useLocation();
  // console.log(state);



  //   let [isLoading, setIsLoading] = useState(true);
  let [name, setName] = useState(state.name);
  let [thumbnail, setThumbnail] = useState(state.thumbnail);
  let [provider, setProvider] = useState(state.provider);
  let [validityLink, setValidityLink] = useState(state.validityLink);
  let [dateObtained, setDateObtained] = useState(state.dateObtained.toString());

  let [validated, setValidated] = useState(false);
  let [success, setSuccess] = useState(false);
  let [failure, setFailure] = useState(false);
  let [isSaving, setIsSaving] = useState(false);

  const handleSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    setIsSaving(true);
    const form = event.currentTarget;
    setSuccess(false);
    setFailure(false);

    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setTimeout(() => setIsSaving(false), 1000);
    } else {
      saveCertificate(name, thumbnail, provider, validityLink, dateObtained);
    }

    setValidated(true);
  };

  const saveCertificate = (name: string, thumbnail: string, provider: string, validityLink: string, dateObtained: string) => {
    // sign in and set login state accordingly -> this refreshes the token
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json", authorization: `Bearer ${isAdmin.token}` },
      body: JSON.stringify({
        name: name,
        thumbnail: thumbnail,
        provider: provider,
        validity_link: validityLink,
        date_obtained: dateObtained,
      }),
      
    };

    fetch(`api/certificate/${state.id}`, options)
      .then((response) => {

        if(response.status == 200) {
          setSuccess(true);
          setFailure(false);
        }
        else{
          setFailure(true);
          setSuccess(false);
        }
      })
      .then(() => setIsSaving(false));
    //also need to set the received token
    // .then((data) => alert(data));
  };

  return (
    <Container className={isDarkMode ? "text-white mt-5" : "mt-5"}>
      {/* {isLoading &&
        <div className='d-flex justify-content-center'>
          <Spinner animation="border" variant={isDarkMode ? "secondary" : "dark"} className="d-flex justify-content-center" />
        </div>
      } */}

      {
        <Row xs={1} className="mb-3 mt-2">
          <Col className="mb-3">
            {success && (
              <Alert key="success" variant="success">
                <i className="fas fa-thumbs-up"></i> Saved Item
              </Alert>
            )}

            {failure && (
              <Alert key="danger" variant="danger">
                <i className="fas fa-circle-exclamation"></i> Unauthorized!
              </Alert>
            )}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="d-flex mb-3">
                <FloatingLabel label="Name">
                  <Form.Control
                    size="lg"
                    required
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="d-flex mb-3">
                <FloatingLabel label="Thumbnail">
                  <Form.Control
                    size="lg"
                    required
                    type="text"
                    placeholder="Thumbnail"
                    value={thumbnail}
                    onChange={(event) => setThumbnail(event.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="d-flex mb-3">
                <FloatingLabel label="Provider">
                  <Form.Control
                    size="lg"
                    required
                    type="text"
                    placeholder="Provider"
                    value={provider}
                    onChange={(event) => setProvider(event.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="d-flex mb-3">
                <FloatingLabel label="validityLink">
                  <Form.Control
                    size="lg"
                    required
                    type="text"
                    placeholder="validityLink"
                    value={validityLink}
                    onChange={(event) => setValidityLink(event.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
              
              <Form.Group className="d-flex mb-3">
                <FloatingLabel label="dateObtained">
                  <Form.Control
                    size="lg"
                    required
                    type="date"
                    placeholder="dateObtained"
                    value={dateObtained.toString()}
                    onChange={(event) => setDateObtained(event.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
             

              <Container className="d-flex justify-content-center align-items-center ">
                <Button
                  variant={isDarkMode ? "secondary" : "dark"}
                  type="submit"
                >
                  {isSaving ? (
                    <div className="d-flex justify-content-center mt-4">
                      <Spinner
                        size="sm"
                        animation="border"
                        variant={isDarkMode ? "dark" : "secondary"}
                      />
                    </div>
                  ) : (
                    "Save"
                  )}
                </Button>
              </Container>
            </Form>
          </Col>
        </Row>
      }

      <Row
        md={4}
        xs={2}
        className="d-flex justify-content-center align-items-center"
      >
        {isAdmin.isAdmin && (
          <>
            <Button>
              <Nav.Item className="nav-hover">
                <Nav.Link as={Link} to="/backoffice" state={{activeTab: 2}}>
                  Go Back
                </Nav.Link>
              </Nav.Item>
            </Button>
          </>
        )}
      </Row>
    </Container>
  );
};

export default EditCertificate;
