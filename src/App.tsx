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
import { useSelector } from "react-redux";
import { State } from "./store/reducers";

const App = () => {
  const [maintenance, setMaintenance] = useState(true);
  let isDarkMode = useSelector((state: State) => state.theme);

  useEffect(() => {
    if (isDarkMode) {

      document.documentElement.style.setProperty('--background-color', '#303030');
      document.documentElement.style.setProperty('--foreground-color', '#ffffff');
      document.documentElement.style.setProperty('--active-background-color', '#ffffff');
    }
    else {

      document.documentElement.style.setProperty('--background-color', '#ffffff');
      document.documentElement.style.setProperty('--foreground-color', '#000000');
      document.documentElement.style.setProperty('--active-background-color', '#606060');
    }
  }, [isDarkMode])

  return (
    <Router>
      <div className="theme-bg">
        {!maintenance && <Header />}
        <Routes>
          {maintenance ? (
            <Route path="*" element={<Placeholder />} />
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates/>} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </>
          )}
        </Routes>
        {!maintenance && <Footer />}
      </div>
    </Router>
  );
};

export default App;
