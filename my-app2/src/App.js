import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from "react-dom"
import Navbar from './Component/Navbar';
import Content from './Component/Content';
import Card from './Component/Card';


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

function App2(){
  return(
   <div>
   <Navbar />
   <Content />
   <Card />
   </div>
  )
}

ReactDOM.render(<App2 />,document.getElementById("root"))