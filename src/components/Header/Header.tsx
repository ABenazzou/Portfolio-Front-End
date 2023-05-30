import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="navbar-list">
        <li className="navbar-item logo">
          <Link to="/">Logo Placeholder</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">Benazzou Adnane</Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="navbar-item">
          <Link to="/certificates">Certificates</Link>
        </li>
        <li className="theme-toggle">Theme Placeholder</li>
        <li className="navbar-item">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
