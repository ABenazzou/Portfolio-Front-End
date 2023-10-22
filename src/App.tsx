import { useEffect, useState } from "react";
import "./App.css";
import "./theme.css";
// import "./light-theme.css"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Placeholder from "./components/Main/Placeholder/Placeholder";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Main/Home";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./store/reducers";
import Login from "./components/Authentication/Login";
import Backoffice from "./components/Backoffice/Backoffice";
import EditProject from "./components/Backoffice/Project/EditProject";
import AddProject from "./components/Backoffice/Project/AddProject";
import AddCertificate from "./components/Backoffice/Certificate/AddCertificate";
import EditCertificate from "./components/Backoffice/Certificate/EditCertificate";
import EditTechnology from "./components/Backoffice/Technology/EditTechnology";
import AddTechnology from "./components/Backoffice/Technology/AddTechnology";
import EditHobby from "./components/Backoffice/Hobby/EditHobby";
import AddHobby from "./components/Backoffice/Hobby/AddHobby";
import EditDomain from "./components/Backoffice/Domain/EditDomain";
import AddDomain from "./components/Backoffice/Domain/AddDomain";
import EditResume from "./components/Backoffice/Resume/EditResume";
import AddResume from "./components/Backoffice/Resume/AddResume";
import EditBiography from "./components/Backoffice/Biography/EditBiography";
import AddBiography from "./components/Backoffice/Biography/AddBiography";
import AddSection from "./components/Backoffice/Section/AddSection";
import EditSection from "./components/Backoffice/Section/EditSection";
import AddProjectTechnologyDomain from "./components/Backoffice/Project/AddProjectTechnologyDomain";
import AddCertificateDomain from "./components/Backoffice/Certificate/AddCertificateDomain";
import AddResumeDomain from "./components/Backoffice/Resume/AddResumeDomain";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store";

