import Card from "../shared/Card";
import Placement from "../shared/Enums";
import "./styles.css";
import certificateLogo from "../../assets/basketball.png";

const Certificates = () => {
  return (
    <div className="certificateContainer">
      <h1 className="title center">5 Certificates</h1>
      <div className="certificateSubContainer">
        <Card
          title="certificate 1"
          thumbnail={certificateLogo}
          radius={50}
          titlePlacement={Placement.Undefined}
          height={300}
          width={500}
        />

        <Card
          title="certificate 2"
          thumbnail={certificateLogo}
          radius={50}
          titlePlacement={Placement.Undefined}
          height={300}
          width={500}
        />

        <Card
          title="certificate 3"
          thumbnail={certificateLogo}
          radius={50}
          titlePlacement={Placement.Undefined}
          height={300}
          width={500}
        />

        <Card
          title="certificate 4"
          thumbnail={certificateLogo}
          radius={50}
          titlePlacement={Placement.Undefined}
          height={300}
          width={500}
        />

        <Card
          title="certificate 5"
          thumbnail={certificateLogo}
          radius={50}
          titlePlacement={Placement.Undefined}
          height={300}
          width={500}
        />
      </div>
    </div>
  );
};

export default Certificates;
