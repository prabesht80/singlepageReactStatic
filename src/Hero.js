import React from "react";
import "./Hero.css";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="container">
      <Navbar />
      <div className="hero-container">
        <div className="hero-details">
          <h2>Think Design And Build</h2>
          <p>enhance your skills with us. we will make you best</p>
          <button>Read More</button>
        </div>
        <img
          src="https://ouch-cdn2.icons8.com/GtlEpGlX_2faRxGrJr3FQV7drgxW6XJOKvL60Q_ra6k/rs:fit:1216:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzE3/LzMyMWFkYTI1LThl/YzQtNGI5Ni1hMTE2/LWJhNTkxZGMzNjM0/Yi5zdmc.png"
          alt="#"
        />
      </div>
    </div>
  );
}

export default Hero;
