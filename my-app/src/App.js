
import React from "react"
import ReactDOM from "react-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
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

function Main(){
  return(
    <div className='Mains'>
      <div className="img">
      <img src= {require('./Img1.jpg')} width="350px" />
      </div >



<div className='cont2'>
      <h4>Second Year Student (B-Tech) INFORMATION TECHNOLOGY</h4>
      <h4>HTML| CSS| Java Script| React | C++ | JAVA</h4>
      </div>

<div>

</div >
<div className="button">
  <span>
<button >Linkedin</button>
</span>
<span>
<button>GitHub</button>
</span>
</div>
<div className="cont3">
  <h4>About</h4>
  <p>I am Sunidhi Sachan, persuing my btech in information technology. 
    Currently I am into Web Developement and trying to learn Java Script and React . 
    Recetly started to focus on learning DSA and improving my coding skills</p>
<h4>Interests</h4>
<div>
  <ul>
 
<li>Open Source</li>
<li>Coding</li>
<li>Front End Web Developement</li>
<li>Reading</li>
<li>Photography</li>
 
  </ul>
</div>

</div>


    </div>
  )
}

ReactDOM.render(Main(), document.getElementById("root"))
