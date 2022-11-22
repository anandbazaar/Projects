import logo from "./logo.svg";
import styles from "./styles/App.module.css";
import styles0 from "./styles/Dj.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dj, ProgressBar } from "./components/index.js";
import { HiddenProvider, useHidden } from "./components/Context";
import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function App() {
  const back2 = useRef();
  const { hidden, hide } = useHidden();
  const MLT = new Array(3).fill(null);

  return (
    <div className={styles.back}>
      <div
        id="clack"
        ref={back2}
        className={styles.innerBack0}
        onClick={hide}
      />

      <div className={hidden ? styles.MoreLikeThis0 : styles.MoreLikeThis}>
        <h1>More from "joji"</h1>

        {MLT.map((x, i) => (
          <Card
            key={x + i}
            className={styles.mltc}
            style={{ width: "18rem", marginBottom: "10px" }}
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Dj back={back2} className={styles0.Dj}></Dj>
    </div>
  );
}

export default App;
