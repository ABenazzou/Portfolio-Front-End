import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "src/assets/images/Logo-Light.svg";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store";
import { State } from "../../store/reducers";

const Header = () => {
  
  let [isExpanded, setIsExpanded] = useState(false);
  let location = useLocation();
  const [url, setUrl] = useState('');

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };


  let dispatch = useDispatch();

  const { setTheme } = bindActionCreators(actionCreators, dispatch);

  let isDarkMode = useSelector((state: State) => state.theme);

  const switchDarkMode = () => {
    setTheme(!isDarkMode)
  };

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <Navbar expand="lg" expanded={isExpanded} bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} className="fixed-top">
      <Container >
        <Navbar.Brand as={Link} to="/"> <img src={logo} className={isDarkMode ? "website-logo dark" : "website-logo"} alt="Abenazzou Logo" height="90px" width="auto" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setIsExpanded(!isExpanded)} />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="w-100 justify-content-between ms-3" as="ul">
            <Nav.Item className="nav-hover" as="li">
              <Nav.Link as={Link} to="/" className={url === "/" ? "active disabled" : ""} onClick={() => setIsExpanded(false)}>Benazzou Adnane</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-hover" as="li">
              <Nav.Link as={Link} to="/projects" className={url === "/projects" ? "active disabled" : ""} onClick={() => setIsExpanded(false)}>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-hover" as="li">
              <Nav.Link as={Link} to="/certificates" className={url === "/certificates" ? "active disabled" : ""} onClick={() => setIsExpanded(false)}>Certificates</Nav.Link>
            </Nav.Item>

            <div className="d-flex align-items-center" id="darkmode">

              {/* <Button variant={isDarkMode ? 'light' : 'dark'} onClick={toggleTheme}>
                Theme Placeholder
              </Button> */}
              <input type="checkbox" className="checkbox" id="checkbox" onChange={switchDarkMode} checked={!isDarkMode} />
              <label htmlFor="checkbox" className="label">
                <BsMoonStarsFill color="white" />
                <BsFillSunFill color="yellow" />
                <div className="ball"></div>
              </label>
            </div>

            <Nav.Item className="nav-hover" as="li">
              <Nav.Link as={Link} to="/resume" className={url === "/resume" ? "active disabled" : ""} onClick={() => setIsExpanded(false)}>Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-hover" as="li">
              <Nav.Link as={Link} to="/contact" className={url === "/contact" ? "active disabled" : ""} onClick={() => setIsExpanded(false)}>Contact</Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>


      </Container >

    </Navbar >
    // <div className="header">
    //   <ul className="navbar-list">
    //     <li className="navbar-item logo">
    //       <Link className="link-padding" to="/">Logo Placeholder</Link>
    //     </li>
    //     <li className="navbar-item">
    //       <Link className="link-padding" to="/">Benazzou Adnane</Link>
    //     </li>
    //     <li className="navbar-item">
    //       <Link className="link-padding" to="/projects">Projects</Link>
    //     </li>
    //     <li className="navbar-item">
    //       <Link className="link-padding" to="/certificates">Certificates</Link>
    //     </li>
    //     <li className="theme-toggle">Theme Placeholder</li>
    //     <li className="navbar-item">
    //       <Link className="link-padding" to="/resume">Resume</Link>
    //     </li>
    //     <li className="navbar-item">
    //       <Link className="link-padding" to="/contact">Contact</Link>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Header;
