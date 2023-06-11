import Card from "../../shared/Card";
import Placement from "../../shared/Enums";
import certificateThumbnail from "../../../assets/basketball.png";
import "./styles.css";
import { useEffect, useState } from "react";
const Certificates = () => {
  let [certificates, setCertificates] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://portfolio.abenazzou.com/api/certificate/latest")
      .then((response) => response.json())
      .then((data) => setCertificates(data));
  }, []);

  return (
    <div className="certificatesContainer">
      <h1 className="title">Recent Certificates</h1>
      <div className="certificatesSubContainer">
        {certificates.map((certificate) => {
          return (
            <Card
              key={certificate.id}
              title={certificate.name}
              thumbnail={certificateThumbnail}
              radius={25}
              titlePlacement={Placement.Below}
              height={500}
              width={500}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
