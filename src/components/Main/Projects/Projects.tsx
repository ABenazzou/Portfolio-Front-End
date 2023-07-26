import "./styles.css";
// import projectThumbnail from "../../../assets/basketball.png";
// import Card from "../../shared/Card";
// import Placement from "../../shared/Enums";
import { useEffect, useState } from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { State } from "../../../store/reducers";

const Projects = () => {
  let [projects, setProjects] = useState<any[]>([]);
  let isDarkMode = useSelector((state: State) => state.theme);
  let [isLoading, setIsLoading] = useState(true);

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    fetch("api/project/mostVisited")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <Container className={isDarkMode ? "text-white" : ""}>
      <Row xs={1} className="mb-3 mt-2">
        <Col xs={{ offset: 1, span: 7 }}>
          <MDBTypography tag="h2">Popular Projects</MDBTypography>
        </Col>
      </Row>
      <Row md={4} xs={2} className="justify-content-md-right offset-1">

        {isLoading &&
          <div className='d-flex justify-content-center'>
            <Spinner animation="border" variant={isDarkMode ? "secondary" : "dark"} className="d-flex justify-content-center" />
          </div>
        }

        {projects.map((project) => {
          return (
            <Col key={project.id} className="mb-3 align-items-stretch">
              <Card bg={isDarkMode ? 'dark' : 'light'} text={isDarkMode ? 'white' : 'dark'} className="d-flex align-items-center pointerHover justify-content-center" onClick={() => handleProjectClick(project.github_link)}>
                <Card.Img src={project.thumbnail} />
                <Card.Title className="pt-3 text-center pb-1">{project.name}</Card.Title>
              </Card>
            </Col>
          )
        })}

      </Row>

    </Container>
    // <div className="projectsContainer">
    //   <h1 className="title">Popular Projects</h1>
    //   <div className="projectsSubContainer">
    //     {projects.map((project) => {
    //       return (
    //         <div className="projectCard" key={project.id} onClick={() => handleProjectClick(project.github_link)}>
    //           <Card
    //             key={project.id}
    //             title={project.name}
    //             thumbnail={projectThumbnail}
    //             radius={25}
    //             titlePlacement={Placement.Below}
    //           />
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Projects;
