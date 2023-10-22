import { useNavigate } from "react-router-dom";
import "./Placeholder.css";

const Placeholder = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  return (
    <div className="main">
      <h1>Website under Maintenance!</h1>
      Admin? <a onClick={login} style={{color: "blue", textDecoration: "underline", cursor: "pointer"}}>Login</a>
    </div>
  );
};

export default Placeholder;
