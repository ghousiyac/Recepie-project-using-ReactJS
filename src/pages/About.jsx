import React from "react";
import "./About.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-container">
        <h1 className="about-title">ABOUT US</h1>

        <div className="about-card">
          <p>
            Connects the chefs and the users who are new to cooking or who are
            learning to cook. It also helps students and tourists who travel
            around and want to cook something new but have less time for
            cooking.
          </p>

          <p>
            Even chefs can use this platform to upload or write new recipes.
            Users can also create their own dishes, name them, and publish them
            by subscribing to our application.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
            alt="food"
          />
        </div>

        <div className="about-features">
          <div className="feature-box">
            <h3>🍳 Learn Cooking</h3>
            <p>Beginner friendly recipes to start your cooking journey.</p>
          </div>

          <div className="feature-box">
            <h3>👨‍🍳 For Chefs</h3>
            <p>Professional chefs can share their recipes with the world.</p>
          </div>

          <div className="feature-box">
            <h3>🌍 Travelers</h3>
            <p>Find easy recipes anywhere when you travel.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;