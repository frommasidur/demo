import logo1 from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>Click here</button>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        <p>
          Edit save to reload Masidur.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        < MyButton />
      </header>
    </div>
  );
}

export default App;
