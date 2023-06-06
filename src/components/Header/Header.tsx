import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="navbar-list">
        <li className="navbar-item logo">
          <Link className="link-padding" to="/">Logo Placeholder</Link>
        </li>
        <li className="navbar-item">
          <Link className="link-padding" to="/">Benazzou Adnane</Link>
        </li>
        <li className="navbar-item">
          <Link className="link-padding" to="/projects">Projects</Link>
        </li>
        <li className="navbar-item">
          <Link className="link-padding" to="/certificates">Certificates</Link>
        </li>
        <li className="theme-toggle">Theme Placeholder</li>
        <li className="navbar-item">
          <Link className="link-padding" to="/resume">Resume</Link>
        </li>
        <li className="navbar-item">
          <Link className="link-padding" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
