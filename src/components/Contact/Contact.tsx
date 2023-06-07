import Card from "../shared/Card";
import Placement from "../shared/Enums";
import "./styles.css";
import profesionalPicture from "../../assets/basketball.png";
import Button from "../shared/Button";

const sendEmail = () => {
  console.log("sendEmail clicked!");
};

const Contact = () => {
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
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="contactInput"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="contactInput"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="contactInput textArea"
        />
        <div className="formInput">
          <input type="checkbox" className="checkboxInput" name="sendCopy" />
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
