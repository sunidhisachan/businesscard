import React from "react";

export default function Content (){

return(
    <section>
    <div className="container">
       <img src= {require('./img1.jpg')}  />
       <img src= {require('./img2.jpeg')}  />
       <img src= {require('./img4.webp')}  />
       <img src= {require('./img5.jpg')}  />
       <img src= {require('./img6.jpg')}  />
       <img src= {require('./img1.jpg')}  />
       </div>
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </section>
)

}