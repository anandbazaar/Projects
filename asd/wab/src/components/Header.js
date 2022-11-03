import { Link } from "../../node_modules/react-router-dom/dist/index";
import "../styles/Header.modules.css";
import logo from "../asset/team..svg";
export const Header = (props) => {
  return (
    <div className="header">
      <div>
        <Link className="HeaderItem loogo" to="/">
          <p>
            <img src={logo} />
            <span style={{ color: "lightblue" }}></span>
          </p>
        </Link>
      </div>
      <div>
        <Link className="HeaderItem" to="/products">
          Products
        </Link>
        <Link className="HeaderItem" to="/services">
          Services
        </Link>
        <Link className="HeaderItem" to="/contact">
          Contact
        </Link>
        <Link className="HeaderItem" to="/login">
          Log In
        </Link>
        <Link className="HeaderItem" to="/getAccess">
          Get Access
        </Link>
      </div>
    </div>
  );
};
