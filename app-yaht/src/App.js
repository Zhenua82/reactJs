import logo from './logo.svg';
import yaht from './assets/yacht.webp';
import delph from './assets/delph.webp';
import  tt from './assets/tt.webp'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={yaht} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={delph} className="App-logo" alt="logo" />
        <img src={tt} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
