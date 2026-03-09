import React from 'react'
import "./category.css";

const Category = () => {
  return (
    <div>
       <div className="categories">

      <h2>Recipe Categories</h2>

      <div className="category-list">

        <div className="category-card">🍳 Breakfast</div>
        <div className="category-card">🍕 Lunch</div>
        <div className="category-card">🍝 Dinner</div>
        <div className="category-card">🍰 Dessert</div>

      </div>

    </div>
    </div>
  )
}

export default Category
