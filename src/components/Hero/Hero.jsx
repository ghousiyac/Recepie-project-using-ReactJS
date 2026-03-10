import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">

      {/* Left Image */}
      <div className="hero-image">
        <img
          src="https://as1.ftcdn.net/v2/jpg/02/52/38/80/1000_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"
          alt="recipe"
        />
      </div>

      {/* Right Content */}
      <div className="hero-content">
        <h1>What to make today</h1>
        <p>A delicious meal idea for your family</p>

        <button className="hero-btn">
          <a href="/recipes">Get The Recipe →</a>
        </button>
      </div>

    </div>
  );
};

export default Hero;