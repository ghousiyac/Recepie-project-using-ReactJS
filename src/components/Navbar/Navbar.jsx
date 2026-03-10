import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaYoutube, FaInstagram, FaLinkedin, FaSearch } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>

      {/* TOP HEADER */}
      <div className="top-header">

        {/* LOGO */}
        <div className="logo">
          🍲 <span>Recipe</span>Hub
        </div>

        {/* RIGHT SIDE */}
        <div className="right-section">

          {/* SEARCH BAR */}
          <div className="search-box">
            <input type="text" placeholder="Search recipes..." />
            <button>
              <FaSearch />
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <FaYoutube />
            <FaInstagram />
            <FaLinkedin />
          </div>

          {/* MOBILE MENU ICON */}
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <HiMenu />
          </div>

        </div>

      </div>


      {/* MENU BAR */}
      <nav className={menuOpen ? "menu-bar active" : "menu-bar"}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipe">Recipes</Link></li>
          <li><Link to="/category">Categories</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

    </header>
  );
};

export default Navbar;