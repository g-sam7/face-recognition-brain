import logo from './logo.svg';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
      </ErrorBoundry>
    </div>
  );
}

export default App;
