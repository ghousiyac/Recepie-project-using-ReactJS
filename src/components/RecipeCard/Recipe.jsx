import React from 'react'
import { Link } from "react-router-dom";
import './Recipe.css'

const Recipe = ({ id, image, title, time }) => {
  return (
    <div>
      <div className="recipe-card">

        <img src={image} alt={title} className="recipe-image" />

        <div className="recipe-content">
          <h3 className="recipe-title">{title}</h3>
          <p className="recipe-time">⏱ {time}</p>

          <Link to={`/recipe/${id}`}>
            <button className="recipe-btn">View Recipe</button>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Recipe