import { useState } from "react";
import "./App.css";
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

const App = () => {
  const [maintenance, setMaintenance] = useState(true);


  return (
    <Router>
      <div className="App">
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
