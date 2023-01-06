import styles from "../style/home.module.css";
import Button from "react-bootstrap/Button";
import { Logo } from "../assets/";
import { Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
export const Home = () => {
  const [url, setUrl] = useState("");
  return (
    <div className={styles.back}>
      <div className={styles.head}>
        <Logo />
      </div>
      <div className={styles.shorter}>
        {/* <Form value={url}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter a long URL to make a TinyURL</Form.Label>
            <Form.Control size="lg" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button size="lg" variant="success">
              Make TinyURL!
            </Button>
          </div>
        </Form> */}
        <p>Enter a long URL to make a TinyURL</p>
        <input></input> <br></br>
        <button>Make TinyURL!</button>
      </div>
    </div>
  );
};
