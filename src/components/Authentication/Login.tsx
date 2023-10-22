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
import { State } from "../../store/reducers";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store";
import { Link } from "react-router-dom";

const Login = () => {
  let isDarkMode = useSelector((state: State) => state.theme);
  let isAdmin = useSelector((state: State) => state.isAdmin);

  let dispatch = useDispatch();

  const { setAdmin } = bindActionCreators(actionCreators, dispatch);

  //   let [isLoading, setIsLoading] = useState(true);
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let [validated, setValidated] = useState(false);
  let [success, setSuccess] = useState(false);
  let [failure, setFailure] = useState(false);
  let [isLogging, setIsLogging] = useState(false);

  const handleSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    setIsLogging(true);
    const form = event.currentTarget;
    setSuccess(false);
    setFailure(false);

    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setTimeout(() => setIsLogging(false), 1000);
    } else {
      signin(login, password);
    }

    setValidated(true);
  };

  const setLoginState = async (state: boolean, responseToken?: Response) => {
    if (state) {
      setSuccess(true);
      //set token
      const response = await responseToken?.json();
      setAdmin(true, response.access_token); //also acess_token
      setFailure(false);
    } else {
      setSuccess(false);
      setFailure(true);
    }
  };

  const signin = (username: string, password: string) => {
    // sign in and set login state accordingly -> this refreshes the token
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: login,
        password: password,
      }),
    };

    fetch("api/auth/login", options)
      .then((response) => {
        response.status == 201
          ? setLoginState(true, response)
          : setLoginState(false);
      })
      .then(() => setIsLogging(false));
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
                <i className="fas fa-thumbs-up"></i> Login token refreshed. You
                are authorized now.
              </Alert>
            )}

            {failure && (
              <Alert key="danger" variant="danger">
                <i className="fas fa-circle-exclamation"></i> Unauthorized!
              </Alert>
            )}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="d-flex mb-3">
                <FloatingLabel label="Login">
                  <Form.Control
                    size="lg"
                    required
                    type="text"
                    placeholder="Login"
                    onChange={(event) => setLogin(event.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group>
                <FloatingLabel label="Password" className="mb-3">
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <Container className="d-flex justify-content-center align-items-center ">
                <Button
                  variant={isDarkMode ? "secondary" : "dark"}
                  type="submit"
                >
                  {isLogging ? (
                    <div className="d-flex justify-content-center mt-4">
                      <Spinner
                        size="sm"
                        animation="border"
                        variant={isDarkMode ? "dark" : "secondary"}
                      />
                    </div>
                  ) : (
                    "Sign In"
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
                <Nav.Link as={Link} to="/backoffice" state={{activeTab: 5}}>
                  Back Office
                </Nav.Link>
              </Nav.Item>
            </Button>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Login;
