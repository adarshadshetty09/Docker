import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ color: "cyan" }}>🚀 Welcome to My Dockerized React App! 🎉</h1>
        <h2 style={{ color: "cyan" }}>🚀 Welcome to DevOps Engineer 🎉</h2>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
