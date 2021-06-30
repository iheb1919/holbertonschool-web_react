import logo from '../assets/holberton.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from '../utils/utils.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className="imgholb" src={logo} alt="holberton"/>
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <p>Login to access the full dashboard</p>

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email"/>
        &nbsp;&nbsp;
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password"/>
        &nbsp;&nbsp;
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}


export default App;
