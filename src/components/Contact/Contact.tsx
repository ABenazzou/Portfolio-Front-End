// import Card from "../shared/Card";
// import Placement from "../shared/Enums";
import "./styles.css";
// import profesionalPicture from "../../assets/basketball.png";

// import Button from "../shared/Button";
import { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button, Form, FloatingLabel, InputGroup, Alert, Spinner } from "react-bootstrap";
import { Avatar } from '@readyplayerme/visage';
import { useSelector } from "react-redux";
import { State } from "../../store/reducers";

const Contact = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [subject, setSubject] = useState('');
  let [message, setMessage] = useState('');
  let [isCopy, setIsCopy] = useState(false);
  let [validated, setValidated] = useState(false);
  let [success, setSuccess] = useState(false);
  let [failure, setFailure] = useState(false);
  let [avatar, setAvatar] = useState('');
  let isDarkMode = useSelector((state: State) => state.theme);
  let [isLoading, setIsLoading] = useState(true);
  let [isSendingEmail, setIsSendingEmail] = useState(false);

  const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
    setIsSendingEmail(true);
    const form = event.currentTarget;
    setSuccess(false);
    setFailure(false);

    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setTimeout(() => setIsSendingEmail(false), 1000);
    }
    else {
      sendEmail();
    }

    setValidated(true);
  };

  const setEmailState = (state: boolean) => {
    if (state) {
      setSuccess(true);
      setFailure(false);
    }
    else {
      setSuccess(false);
      setFailure(true);
    }
  }

  const sendEmail = () => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "name": name,
        "email": email,
        "subject": subject,
        "message": message,
        "isCopy": isCopy
      })
    }

    fetch("api/mail", options)
      .then((response) => { response.status == 201 ? setEmailState(true) : setEmailState(false) })
      .then(() => setIsSendingEmail(false));
    // .then((data) => alert(data));
  };

  useEffect(() => {
    fetch("api/section?type=image_content&title=Avatar")
      .then((response) => response.json())
      .then((data) => setAvatar(data.content))
      .then(() => setIsLoading(false));
  }, [])

  return (
    <Container className="mt-5 ">
      <Row md={3} xs={2}>
        <Col className="d-flex justify-content-left align-items-center" >
          {isLoading &&
            <div className='d-flex justify-content-center'>
              <Spinner animation="border" variant={isDarkMode ? "secondary" : "dark"} className="d-flex justify-content-center" />
            </div>
          }
          <Avatar modelSrc={avatar} />
          {/* <Image src={profesionalPicture} className="img-fluid" style={{ maxWidth: 'auto', height: '100%', width: 'auto' }} /> */}

        </Col>
        <Col className="my-auto" md={{ offset: 1, span: 7 }}>

          {
            success && (<Alert key="success" variant="success">
              <i className="fas fa-thumbs-up"></i>  We have sent your email succesfully!
            </Alert>)
          }

          {
            failure && (<Alert key="danger" variant="danger">
              <i className="fas fa-circle-exclamation"></i> An error occured while sending your email, please try again later!
            </Alert>)
          }

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="d-flex mb-3" >
              <FloatingLabel label="Name">
                <Form.Control size="lg" required type="text" placeholder="Anonymous" onChange={(event) => setName(event.target.value)} />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="d-flex" >
              <FloatingLabel label="Email address" className="mb-3">
                <Form.Control required size="lg" type="email" placeholder="anonymous@example.com" onChange={(event) => setEmail(event.target.value)} />
              </FloatingLabel>
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            </Form.Group>

            <Form.Group>
              <FloatingLabel label="Subject" className="mb-3">
                <Form.Control required type="text" placeholder="Subject" onChange={(event) => setSubject(event.target.value)} />
              </FloatingLabel>
            </Form.Group>

            <Form.Group>
              <FloatingLabel label="Message" className="mb-3">
                <Form.Control required as="textarea" placeholder="Message" style={{ height: '100px' }} onChange={(event) => setMessage(event.target.value)} />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="d-flex justify-content-right align-items-center gap-2 mb-3">
              <Form.Check type="checkbox" onChange={(event) => setIsCopy(event.target.checked)} />
              <Form.Text className={isDarkMode ? "text-white large" : "large"}>Send me a copied email</Form.Text>
            </Form.Group>

            <Container className="d-flex justify-content-center align-items-center ">
              <Button variant={isDarkMode ? "secondary" : "dark"} type="submit">{isSendingEmail ? <div className='d-flex justify-content-center mt-4'><Spinner size="sm" animation="border" variant={isDarkMode ? "dark" : "secondary"} />
              </div> : "Send Email"}</Button>
            </Container>
          </Form>



        </Col>
      </Row>
    </Container >
    // <div className="contactContainer">
    //   <div className="professionalPicture">
    //     <Card
    //       title="placeholder"
    //       thumbnail={profesionalPicture}
    //       radius={0}
    //       titlePlacement={Placement.Undefined}
    //       width={300}
    //       minHeight={600}
    //     />
    //   </div>
    //   <div className="contactFormContainer">
    //     <input
    //       type="text"
    //       name="name"
    //       placeholder="Name"
    //       className="contactInput"
    //       onChange={(event) => setName(event.target.value)}
    //     />
    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="Email"
    //       className="contactInput"
    //       onChange={(event) => setEmail(event.target.value)}
    //     />
    //     <input
    //       type="text"
    //       name="subject"
    //       placeholder="Subject"
    //       className="contactInput"
    //       onChange={(event) => setSubject(event.target.value)}

    //     />
    //     <textarea
    //       name="message"
    //       placeholder="Message"
    //       className="contactInput textArea"
    //       onChange={(event) => setMessage(event.target.value)}

    //     />
    //     <div className="formInput">
    //       <input type="checkbox" className="checkboxInput" name="sendCopy" onChange={(event) => setIsCopy(event.target.checked)} />
    //       <label className="sendText"> Send me a copied email</label>
    //     </div>
    //     <div className="sendEmailButton">
    //       <Button buttonText="Send Email" handleClick={sendEmail} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Contact;
