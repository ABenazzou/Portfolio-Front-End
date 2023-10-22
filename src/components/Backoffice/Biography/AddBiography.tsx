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

const AddBiography = () => {
  let isDarkMode = useSelector((state: State) => state.theme);
  let isAdmin = useSelector((state: State) => state.isAdmin);
  // console.log(state);



  //   let [isLoading, setIsLoading] = useState(true);
  let [startYear, setStartYear] = useState(0);
  let [endYear, setEndYear] = useState(0);
  let [occupation, setOccupation] = useState("");
  // let [domainId, setDomainId] = useState(0);

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
      saveBiography(startYear, endYear, occupation);
    }

    setValidated(true);
  };

  const saveBiography = (startYear: number, endYear: number, occupation: string) => {
    // sign in and set login state accordingly -> this refreshes the token
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json", authorization: `Bearer ${isAdmin.token}` },
      body: JSON.stringify({
        start_year: startYear,
        end_year: endYear,
        occupation: occupation
      }),
      
    };

    if (startYear == 0 && endYear == 0) {
      options = {
        method: "POST",
        headers: { "Content-Type": "application/json", authorization: `Bearer ${isAdmin.token}` },
        body: JSON.stringify({
          start_year: null,
          end_year: null,
          occupation: occupation
        }),
        
      };
    }
    else if (endYear == 0) {
      options = {
        method: "POST",
        headers: { "Content-Type": "application/json", authorization: `Bearer ${isAdmin.token}` },
        body: JSON.stringify({
          start_year: startYear,
          end_year: null,
          occupation: occupation
        }),
        
      };
    }
    else if (startYear == 0) {
      options = {
        method: "POST",
        headers: { "Content-Type": "application/json", authorization: `Bearer ${isAdmin.token}` },
        body: JSON.stringify({
          start_year: null,
          end_year: endYear,
          occupation: occupation
        }),
        
      };
    }


    fetch(`api/biography`, options)
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
                <FloatingLabel label="startYear">
                  <Form.Control
                    size="lg"
                    required
                    type="number"
                    placeholder="startYear"
                    value={startYear}
                    onChange={(event) => setStartYear(parseInt(event.target.value))}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="d-flex mb-3">
                <FloatingLabel label="endYear">
                  <Form.Control
                    size="lg"
                    required
                    type="number"
                    placeholder="endYear"
                    value={endYear}
                    onChange={(event) => setEndYear(parseInt(event.target.value))}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="d-flex mb-3">
                <FloatingLabel label="occupation">
                  <Form.Control
                    size="lg"
                    required
                    type="text"
                    placeholder="occupation"
                    value={occupation.toString()}
                    onChange={(event) => setOccupation(event.target.value)}
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
                    "Add Biography"
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
                <Nav.Link as={Link} to="/backoffice" state={{activeTab: 1}}>
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

export default AddBiography;
