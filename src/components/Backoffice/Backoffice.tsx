// import Card from "../shared/Card";
// import Placement from "../shared/Enums";
import "./styles.css";
// import certificateLogo from "../../assets/basketball.png";
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Tabs,
  Tab,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { State } from "../../store/reducers";
import { useLocation, useNavigate } from "react-router-dom";

const Backoffice = () => {
  const navigate = useNavigate();

  const editProject = (
    id: number,
    name: string,
    thumbnail: string,
    github_link: string,
    visits_count: number
  ) => {
    navigate("/editProject", {
      state: { id, name, thumbnail, github_link, visits_count },
    });
  };

  const addProject = () => {
    navigate("/addProject");
  };

  const addCertificate = () => {
    navigate("/addCertificate");
  };

  const editCertificate = (
    id: number,
    name: string,
    provider: string,
    validityLink: string,
    thumbnail: string,
    dateObtained: string,
  ) => {
    navigate("/editCertificate", {
      state: { id, name, thumbnail, provider, validityLink, dateObtained },
    });
  };

  const addTechnology = () => {
    navigate("/addTechnology");
  };

  const editTechnology = (
    id: number,
    name: string,
    logo: string,
    description: string,
  ) => {
    navigate("/editTechnology", {
      state: { id, name, logo, description },
    });
  };

  const addHobby = () => {
    navigate("/addHobby");
  };

  const editHobby = (
    id: number,
    name: string,
    logo: string,
    description: string,
  ) => {
    navigate("/editHobby", {
      state: { id, name, logo, description },
    });
  };

  const addDomain = () => {
    navigate("/addDomain");
  };

  const editDomain = (
    id: number,
    name: string,
    logo: string,
  ) => {
    navigate("/editDomain", {
      state: { id, name, logo },
    });
  };

  const addResume = () => {
    navigate("/addResume");
  };

  const editResume = (
    id: number,
    PDF: string,
    lastUpdated: string,
    // domainId: number
    ) => {
    navigate("/editResume", {
      state: { id, PDF, lastUpdated },
    });
  };

  const addBiography = () => {
    navigate("/addBiography");
  };

  const editBiography = (
    id: number,
    startYear: number,
    endYear: number,
    occupation: string
    ) => {
    navigate("/editBiography", {
      state: { id, startYear, endYear, occupation },
    });
  };


  const addSection = () => {
    navigate("/addSection");
  };

  const editSection = (
    id: number,
    title: string,
    content: string,
    type: string,
    isDisplayed: boolean
    ) => {
    navigate("/editSection", {
      state: { id, title, content, type, isDisplayed },
    });
  };


  const categories = [
    { id: 1, name: "biography", attributes: ["id", "start_year", "end_year", "occupation"] },
    { id: 2, name: "certificates", attributes: ["id", "name", "provider", "validity_link", "thumbnail", "date_obtained"] },
    { id: 3, name: "domains", attributes: ["id", "name", "logo"] },
    { id: 4, name: "hobbies", attributes: ["id", "name", "logo", "description"] },
    {
      id: 5,
      name: "projects",
      attributes: ["id", "name", "thumbnail", "github_link"],
    },
    { id: 6, name: "resumes", attributes: ["id", "PDF", "lastUpdated"] },
    { id: 7, name: "sections", attributes: ["id", "title", "content", "type", "isDisplayed"] },
    { id: 8, name: "technologies", attributes: ["id", "name", "logo", "description"] },
  ];

  const { state } = useLocation();

  let isDarkMode = useSelector((state: State) => state.theme);
  let [backofficeCategory, setBackofficeCategory] = useState(categories[state.activeTab - 1].name);
  //   let [isLoading, setIsLoading] = useState(true);
  let isAdmin = useSelector((state: State) => state.isAdmin);
  const handleSelect = (key: string | null) => {
    if (key) setBackofficeCategory(categories[parseInt(key) - 1].name);
  };
  let [isLoadingTab, setIsLoadingTab] = useState(false);
  let [projectExistingRows, setProjectExistingRows] = useState<any[]>([]);
  let [certificateExistingRows, setCertificateExistingRows] = useState<any[]>([]);
  let [technologyExistingRows, setTechnologyExistingRows] = useState<any[]>([]);
  let [hobbyExistingRows, setHobbyExistingRows] = useState<any[]>([]);
  let [domainExistingRows, setDomainExistingRows] = useState<any[]>([]);
  let [resumeExistingRows, setResumeExistingRows] = useState<any[]>([]);
  let [biographyExistingRows, setBiographyExistingRows] = useState<any[]>([]);
  let [sectionExistingRows, setSectionExistingRows] = useState<any[]>([]);
  let [activeTab, setActiveTab] = useState(state.activeTab)



  const deleteProject = async (id: number) => {
    const options = {
      method: "DELETE",
      headers: { authorization: `Bearer ${isAdmin.token}` },
    };

    const result = await fetch(`api/project/${id}`, options);
    if (result.status == 200) {
      fetch("api/project")
        .then((response) => response.json())
        .then((data) => setProjectExistingRows(data));
    }
  };

  const deleteCertificate = async (id: number) => {
    const options = {
      method: "DELETE",
      headers: { authorization: `Bearer ${isAdmin.token}` },
    };

    const result = await fetch(`api/certificate/${id}`, options);
    if (result.status == 200) {
      fetch("api/certificate")
        .then((response) => response.json())
        .then((data) => setCertificateExistingRows(data));
    }
  };

  const deleteTechnology = async (id: number) => {
    const options = {
      method: "DELETE",
      headers: { authorization: `Bearer ${isAdmin.token}` },
    };

    const result = await fetch(`api/technology/${id}`, options);
    if (result.status == 200) {
      fetch("api/technology")
        .then((response) => response.json())
        .then((data) => setTechnologyExistingRows(data));
    }
  };

  const deleteHobby = async (id: number) => {
    const options = {
      method: "DELETE",
      headers: { authorization: `Bearer ${isAdmin.token}` },
    };

    const result = await fetch(`api/hobby/${id}`, options);
    if (result.status == 200) {
      fetch("api/hobby")
        .then((response) => response.json())
        .then((data) => setHobbyExistingRows(data));
    }
  };

  const deleteResume = async (id: number) => {
    const options = {
      method: "DELETE",
      headers: { authorization: `Bearer ${isAdmin.token}` },
    };

    const result = await fetch(`api/resume/${id}`, options);
    if (result.status == 200) {
      fetch("api/resume")
        .then((response) => response.json())
        .then((data) => setResumeExistingRows(data));
    }
  };


  const deleteDomain = async (id: number) => {
    const options = {
      method: "DELETE",
      headers: { authorization: `Bearer ${isAdmin.token}` },
    };

    const result = await fetch(`api/domain/${id}`, options);
    if (result.status == 200) {
      fetch("api/domain")
        .then((response) => response.json())
        .then((data) => setDomainExistingRows(data));
    }
  };

  const deleteBiography = async (id: number) => {
    const options = {
      method: "DELETE",
      headers: { authorization: `Bearer ${isAdmin.token}` },
    };

    const result = await fetch(`api/biography/${id}`, options);
    if (result.status == 200) {
      fetch("api/biography")
        .then((response) => response.json())
        .then((data) => setBiographyExistingRows(data));
    }
  };

  const deleteSection = async (id: number) => {
    const options = {
      method: "DELETE",
      headers: { authorization: `Bearer ${isAdmin.token}` },
    };

    const result = await fetch(`api/section/${id}`, options);
    if (result.status == 200) {
      fetch("api/section")
        .then((response) => response.json())
        .then((data) => setSectionExistingRows(data));
    }
  };


  const addProjectTechnologyDomain = (id: number) => {
    navigate("/addProjectTechnologyDomain", {
      state: { id },
    });
  }

  const addCertificateDomain = (id: number) => {
    navigate("/addCertificateDomain", {
      state: { id },
    });
  }

  const addResumeDomain = (id: number) => {
    navigate("/addResumeDomain", {
      state: { id },
    });
  }



  useEffect(() => {
    if (backofficeCategory.length > 0) {
      setIsLoadingTab(true);
      //get relevant data
      switch (backofficeCategory) {
        case "biography":
          fetch("api/biography")
            .then((response) => response.json())
            // .then(data => {console.log(data); setExistingRows(data)})
            .then(data => setBiographyExistingRows(data))
            // .then((data) => {console.log(data);setBiographyExistingRows(data)});

            .then(() => setIsLoadingTab(false));
          break;

        case "certificates":
          fetch("api/certificate")
            .then((response) => response.json())
            // .then(data => {console.log(data); setExistingRows(data)})
            .then(data => setCertificateExistingRows(data))
            .then(() => setIsLoadingTab(false));
          break;

        case "domains":
          fetch("api/domain")
            .then((response) => response.json())
            // .then(data => {console.log(data); setExistingRows(data)})
            .then(data => setDomainExistingRows(data))
            .then(() => setIsLoadingTab(false));
          break;

        case "hobbies":
          fetch("api/hobby")
            .then((response) => response.json())
            // .then(data => {console.log(data); setExistingRows(data)})
            .then(data => setHobbyExistingRows(data))
            .then(() => setIsLoadingTab(false));
          break;

        case "projects":
          fetch("api/project")
            .then((response) => response.json())
            // .then(data => {console.log(data); setExistingRows(data)})
            .then((data) => setProjectExistingRows(data))
            .then(() => setIsLoadingTab(false));
          //   setIsLoadingTab(false);
          break;

        case "resumes":
          fetch("api/resume")
            .then((response) => response.json())
            // .then(data => {console.log(data); setExistingRows(data)})
            .then(data => setResumeExistingRows(data))
            .then(() => setIsLoadingTab(false));
          break;

        case "sections":
          fetch("api/section")
            .then((response) => response.json())
            // .then(data => {console.log(data); setExistingRows(data)})
            .then(data => setSectionExistingRows(data))
            .then(() => setIsLoadingTab(false));
          break;

        case "technologies":
          fetch("api/technology")
            .then((response) => response.json())
            // .then(data => {console.log(data); setExistingRows(data)})
            .then(data => setTechnologyExistingRows(data))
            .then(() => setIsLoadingTab(false));
          break;

        default:
          setIsLoadingTab(true);
          break;
      }
    }
  }, [backofficeCategory]);

  return (
    <Container className={isDarkMode ? "text-white mt-5" : "mt-5"}>
      {//PROJECT-----------------------------------------------------------------------------------
      }
      <Tabs defaultActiveKey={activeTab} onSelect={(key) => handleSelect(key)}>
        <Tab key={-3} eventKey={5} title={"Projects"}>
          {isLoadingTab && (
            <div className="d-flex justify-content-center">
              <Spinner
                animation="border"
                variant={isDarkMode ? "secondary" : "dark"}
                className="d-flex justify-content-center"
              />
            </div>
          )}
          {
            // header////////////////////////////////////////////////////////////////////
          }
          <Row
            key={-2}
            md={1}
            xs={1}
            className="justify-content-md-right offset-1 mt-4"
          >
            <Col xs={1} className="align-items-stretch ">
              <Button onClick={() => addProject()}>Add Project</Button>
            </Col>
          </Row>
          <Row
            key={-1}
            md={7}
            xs={7}
            className="justify-content-md-right offset-1 mt-4"
          >
            {categories[4].attributes.map((attribute) => {
              return (
                <Col
                  xs={1}
                  style={{wordBreak: 'break-all'}}
                  key={categories[4].attributes.indexOf(attribute)}
                  className={
                    isDarkMode
                      ? "align-items-stretch border border-white"
                      : "align-items-stretch border border-dark"
                  }
                >
                  {attribute}
                </Col>
              );
            })}
          </Row>
          {
            // change this part so that it displays CRUD related operations instead of categories we will have rows each row should have edit delete, we can also create some additional things
            projectExistingRows.map((row) => {
              return (
                <Row
                  key={row.id}
                  md={7}
                  xs={7}
                  className="justify-content-md-right offset-1"
                >
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.id}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.name}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.thumbnail}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.github_link}
                  </Col>
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button
                      onClick={() =>
                        editProject(
                          row.id,
                          row.name,
                          row.thumbnail,
                          row.github_link,
                          row.visits_count
                        )
                      }
                    >
                      EDIT
                    </Button>
                  </Col>
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button onClick={() => deleteProject(row.id)}>
                      DELETE
                    </Button>
                  </Col>

                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button onClick={() => addProjectTechnologyDomain(row.id)}>
                      Add Tech or Domain
                    </Button>
                  </Col>
                </Row>
              );
            })
          }
        </Tab>

        {
          //-------------------------------------------------------------------------------------------------------CERTIFICATES--------------------------------------------
        }

        <Tab key={-4} eventKey={2} title={"Certificates"}>
          {isLoadingTab && (
            <div className="d-flex justify-content-center">
              <Spinner
                animation="border"
                variant={isDarkMode ? "secondary" : "dark"}
                className="d-flex justify-content-center"
              />
            </div>
          )}
          {
            // header////////////////////////////////////////////////////////////////////
          }
          <Row
            key={-5}
            md={1}
            xs={1}
            className="justify-content-md-right offset-1 mt-4"
          >
            <Col xs={1} className="align-items-stretch ">
              <Button onClick={() => addCertificate()}>Add Certificate</Button>
            </Col>
          </Row>

          <Row
            key={-20}
            md={9}
            xs={9}
            className="justify-content-md-right offset-1 mt-4"
          >
            {categories[1].attributes.map((attribute) => {
              return (
                <Col
                  xs={1}
                  style={{wordBreak: 'break-all'}}
                  key={categories[1].attributes.indexOf(attribute)}
                  className={
                    isDarkMode
                      ? "align-items-stretch border border-white"
                      : "align-items-stretch border border-dark"
                  }
                >
                  {attribute}
                </Col>
              );
            })}
          </Row>
          {
            // change this part so that it displays CRUD related operations instead of categories we will have rows each row should have edit delete, we can also create some additional things
            certificateExistingRows.map((row) => {
              return (
                <Row
                  key={row.id}
                  md={9}
                  xs={9}
                  className="justify-content-md-right offset-1"
                >
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.id}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.name}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.provider}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.validity_link}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.thumbnail}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.date_obtained}
                  </Col>
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button
                      onClick={() =>
                        editCertificate(
                          row.id,
                          row.name,
                          row.provider,
                          row.validity_link,
                          row.thumbnail,
                          row.date_obtained
                        )
                      }
                    >
                      EDIT
                    </Button>
                  </Col>
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button onClick={() => deleteCertificate(row.id)}>
                      DELETE
                    </Button>
                  </Col>
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button onClick={() => addCertificateDomain(row.id)}>
                      Add  Domain
                    </Button>
                  </Col>
                </Row>
              );
            })
          }
        </Tab>

        {
        //-------------------------------------------------------------------------------------------------------Technologies--------------------------------------------
        }

        <Tab key={-6} eventKey={8} title={"Technologies"}>
          {isLoadingTab && (
            <div className="d-flex justify-content-center">
              <Spinner
                animation="border"
                variant={isDarkMode ? "secondary" : "dark"}
                className="d-flex justify-content-center"
              />
            </div>
          )}
          {
            // header////////////////////////////////////////////////////////////////////
          }
          <Row
            key={-7}
            md={1}
            xs={1}
            className="justify-content-md-right offset-1 mt-4"
          >
            <Col xs={1} className="align-items-stretch ">
              <Button onClick={() => addTechnology()}>Add Technology</Button>
            </Col>
          </Row>

          <Row
            key={-300}
            md={6}
            xs={6}
            className="justify-content-md-right offset-1 mt-4"
          >
            {categories[7].attributes.map((attribute) => {
              return (
                <Col
                  xs={1}
                  style={{wordBreak: 'break-all'}}
                  key={categories[7].attributes.indexOf(attribute)}
                  className={
                    isDarkMode
                      ? "align-items-stretch border border-white"
                      : "align-items-stretch border border-dark"
                  }
                >
                  {attribute}
                </Col>
              );
            })}
          </Row>
          {
            // change this part so that it displays CRUD related operations instead of categories we will have rows each row should have edit delete, we can also create some additional things
            technologyExistingRows.map((row) => {
              return (
                <Row
                  key={row.id}
                  md={6}
                  xs={6}
                  className="justify-content-md-right offset-1"
                >
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.id}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.name}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.logo}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.description}
                  </Col>
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button
                      onClick={() =>
                        editTechnology(
                          row.id,
                          row.name,
                          row.logo,
                          row.description,
                        )
                      }
                    >
                      EDIT
                    </Button>
                  </Col>
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button onClick={() => deleteTechnology(row.id)}>
                      DELETE
                    </Button>
                  </Col>
                </Row>
              );
            })
          }
        </Tab>


        {
        //-------------------------------------------------------------------------------------------------------Hobbies--------------------------------------------
        }

        <Tab key={-90} eventKey={4} title={"Hobbies"}>
          {isLoadingTab && (
            <div className="d-flex justify-content-center">
              <Spinner
                animation="border"
                variant={isDarkMode ? "secondary" : "dark"}
                className="d-flex justify-content-center"
              />
            </div>
          )}
          {
            // header////////////////////////////////////////////////////////////////////
          }
          <Row
            key={-91}
            md={1}
            xs={1}
            className="justify-content-md-right offset-1 mt-4"
          >
            <Col xs={1} className="align-items-stretch ">
              <Button onClick={() => addHobby()}>Add Hobby</Button>
            </Col>
          </Row>

          <Row
            key={-400}
            md={6}
            xs={6}
            className="justify-content-md-right offset-1 mt-4"
          >
            {categories[3].attributes.map((attribute) => {
              return (
                <Col
                  xs={1}
                  style={{wordBreak: 'break-all'}}
                  key={categories[3].attributes.indexOf(attribute)}
                  className={
                    isDarkMode
                      ? "align-items-stretch border border-white"
                      : "align-items-stretch border border-dark"
                  }
                >
                  {attribute}
                </Col>
              );
            })}
          </Row>
          {
            // change this part so that it displays CRUD related operations instead of categories we will have rows each row should have edit delete, we can also create some additional things
            hobbyExistingRows.map((row) => {
              return (
                <Row
                  key={row.id}
                  md={6}
                  xs={6}
                  className="justify-content-md-right offset-1"
                >
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.id}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.name}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.logo}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.description}
                  </Col>
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button
                      onClick={() =>
                        editHobby(
                          row.id,
                          row.name,
                          row.logo,
                          row.description,
                        )
                      }
                    >
                      EDIT
                    </Button>
                  </Col>
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button onClick={() => deleteHobby(row.id)}>
                      DELETE
                    </Button>
                  </Col>
                </Row>
              );
            })
          }
        </Tab>


        {
        //-------------------------------------------------------------------------------------------------------Domains--------------------------------------------
        }

        <Tab key={-92} eventKey={3} title={"Domains"}>
          {isLoadingTab && (
            <div className="d-flex justify-content-center">
              <Spinner
                animation="border"
                variant={isDarkMode ? "secondary" : "dark"}
                className="d-flex justify-content-center"
              />
            </div>
          )}
          {
            // header////////////////////////////////////////////////////////////////////
          }
          <Row
            key={-93}
            md={1}
            xs={1}
            className="justify-content-md-right offset-1 mt-4"
          >
            <Col xs={1} className="align-items-stretch ">
              <Button onClick={() => addDomain()}>Add Domain</Button>
            </Col>
          </Row>

          <Row
            key={-500}
            md={5}
            xs={5}
            className="justify-content-md-right offset-1 mt-4"
          >
            {categories[2].attributes.map((attribute) => {
              return (
                <Col
                  xs={1}
                  style={{wordBreak: 'break-all'}}
                  key={categories[2].attributes.indexOf(attribute)}
                  className={
                    isDarkMode
                      ? "align-items-stretch border border-white"
                      : "align-items-stretch border border-dark"
                  }
                >
                  {attribute}
                </Col>
              );
            })}
          </Row>
          {
            // change this part so that it displays CRUD related operations instead of categories we will have rows each row should have edit delete, we can also create some additional things
            domainExistingRows.map((row) => {
              return (
                <Row
                  key={row.id}
                  md={5}
                  xs={5}
                  className="justify-content-md-right offset-1"
                >
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.id}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.name}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.logo}
                  </Col>
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button
                      onClick={() =>
                        editDomain(
                          row.id,
                          row.name,
                          row.logo,
                        )
                      }
                    >
                      EDIT
                    </Button>
                  </Col>
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button onClick={() => deleteDomain(row.id)}>
                      DELETE
                    </Button>
                  </Col>
                </Row>
              );
            })
          }
        </Tab>

        {
        //-------------------------------------------------------------------------------------------------------Resumes--------------------------------------------
        }

        <Tab key={-93} eventKey={6} title={"Resumes"}>
          {isLoadingTab && (
            <div className="d-flex justify-content-center">
              <Spinner
                animation="border"
                variant={isDarkMode ? "secondary" : "dark"}
                className="d-flex justify-content-center"
              />
            </div>
          )}
          {
            // header////////////////////////////////////////////////////////////////////
          }
          <Row
            key={-94}
            md={1}
            xs={1}
            className="justify-content-md-right offset-1 mt-4"
          >
            <Col xs={1} className="align-items-stretch ">
              <Button onClick={() => addResume()}>Add Resume</Button>
            </Col>
          </Row>

          <Row
            key={-600}
            md={6}
            xs={6}
            className="justify-content-md-right offset-1 mt-4"
          >
            {categories[5].attributes.map((attribute) => {
              return (
                <Col
                  xs={1}
                  style={{wordBreak: 'break-all'}}
                  key={categories[5].attributes.indexOf(attribute)}
                  className={
                    isDarkMode
                      ? "align-items-stretch border border-white"
                      : "align-items-stretch border border-dark"
                  }
                >
                  {attribute}
                </Col>
              );
            })}
          </Row>
          {
            // change this part so that it displays CRUD related operations instead of categories we will have rows each row should have edit delete, we can also create some additional things
            resumeExistingRows.map((row) => {
              return (
                <Row
                  key={row.id}
                  md={6}
                  xs={6}
                  className="justify-content-md-right offset-1"
                >
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.id}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.pdf}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.lastUpdated}
                  </Col>
                  {/* <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.domainId}
                    {console.log(row)}
                  </Col> */}
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button
                      onClick={() =>
                        editResume(
                          row.id,
                          row.pdf,
                          row.lastUpdated,
                        //   row.domainId,
                        )
                      }
                    >
                      EDIT
                    </Button>
                  </Col>
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button onClick={() => deleteResume(row.id)}>
                      DELETE
                    </Button>
                  </Col>
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button onClick={() => addResumeDomain(row.id)}>
                      Add  Domain
                    </Button>
                  </Col>
                </Row>
              );
            })
          }
        </Tab>

        {
        //-------------------------------------------------------------------------------------------------------Biography--------------------------------------------
        }

        <Tab key={-95} eventKey={1} title={"Biography"}>
          {isLoadingTab && (
            <div className="d-flex justify-content-center">
              <Spinner
                animation="border"
                variant={isDarkMode ? "secondary" : "dark"}
                className="d-flex justify-content-center"
              />
            </div>
          )}
          {
            // header////////////////////////////////////////////////////////////////////
          }
          <Row
            key={-96}
            md={1}
            xs={1}
            className="justify-content-md-right offset-1 mt-4"
          >
            <Col xs={1} className="align-items-stretch ">
              <Button onClick={() => addBiography()}>Add Biography</Button>
            </Col>
          </Row>

          <Row
            key={-700}
            md={6}
            xs={6}
            className="justify-content-md-right offset-1 mt-4"
          >
            {categories[0].attributes.map((attribute) => {
              return (
                <Col
                  xs={1}
                  style={{wordBreak: 'break-all'}}
                  key={categories[0].attributes.indexOf(attribute)}
                  className={
                    isDarkMode
                      ? "align-items-stretch border border-white"
                      : "align-items-stretch border border-dark"
                  }
                >
                  {attribute}
                </Col>
              );
            })}
          </Row>
          {

            // change this part so that it displays CRUD related operations instead of categories we will have rows each row should have edit delete, we can also create some additional things
            biographyExistingRows.map((row) => {
              return (
                <Row
                  key={row.id}
                  md={6}
                  xs={6}
                  className="justify-content-md-right offset-1"
                >
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.id}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.start_year}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.end_year}
                  </Col>

                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.occupation}
                  </Col>

                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button
                      onClick={() =>
                        editBiography(
                          row.id,
                          row.start_year,
                          row.end_year,
                          row.occupation,
                        )
                      }
                    >
                      EDIT
                    </Button>
                  </Col>
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button onClick={() => deleteBiography(row.id)}>
                      DELETE
                    </Button>
                  </Col>
                </Row>
              );
            })
          }
        </Tab>

        {
        //-------------------------------------------------------------------------------------------------------Sections--------------------------------------------
        }

        <Tab key={-98} eventKey={7} title={"Sections"}>
          {isLoadingTab && (
            <div className="d-flex justify-content-center">
              <Spinner
                animation="border"
                variant={isDarkMode ? "secondary" : "dark"}
                className="d-flex justify-content-center"
              />
            </div>
          )}
          {
            // header////////////////////////////////////////////////////////////////////
          }
          <Row
            key={-99}
            md={1}
            xs={1}
            className="justify-content-md-right offset-1 mt-4"
          >
            <Col xs={1} className="align-items-stretch ">
              <Button onClick={() => addSection()}>Add Section</Button>
            </Col>
          </Row>

          <Row
            key={-800}
            md={7}
            xs={7}
            className="justify-content-md-right offset-1 mt-4"
          >
            {categories[6].attributes.map((attribute) => {
              return (
                <Col
                  xs={1}
                  style={{wordBreak: 'break-all'}}
                  key={categories[6].attributes.indexOf(attribute)}
                  className={
                    isDarkMode
                      ? "align-items-stretch border border-white"
                      : "align-items-stretch border border-dark"
                  }
                >
                  {attribute}
                </Col>
              );
            })}
          </Row>
          {

            // change this part so that it displays CRUD related operations instead of categories we will have rows each row should have edit delete, we can also create some additional things
            sectionExistingRows.map((row) => {
              // {console.log(row)}

              return (
                <Row
                  key={row.id}
                  md={7}
                  xs={7}
                  className="justify-content-md-right offset-1"
                >
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.id}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.title}
                  </Col>
                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.content}
                  </Col>

                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.type}
                  </Col>

                  <Col
                    xs={1}
                    style={{wordBreak: 'break-all'}}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    {row.is_displayed.toString()}
                  </Col>

                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button
                      onClick={() =>
                        editSection(
                          row.id,
                          row.title,
                          row.content,
                          row.type,
                          row.is_displayed
                        )
                      }
                    >
                      EDIT
                    </Button>
                  </Col>
                  <Col
                    xs={1}
                    className={
                      isDarkMode
                        ? "align-items-stretch border border-white"
                        : "mb-3 align-items-stretch border border-dark"
                    }
                  >
                    <Button onClick={() => deleteSection(row.id)}>
                      DELETE
                    </Button>
                  </Col>
                </Row>
              );
            })
          }
        </Tab>

      </Tabs>
    </Container>
  );
};

export default Backoffice;
