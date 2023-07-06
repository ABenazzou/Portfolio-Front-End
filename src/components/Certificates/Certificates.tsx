import Card from "../shared/Card";
import Placement from "../shared/Enums";
import "./styles.css";
import certificateLogo from "../../assets/basketball.png";
import { useEffect, useState } from "react";

const Certificates = () => {
  let [certificates, setCertificates] = useState<any[]>([]);
  const handleCertificateClick = (certificateLink: string) => {
    console.log(certificateLink);
    window.open(certificateLink, '_blank', 'noopener,noreferrer');
  }


  useEffect(() => {
    fetch("api/certificate/latest")
      .then((response) => response.json())
      .then((data) => setCertificates(data));
  }, []);

  return (
    <div className="certificateContainer">
      <h1 className="title center">5 Certificates</h1>
      <div className="certificateSubContainer">
        {certificates.map((certificate) => {
          return (
            <div key={certificate.id} className="certificateCard" onClick={() => handleCertificateClick(certificate.validity_link)}>
              <Card
                key={certificate.id}
                title={certificate.name}
                thumbnail={certificateLogo}
                radius={50}
                titlePlacement={Placement.Undefined}
                height={300}
                width={500}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
