import Card from "../../shared/Card";
import Placement from "../../shared/Enums";
import certificateThumbnail from "../../../assets/basketball.png";
import "./styles.css";
const Certificates = () => {
  return (
    <div className="certificatesContainer">
      <h1 className="title">Recent Certificates</h1>
      <div className="certificatesSubContainer">
        <Card
          title="Certificate 1"
          thumbnail={certificateThumbnail}
          radius={25}
          titlePlacement={Placement.Below}
        />
        <Card
          title="Certificate 2"
          thumbnail={certificateThumbnail}
          radius={25}
          titlePlacement={Placement.Below}
        />
        <Card
          title="Certificate 3"
          thumbnail={certificateThumbnail}
          radius={25}
          titlePlacement={Placement.Below}
        />
      </div>
    </div>
  );
};

export default Certificates;
