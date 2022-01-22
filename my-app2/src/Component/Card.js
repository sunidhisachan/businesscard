import React from "react";

export default function Card (){
return(
    <div className="container">
    <div className="card">
  <img src= {require('./img10.jpg' ) }  />
  <div className="card--stats">
  <img src= {require('./star.jpg' ) }  />
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
    </div>
     <div className="card">
     <img src= {require('./img11.jpg' ) }  />
     <div className="card--stats">
     <img src= {require('./star.jpg' ) }  />
                   <span>5.0</span>
                   <span>(6) • </span>
                   <span>USA</span>
               </div>
               <p>Learn wedding photography</p>
               <p>From $125 / person</p>
       </div>
        <div className="card">
        <img src= {require('./img14.jpg' ) }  />
        <div className="card--stats">
        <img src= {require('./star.jpg' ) }  />
                      <span>5.0</span>
                      <span>(6) • </span>
                      <span>USA</span>
                  </div>
                  <p>Group Mountain Biking</p>
                  <p>From $50 / person</p>
          </div>
          </div>
)
}