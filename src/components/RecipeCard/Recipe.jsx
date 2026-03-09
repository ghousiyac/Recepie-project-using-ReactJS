import React from 'react'
import './Recipe.css'

const Recipe = ({image, title, time }) => {
  return (
    <div>
      <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />

      <div className="recipe-content">
        <h3 className="recipe-title">{title}</h3>
        <p className="recipe-time">⏱ {time}</p>

        <button className="recipe-btn">View Recipe</button>
      </div>
    </div>
    </div>
  )
}

export default Recipe
