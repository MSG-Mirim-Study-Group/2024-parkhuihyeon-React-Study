import logo from './logo.svg';
import './App.css';

function App() {
  const name = "희현";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{name}, 미션완료!</p>
      </header>
    </div>
  );
}


export default App;
