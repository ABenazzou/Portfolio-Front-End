import "./Footer.css";
import { useEffect, useState } from "react";
import { MDBBtn, MDBContainer, MDBFooter, MDBIcon } from "mdb-react-ui-kit";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { State } from "../../store/reducers";
const Footer = () => {
  let [socialMedias, setSocialMedias] = useState<any[]>([]);
  let [copyright, setCopyright] = useState(null);
  let isDarkMode = useSelector((state: State) => state.theme);

  const handleClick = (socialMediaLink: string) => {
    window.open(socialMediaLink, '_blank', 'noopener,noreferrer');
  }

  useEffect(() => {
    fetch("api/section/type/social_media_link")
      .then((response) => response.json())
      .then((data) => setSocialMedias(data));

    fetch("api/section?title=copyright")
      .then((response) => response.json())
      .then((data) => setCopyright(data.content));
  }, []);

  return (
    <MDBFooter className={isDarkMode?"bg-dark text-white fixed-bottom":"bg-light fixed-bottom"}>
      <MDBContainer className='p-0 m-1' fluid>

        <Row>
          <Col md={4}>
            {socialMedias.map((socialMedia) => {
              return (
                <MDBBtn key={socialMedia.id} outline color={isDarkMode?"light":"dark"} floating className='m-1 fixedButton' onClickCapture={() => handleClick(socialMedia.content)}>
                  <MDBIcon fab icon={socialMedia.title} />
                </MDBBtn>
              );
            })}
          </Col>
          <Col md={{ span: 4, offset: 4 }} className="d-flex justify-content-center align-items-center">
            {copyright}
          </Col>



        </Row>

      </MDBContainer>


    </MDBFooter>
    // <div className="footer">
    //   <ul className="social-media-list">
    //     {socialMedias.map((socialMedia) => {
    //       return (
    //         <li key={socialMedia.id} className="social-media-item" onClick={() => handleClick(socialMedia.content)}>
    //           <Link to="/">{socialMedia.title}</Link>
    //         </li>
    //       );
    //     })}
    //   </ul>
    //   <span className="copyright">{copyright}</span>
    // </div>
  );
};

export default Footer;
