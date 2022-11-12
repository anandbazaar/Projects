import {
  Link,
  useLocation,
} from "../../node_modules/react-router-dom/dist/index";
import Form from "react-bootstrap/Form";
import style from "../styles/Header.module.css";
import logo from "../asset/team..svg";
import logo2 from "../asset/teem.svg";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../common/ThemeProvider";
export const Header = (props) => {
  const location = useLocation();
  const [a, b] = useState(true);
  const { theme, changeTheme } = useContext(ThemeContext);
  useEffect(() => {
    if (location.pathname !== "/") b(true);
    else b(false);
  }, [location, theme]);

  return (
    <div className={a === false ? style.header : style.header2}>
      <div>
        <Link
          className={a === false ? style.HeaderItem : style.HeaderItem2}
          to="/"
        >
          <img src={a === false ? logo : logo2} />
        </Link>
      </div>
      <div>
        <Form>
          <Form.Check
            onChange={() => {
              changeTheme();
            }}
            type="switch"
            id="custom-switch"
          />
        </Form>
        <Link
          className={a === false ? style.HeaderItem : style.HeaderItem2}
          to="/products"
        >
          Products
        </Link>
        <Link
          className={a === false ? style.HeaderItem : style.HeaderItem2}
          to="/services"
        >
          Services
        </Link>
        <Link
          className={a === false ? style.HeaderItem : style.HeaderItem2}
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className={a === false ? style.HeaderItem : style.HeaderItem2}
          to="/login"
        >
          Log In
        </Link>
        <Link
          className={a === false ? style.HeaderItem : style.HeaderItem2}
          to="/getAccess"
        >
          Get Access
        </Link>
      </div>
    </div>
  );
};
