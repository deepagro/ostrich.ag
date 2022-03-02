import '../../public/styles.css';
import ostrichLogo from '../../public/imgs/logos/ostrich.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='display-1'>
          <img src={ostrichLogo} alt="Ostrich logo" height="130" />
        </h1>
        <h3 className='display-3'>
          SaaS meets Agriculture
        </h3>

        <small>
          Designed by <a href="https://deepagro.com" target="_blank" style={{ color: "#175836", textDecoration: "none" }}>
            DeepAgro
          </a>
        </small>
      </header>
    </div>
  );
}

export default App;
