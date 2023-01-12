import "../../public/styles.css";

import { Envelope, FileCode } from "react-bootstrap-icons";

import ostrichLogo from "../../public/imgs/logos/ostrich.png";

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <div className="container">
            <h1 className="display-1">
              <img src={ostrichLogo} alt="Ostrich logo" height="130" />
            </h1>
            <h3 className="display-3">AI & Software meets Agriculture</h3>

            <h3 className="display-6">Experiment with our repository of more than <strong style={{ color: "#175836" }}>2M</strong> of <strong style={{ color: "#175836" }}>HD</strong> and rich <strong style={{ color: "#175836" }}>annotated</strong> field <strong style={{ color: "#175836" }}>images</strong> across LATAM</h3>

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

            <br></br>

            <small>(Soon)</small>

            <br></br>
            <br></br>

            <a
              href="https://docs.ostrich.ag"
              class="btn btn-outline-light btn-lg"
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
          </div>
        </header>
      </div>
  );
}

export default App;
