import "../../public/styles.css";

import { Envelope, FileCode } from "react-bootstrap-icons";

import ostrichLogo from "../../public/imgs/logos/ostrich.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="display-1">
          <img src={ostrichLogo} alt="Ostrich logo" height="130" />
        </h1>
        <h3 className="display-3">Web Services meets Agriculture</h3>

        <small>
          Designed by{" "}
          <a
            href="https://deepagro.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#175836", textDecoration: "none" }}
          >
            DeepAgro
          </a>
        </small>

        <small>(Soon)</small>

        <hr></hr>

        <a
          href="https://docs.ostrich.ag"
          class="btn btn-outline-light btn-sm"
          role="button"
        >
          <FileCode></FileCode> Docs
        </a>

        <small>
          <a
            href="mailto:ostrich@deepagro.com.ar"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Envelope color="white" size={65} className="email" />
          </a>
        </small>
      </header>
    </div>
  );
}

export default App;
