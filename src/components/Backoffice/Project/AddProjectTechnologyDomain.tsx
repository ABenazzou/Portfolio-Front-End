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

const AddProjectTechnologyDomain = () => {
  let isDarkMode = useSelector((state: State) => state.theme);
  let isAdmin = useSelector((state: State) => state.isAdmin);
  const { state } = useLocation();
  // console.log(state);
  



  //   let [isLoading, setIsLoading] = useState(true);
  let [existingTechnologies, setExistingTechnologies] = useState<any[]>([]);
  let [technology, setTechnology] = useState(-1);

  let [existingDomains, setExistingDomains] = useState<any[]>([]);
  let [domain, setDomain] = useState(-1);

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
      saveProject(technology, domain);
    }

    setValidated(true);
  };

  useEffect(() => {
    fetch("/api/technology", {method: "GET"})
    .then((response) => response.json())
    .then((data) => setExistingTechnologies(data))

    fetch("/api/domain", {method: "GET"})
    .then((response) => response.json())
    .then((data) => setExistingDomains(data))
  }, [])
  const saveProject = (technology: number, domain: number) => {
    // sign in and set login state accordingly -> this refreshes the token
    const options = {
      method: "PATCH",
      headers: { authorization: `Bearer ${isAdmin.token}` },
    //   body: JSON.stringify({
    //     name: name,
    //     thumbnail: thumbnail,
    //     visits_count: state.visits_count,
    //     github_link: github_link,
    //   }),
      
    };
    let url = `api/project/${state.id}?technologyId=${technology}&domainId=${domain}`
    if (technology == -1 && domain == -1)
    {
      setSuccess(true);
      setFailure(false);
      setIsSaving(false)
      return; // do not add anything
    }
    else if (technology == -1) {
      url = `api/project/${state.id}?domainId=${domain}`
    }
    else if (domain == -1) {
      url = `api/project/${state.id}?technologyId=${technology}`
    }
    

    fetch(url, options)
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
                <i className="fas fa-thumbs-up"></i> Updated succesfully
              </Alert>
            )}

            {failure && (
              <Alert key="danger" variant="danger">
                <i className="fas fa-circle-exclamation"></i> Unauthorized!
              </Alert>
            )}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Select
                aria-label="project_technology"
                className="d-flex mb-3"
                size="lg"
                required
                value={technology}
                onChange={(event) => setTechnology(parseInt(event.target.value))}
              >
                <option key={-1} value={-1}>Do not add Technology</option>

                {
                    existingTechnologies.map((row) => {
                        return(
                            <option key={row.id} value={row.id}>{row.name}</option>
                        )
                    })
                }
              </Form.Select>

              <Form.Select
                aria-label="project_domain"
                className="d-flex mb-3"
                size="lg"
                required
                value={domain}
                onChange={(event) => setDomain(parseInt(event.target.value))}
              >
                <option key={-1} value={-1}>Do not add Domain</option>
                {
                    existingDomains.map((row) => {
                        return(
                            <option key={row.id} value={row.id}>{row.name}</option>
                        )
                    })
                }
              </Form.Select>
             

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
                <Nav.Link as={Link} to="/backoffice" state={{activeTab: 5}}>
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

export default AddProjectTechnologyDomain;
