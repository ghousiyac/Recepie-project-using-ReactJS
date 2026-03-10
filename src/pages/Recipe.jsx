import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Recipe.css";

const Recipe = () => {

  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {

    const fetchMeal = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        setMeal(res.data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMeal();

  }, [id]);

  if (!meal) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="recipe-page">

      <div className="recipe-details-card">

        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="recipe-details-image"
        />

        <div className="recipe-details-content">

          <h1 className="recipe-details-title">
            {meal.strMeal}
          </h1>

          <p className="recipe-meta">
            Category: {meal.strCategory} | Area: {meal.strArea}
          </p>

          <p className="recipe-instructions">
            {meal.strInstructions}
          </p>

          <button
            className="back-btn"
            onClick={() => window.history.back()}
          >
            Back
          </button>

        </div>

      </div>

    </div>
  );
};

export default Recipe;