const App = () => {

  // let dispatch = useDispatch();

  // const { setMaintenance } = bindActionCreators(actionCreators, dispatch);

  let maintenance = useSelector((state: State) => state.maintenance);

  // const switchMaintenance = () => {
    // setMaintenance(!maintenance)
  // };

  // const [maintenance, setMaintenance] = useState(true);

  let isDarkMode = useSelector((state: State) => state.theme);
  let isAdmin = useSelector((state: State) => state.isAdmin);

  useEffect(() => {
    if (isDarkMode) {

      document.documentElement.style.setProperty('--background-color', '#303030');
      document.documentElement.style.setProperty('--foreground-color', '#ffffff');
      document.documentElement.style.setProperty('--active-background-color', '#ffffff');
      document.documentElement.style.setProperty('--hover-background-color', '#303030');
      document.documentElement.style.setProperty('--secondary-hover-background-color', '#696969');
    }
    else {

      document.documentElement.style.setProperty('--background-color', '#ffffff');
      document.documentElement.style.setProperty('--foreground-color', '#000000');
      document.documentElement.style.setProperty('--active-background-color', '#606060');
      document.documentElement.style.setProperty('--hover-background-color', '#D3D3D3');
      document.documentElement.style.setProperty('--secondary-hover-background-color', '#D3D3D3');
    }
  }, [isDarkMode])

  return (
    <Router>
      <div className="theme-bg">
        {!maintenance && <Header />}
        <Routes>
          {maintenance ? (
            <>
              <Route path="/login" element={<Login/>}/>
              <Route path="*" element={<Placeholder />} />
              { isAdmin.isAdmin?<Route path="/backoffice" element={<Backoffice />}/>:<Route path="/" element={<Placeholder />}  />}

              { isAdmin.isAdmin?<Route path="/editProject" element={<EditProject />}/>:<Route path="/" element={<Placeholder />}  />}
              { isAdmin.isAdmin?<Route path="/addProject" element={<AddProject />}/>:<Route path="/" element={<Placeholder />}  />}
              { isAdmin.isAdmin?<Route path="/addProjectTechnologyDomain" element={<AddProjectTechnologyDomain />}/>:<Route path="/" element={<Placeholder />}  />}

              { isAdmin.isAdmin?<Route path="/editCertificate" element={<EditCertificate />}/>:<Route path="/" element={<Placeholder />}  />}
              { isAdmin.isAdmin?<Route path="/addCertificate" element={<AddCertificate />}/>:<Route path="/" element={<Placeholder />}  />}
              { isAdmin.isAdmin?<Route path="/addCertificateDomain" element={<AddCertificateDomain />}/>:<Route path="/" element={<Placeholder />}  />}

              { isAdmin.isAdmin?<Route path="/editTechnology" element={<EditTechnology />}/>:<Route path="/" element={<Placeholder />}  />}
              { isAdmin.isAdmin?<Route path="/addTechnology" element={<AddTechnology />}/>:<Route path="/" element={<Placeholder />}  />}

              { isAdmin.isAdmin?<Route path="/editHobby" element={<EditHobby />}/>:<Route path="/" element={<Placeholder />}  />}
              { isAdmin.isAdmin?<Route path="/addHobby" element={<AddHobby />}/>:<Route path="/" element={<Placeholder />}  />}

              { isAdmin.isAdmin?<Route path="/editDomain" element={<EditDomain />}/>:<Route path="/" element={<Placeholder />}  />}
              { isAdmin.isAdmin?<Route path="/addDomain" element={<AddDomain />}/>:<Route path="/" element={<Placeholder />}  />}

              { isAdmin.isAdmin?<Route path="/editResume" element={<EditResume />}/>:<Route path="/" element={<Placeholder />}  />}
              { isAdmin.isAdmin?<Route path="/addResume" element={<AddResume />}/>:<Route path="/" element={<Placeholder />}  />}
              { isAdmin.isAdmin?<Route path="/addResumeDomain" element={<AddResumeDomain />}/>:<Route path="/" element={<Placeholder />}  />}

              { isAdmin.isAdmin?<Route path="/editBiography" element={<EditBiography />}/>:<Route path="/" element={<Placeholder />}  />}
              { isAdmin.isAdmin?<Route path="/addBiography" element={<AddBiography />}/>:<Route path="/" element={<Placeholder />}  />}

              { isAdmin.isAdmin?<Route path="/addSection" element={<AddSection />}/>:<Route path="/" element={<Placeholder />}  />}
              { isAdmin.isAdmin?<Route path="/editSection" element={<EditSection />}/>:<Route path="/" element={<Placeholder />}  />}

            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates/>} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login/>}/>
          
              { isAdmin.isAdmin?<Route path="/backoffice" element={<Backoffice />}/>:<Route path="/" element={<Home />}  />}

              { isAdmin.isAdmin?<Route path="/editProject" element={<EditProject />}/>:<Route path="/" element={<Home />}  />}
              { isAdmin.isAdmin?<Route path="/addProject" element={<AddProject />}/>:<Route path="/" element={<Home />}  />}
              { isAdmin.isAdmin?<Route path="/addProjectTechnologyDomain" element={<AddProjectTechnologyDomain />}/>:<Route path="/" element={<Home />}  />}

              { isAdmin.isAdmin?<Route path="/editCertificate" element={<EditCertificate />}/>:<Route path="/" element={<Home />}  />}
              { isAdmin.isAdmin?<Route path="/addCertificate" element={<AddCertificate />}/>:<Route path="/" element={<Home />}  />}
              { isAdmin.isAdmin?<Route path="/addCertificateDomain" element={<AddCertificateDomain />}/>:<Route path="/" element={<Home />}  />}

              { isAdmin.isAdmin?<Route path="/editTechnology" element={<EditTechnology />}/>:<Route path="/" element={<Home />}  />}
              { isAdmin.isAdmin?<Route path="/addTechnology" element={<AddTechnology />}/>:<Route path="/" element={<Home />}  />}

              { isAdmin.isAdmin?<Route path="/editHobby" element={<EditHobby />}/>:<Route path="/" element={<Home />}  />}
              { isAdmin.isAdmin?<Route path="/addHobby" element={<AddHobby />}/>:<Route path="/" element={<Home />}  />}

              { isAdmin.isAdmin?<Route path="/editDomain" element={<EditDomain />}/>:<Route path="/" element={<Home />}  />}
              { isAdmin.isAdmin?<Route path="/addDomain" element={<AddDomain />}/>:<Route path="/" element={<Home />}  />}

              { isAdmin.isAdmin?<Route path="/editResume" element={<EditResume />}/>:<Route path="/" element={<Home />}  />}
              { isAdmin.isAdmin?<Route path="/addResume" element={<AddResume />}/>:<Route path="/" element={<Home />}  />}
              { isAdmin.isAdmin?<Route path="/addResumeDomain" element={<AddResumeDomain />}/>:<Route path="/" element={<Home />}  />}

              { isAdmin.isAdmin?<Route path="/editBiography" element={<EditBiography />}/>:<Route path="/" element={<Home />}  />}
              { isAdmin.isAdmin?<Route path="/addBiography" element={<AddBiography />}/>:<Route path="/" element={<Home />}  />}

              { isAdmin.isAdmin?<Route path="/addSection" element={<AddSection />}/>:<Route path="/" element={<Home />}  />}
              { isAdmin.isAdmin?<Route path="/editSection" element={<EditSection />}/>:<Route path="/" element={<Home />}  />}

            </>
          )}
          
        </Routes>
        {!maintenance && <Footer />}
      </div>
    </Router>
  );
};

export default App;
