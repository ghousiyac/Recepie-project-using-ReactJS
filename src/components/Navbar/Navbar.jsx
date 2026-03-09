import React from 'react'
import './Navbar.css'
const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="logo">
        🍲 RecipeHub
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/recipes">Recipes</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/about">About</a></li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search recipes..." />
      </div>
    </nav>
  )
}

export default Navbar
