import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div>
     
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>🍲 RecipeHub</h2>
          <p>Quick and easy recipes for everyday cooking.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/recipes">Recipes</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: recipehub@gmail.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 RecipeHub. All rights reserved.</p>
      </div>
    </footer>


    </div>
  )
}

export default Footer
