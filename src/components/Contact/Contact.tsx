import Card from "../shared/Card";
import Placement from "../shared/Enums";
import "./styles.css";
import profesionalPicture from "../../assets/basketball.png";
import Button from "../shared/Button";
import { useState } from "react";



const Contact = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [subject, setSubject] = useState('');
  let [message, setMessage] = useState('');
  let [isCopy, setIsCopy] = useState(false);

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
      .then((response) => { response.status == 201 ? alert("We have sent your email!") : alert("An error has occured while sending the email. Please try again later.") });
    // .then((data) => alert(data));
  };

  return (
    <div className="contactContainer">
      <div className="professionalPicture">
        <Card
          title="placeholder"
          thumbnail={profesionalPicture}
          radius={0}
          titlePlacement={Placement.Undefined}
          width={300}
          minHeight={600}
        />
      </div>
      <div className="contactFormContainer">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="contactInput"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="contactInput"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="contactInput"
          onChange={(event) => setSubject(event.target.value)}

        />
        <textarea
          name="message"
          placeholder="Message"
          className="contactInput textArea"
          onChange={(event) => setMessage(event.target.value)}

        />
        <div className="formInput">
          <input type="checkbox" className="checkboxInput" name="sendCopy" onChange={(event) => setIsCopy(event.target.checked)} />
          <label className="sendText"> Send me a copied email</label>
        </div>
        <div className="sendEmailButton">
          <Button buttonText="Send Email" handleClick={sendEmail} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
