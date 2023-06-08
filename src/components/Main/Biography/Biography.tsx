import { useEffect, useState } from "react";
import "./styles.css";
const Biography = () => {
  let [biography, setBiography] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://portfolio.abenazzou.com/api/biography/sorted")
      .then((response) => response.json())
      .then((data) => setBiography(data));
  }, []);

  return (
    <div className="biographyContainer">
      <h1 className="title">Biography</h1>
      <div className="biography">
        {biography.map((bio) => {
          return (
            <div key={bio.id}>
              {bio.start_year ? bio.start_year + " - " : ""}
              {bio.end_year ? bio.end_year : "Now"} : {bio.occupation}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Biography;
