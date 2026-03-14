import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaYoutube, FaInstagram, FaLinkedin, FaSearch } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const Navbar = ({ onSearch }) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  

  const handleSearch = (e) => {
  if (e) e.preventDefault();

  const text = query.trim();
  if (!text) return;

  const page = text.toLowerCase();
  if (page === "about") {
    navigate("/about");
    if (onSearch) onSearch("", "page");
  } else if (page === "category" || page === "categories") {
    navigate("/category");
    if (onSearch) onSearch("", "page");
  } else if (page === "home") {
    navigate("/");
    if (onSearch) onSearch("", "page");
  } else {
    if (onSearch) onSearch(text, "recipe");
    navigate("/");
  }

  setQuery(""); 
};

  return (
    <header>

      <div className="top-header">

        <div className="logo">
          🍲 <span>Recipe</span>Hub
        </div>

        <div className="right-section">

          {/* FORM SEARCH */}
          <form className="search-box" onSubmit={handleSearch}>

            <input
              type="text"
              placeholder="Search recipes or pages..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button type="submit">
              <FaSearch />
            </button>

          </form>

          <div className="social-icons">
            <FaYoutube />
            <FaInstagram />
            <FaLinkedin />
          </div>

          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <HiMenu />
          </div>

        </div>

      </div>

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