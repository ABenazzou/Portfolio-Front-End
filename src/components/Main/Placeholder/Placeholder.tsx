import { useNavigate } from "react-router-dom";
import "./Placeholder.css";
import { useSelector } from "react-redux";
import { State } from "../../../store/reducers";

const Placeholder = () => {
  let isDarkMode = useSelector((state: State) => state.theme);

  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  return (
    <div className={isDarkMode?"main":"main-light"}>
      <h1>Website under Maintenance!</h1>
      Admin? <a onClick={login} style={{color: "blue", textDecoration: "underline", cursor: "pointer"}}>Login</a>
    </div>
  );
};


export default Placeholder;
