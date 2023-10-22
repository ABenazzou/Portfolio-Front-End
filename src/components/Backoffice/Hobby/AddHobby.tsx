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

const AddHobby = () => {
  let isDarkMode = useSelector((state: State) => state.theme);
  let isAdmin = useSelector((state: State) => state.isAdmin);
  // console.log(state);



  //   let [isLoading, setIsLoading] = useState(true);
  let [name, setName] = useState("");
  let [logo, setLogo] = useState("");
  let [description, setDescription] = useState("");

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
      saveHobby(name, logo, description);
    }

    setValidated(true);
  };

  const saveHobby = (name: string, logo: string, description: string) => {
    // sign in and set login state accordingly -> this refreshes the token
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json", authorization: `Bearer ${isAdmin.token}` },
      body: JSON.stringify({
        name: name,
        logo: logo,
        description: description,
      }),
      
    };

    fetch(`api/hobby`, options)
      .then((response) => {

        if(response.status == 201) {
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
                <FloatingLabel label="Logo">
                  <Form.Control
                    size="lg"
                    required
                    type="text"
                    placeholder="Logo"
                    value={logo}
                    onChange={(event) => setLogo(event.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="d-flex mb-3">
                <FloatingLabel label="Description">
                  <Form.Control
                    size="lg"
                    required
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
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
                    "Add Hobby"
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
                <Nav.Link as={Link} to="/backoffice" state={{activeTab: 4}}>
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

export default AddHobby;
