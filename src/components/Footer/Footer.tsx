import { Link } from "react-router-dom";
import "./Footer.css";
import { useEffect, useState } from "react";
const Footer = () => {
  let [socialMedias, setSocialMedias] = useState<any[]>([]);
  let [copyright, setCopyright] = useState(null);
  
  const handleClick = (socialMediaLink: string) => {
    window.open(socialMediaLink, '_blank', 'noopener,noreferrer');
  }

  useEffect(() => {
    fetch("https://portfolio.abenazzou.com/api/section/type/social_media_link")
      .then((response) => response.json())
      .then((data) => setSocialMedias(data));

    fetch("https://portfolio.abenazzou.com/api/section?title=copyright")
      .then((response) => response.json())
      .then((data) => setCopyright(data.content));
  }, []);

  return (
    <div className="footer">
      <ul className="social-media-list">
        {socialMedias.map((socialMedia) => {
          return (
            <li key={socialMedia.id} className="social-media-item" onClick={() => handleClick(socialMedia.content)}>
              <Link to="/">{socialMedia.title}</Link>
            </li>
          );
        })}
      </ul>
      <span className="copyright">{copyright}</span>
    </div>
  );
};

export default Footer;
