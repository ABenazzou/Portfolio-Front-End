import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  let [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="fixed-top">
      <Container >
        <Navbar.Brand as={Link} to="/">Logo Placeholder</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="w-100 justify-content-between ms-3">
            <Nav.Item className="nav-hover">
              <Nav.Link as={Link} to="/">Benazzou Adnane</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-hover">
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-hover">
              <Nav.Link as={Link} to="/certificates">Certificates</Nav.Link>
            </Nav.Item>

            <div className="d-flex align-items-center">
              <Button variant={isDarkMode ? 'light' : 'dark'} onClick={toggleTheme}>
                Theme Placeholder
              </Button>
            </div>

            <Nav.Item className="nav-hover">
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-hover">
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
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
