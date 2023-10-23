// import Card from "../shared/Card";
// import Placement from "../shared/Enums";
// import webDevLogo from "../../assets/basketball.png";
// import projectThumbnail from "../../assets/basketball.png";
import "./styles.css";
import { useEffect, useState } from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import { Container, Row, Col, Card, Button, Nav, Navbar, Tabs, Tab, Spinner } from "react-bootstrap";
// import Placement from "../shared/Enums";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../../store/reducers";

const Projects = () => {
  // let [webDevProjects, setWebDevProjects] = useState<any[]>([]);
  // let [dataScienceProjects, setDataScienceProjects] = useState<any[]>([]);
  // let [dataEngineeringProjects, setDataEngineeringProjects] = useState<any[]>(
  //   []
  // );

  let [projects, setProjects] = useState<any[]>([]);
  let [projectsCategory, setProjectsCategory] = useState('');
  let [categories, setCategories] = useState<any[]>([]);
  let isDarkMode = useSelector((state: State) => state.theme);
  let [isLoading, setIsLoading] = useState(true);
  let [isLoadingTab, setIsLoadingTab] = useState(true);

  const handleProjectClick = async (project: any) => {

    window.open(project.github_link, '_blank', 'noopener,noreferrer');

    const options = {
      method: "PATCH",      
    };

    let url = `api/project/visit/${project.id}`

    let response = await fetch(url, options)

  };

  const handleSelect = (key: string | null) => {
    if (key) setProjectsCategory(categories[parseInt(key) - 1].name);
    // switch(key) {
    //   case "1": {
    //     setProjectsCategory(categories);
    //     break;
    //   }
    //   case "2": {
    //     setProjectsCategory("data science");
    //     break;
    //   }
    //   case "3": {
    //     setProjectsCategory("data engineering");
    //     break;
    //   }
    // }
  }



  useEffect(() => {
    fetch(`api/domain`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setCategories(data);
          setProjectsCategory(data[0].name); // default
          // console.log(projectsCategory)
        }
      })
      .then(() => setIsLoading(false));
    // console.log("in");
  }, []);

  useEffect(() => {
    if (projectsCategory.length > 0) {
      setIsLoadingTab(true);
      fetch(`api/domain?name=${projectsCategory}`)
        .then((response) => response.json())
        .then((data) => {
          setProjects(data.projects);
        })
        .then(() => setIsLoadingTab(false));
    }
  }, [projectsCategory]);


  // useEffect(() => {
  //   fetch("https://portfolio.abenazzou.com/api/domain?name=data science")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.projects) setDataScienceProjects(data.projects);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("https://portfolio.abenazzou.com/api/domain?name=data engineering")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.projects) setDataEngineeringProjects(data.projects);
  //     });
  // }, []);

  return (
    // <div className="Projects">
    //   <div className="projects-sidebar">
    //     <ul className="right-navbar-list">
    //       <li className="right-navbar-item">
    //         <a href="#webDev">
    //           <Card
    //             title="Web Development"
    //             thumbnail={webDevLogo}
    //             titlePlacement={Placement.Above}
    //             radius={0}
    //             height={200}
    //           />
    //         </a>
    //       </li>
    //       <li className="right-navbar-item">
    //         <a href="#dataScience">
    //           <Card
    //             title="Data Science"
    //             thumbnail={webDevLogo}
    //             titlePlacement={Placement.Above}
    //             radius={0}
    //             height={200}
    //           />
    //         </a>
    //       </li>
    //       <li className="right-navbar-item">
    //         <a href="#dataEngineering">
    //           <Card
    //             title="Data Engineering"
    //             thumbnail={webDevLogo}
    //             titlePlacement={Placement.Above}
    //             radius={0}
    //             height={200}
    //           />
    //         </a>
    //       </li>
    //     </ul>
    //   </div>

    // <Container className="text-white " fluid>
    //   <Container className="fixed-top secondary-navbar" fluid>
    //     <Row xs={8}>
    //       <Col className="w-100 justify-content-between ms-3">
    //         <Card bg='dark' text='white' className="d-flex align-items-center pointerHover" border="dark" >
    //           {/* <Card.Img src={projectThumbnail} style={{ maxHeight: '25px' }} /> */}
    //           <Card.Title>Web Development</Card.Title>
    //         </Card>
    //       </Col>

    //       <Col>
    //         <Card bg='dark' text='white' className="d-flex align-items-center pointerHover" border="dark">
    //           {/* <Card.Img src={projectThumbnail} style={{ maxHeight: '25px' }} /> */}
    //           <Card.Title>Data Science</Card.Title>
    //         </Card>
    //       </Col>

    //       <Col>
    //         <Card bg='dark' text='white' className="d-flex align-items-center pointerHover" border="dark">
    //           {/* <Card.Img src={projectThumbnail} style={{ maxHeight: '25px' }} /> */}
    //           <Card.Title>Data Engineering</Card.Title>
    //         </Card>
    //       </Col>

    //     </Row>
    //   </Container>

    // </Container>
    <Container className="mt-5">
      {isLoading &&
        <div className='d-flex justify-content-center'>
          <Spinner animation="border" variant={isDarkMode ? "secondary" : "dark"} className="d-flex justify-content-center" />
        </div>
      }

      <Tabs defaultActiveKey={1} onSelect={(key) => handleSelect(key)}>
        {categories.map((category, index) => {
          return (
            <Tab key={category.id} eventKey={index + 1} title={category.name} >
              <Row md={4} xs={2} className="justify-content-md-right offset-1 mt-4">
                {isLoadingTab &&
                  <div className='d-flex justify-content-center'>
                    <Spinner animation="border" variant={isDarkMode ? "secondary" : "dark"} className="d-flex justify-content-center" />
                  </div>
                }
                {projects.map((project) => {
                  return (
                    <Col key={project.id} className="mb-3 align-items-stretch">
                      <Card bg={isDarkMode ? 'dark' : 'light'} text={isDarkMode ? 'white' : 'dark'} className="d-flex align-items-center pointerHover justify-content-center" onClick={() => handleProjectClick(project)}>
                        <Card.Img src={project.thumbnail} />
                        <Card.Title className="pt-3 text-center pb-1">{project.name}</Card.Title>
                      </Card>
                    </Col>
                  )
                })}

              </Row>

            </Tab>
          )
        })
        }
        {/* <Tab eventKey={1} title="Web Development" >
        <Row md={4} xs={2} className="justify-content-md-right offset-1 mt-4">
          {projects.map((project) => {
            return (
              <Col key={project.id} className="mb-3">
                <Card bg='dark' text='white' className="d-flex align-items-center pointerHover" onClick={() => handleProjectClick(project.github_link)}>
                  <Card.Img src={projectThumbnail} />
                  <Card.Title className="pt-3">{project.name}</Card.Title>
                </Card>
              </Col>
            )
          })}

        </Row>

      </Tab>

      <Tab eventKey={2} title="Data Science">

        <Row md={4} xs={2} className="justify-content-md-right offset-1 mt-4">
          {projects.map((project) => {
            return (
              <Col key={project.id} className="mb-3">
                <Card bg='dark' text='white' className="d-flex align-items-center pointerHover" onClick={() => handleProjectClick(project.github_link)}>
                  <Card.Img src={projectThumbnail} />
                  <Card.Title className="pt-3">{project.name}</Card.Title>
                </Card>
              </Col>
            )
          })}

        </Row>
      </Tab>

      <Tab eventKey={3} title="Data Engineering" >
        <Row md={4} xs={2} className="justify-content-md-right offset-1 mt-4">
          {projects.map((project) => {
            return (
              <Col key={project.id} className="mb-3">
                <Card bg='dark' text='white' className="d-flex align-items-center pointerHover" onClick={() => handleProjectClick(project.github_link)}>
                  <Card.Img src={projectThumbnail} />
                  <Card.Title className="pt-3">{project.name}</Card.Title>
                </Card>
              </Col>
            )
          })}

        </Row>
      </Tab> */}

      </Tabs>



    </Container >

    // {/* <div className="projects-container">
    //     <div className="section-container">
    //       <h1 className="title" id="webDev">Web Development</h1>
    //       <div className="projectsSubContainer">
    //         {webDevProjects.map((project) => {
    //           return (
    //             <div className="projectCard" key={project.id} onClick={() => handleProjectClick(project.github_link)}>
    //               <Card
    //                 key={project.id}
    //                 title={project.name}
    //                 thumbnail={projectThumbnail}
    //                 radius={25}
    //                 titlePlacement={Placement.Above}
    //                 height={200}
    //                 width={300}
    //               />
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //     <div className="section-container">
    //       <h1 className="title" id="dataScience">Data Science</h1>
    //       <div className="projectsSubContainer">
    //         {dataScienceProjects.map((project) => {
    //           return (
    //             <div className="projectCard" key={project.id} onClick={() => handleProjectClick(project.github_link)}>
    //               <Card
    //                 key={project.id}
    //                 title={project.name}
    //                 thumbnail={projectThumbnail}
    //                 radius={25}
    //                 titlePlacement={Placement.Above}
    //                 height={200}
    //                 width={300}
    //               />
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //     <div className="section-container">
    //       <h1 className="title" id="dataEngineering">Data Engineering</h1>
    //       <div className="projectsSubContainer">

    //         {dataEngineeringProjects.map((project) => {
    //           return (
    //             <div className="projectCard" key={project.id} onClick={() => handleProjectClick(project.github_link)}>
    //               <Card
    //                 key={project.id}
    //                 title={project.name}
    //                 thumbnail={projectThumbnail}
    //                 radius={25}
    //                 titlePlacement={Placement.Above}
    //                 height={200}
    //                 width={300}
    //               />
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div> */}
    // // </div>
  );
};

export default Projects;
