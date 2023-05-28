import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <ul className="social-media-list">
        <li className="social-media-item">
          <Link to="/">Social Media 1 Placeholder</Link>
        </li>
        <li className="social-media-item">
          <Link to="/">Social Media 2 Placeholder</Link>
        </li>
        <li className="social-media-item">
          <Link to="/">Social Media 3 Placeholder</Link>
        </li>
      </ul>
      <span className="copyright">Copyright Lorem Ipsum</span>
    </div>
  );
};

export default Footer;
