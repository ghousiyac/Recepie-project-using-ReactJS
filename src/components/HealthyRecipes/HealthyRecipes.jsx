import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../RecipeCard/RecipeCard";   // use same card
import "./healthy.css";

const HealthyRecipes = () => {

  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const recipesPerPage = 8;

  useEffect(() => {

    const fetchHealthyRecipes = async () => {
      try {

        const veg = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
        );

        const vegan = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan"
        );

        const combined = [...veg.data.meals, ...vegan.data.meals];

        setRecipes(combined);

      } catch (error) {
        console.log(error);
      }
    };

    fetchHealthyRecipes();

  }, []);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  return (

    <section className="healthy-section">

      <h2 className="healthy-title">Healthy Recipes</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >

        {currentRecipes.map((meal) => (

          <RecipeCard
            key={meal.idMeal}
            id={meal.idMeal}
            image={meal.strMealThumb}
            title={meal.strMeal}
            time="25 mins"
          />

        ))}

      </div>

      {/* Pagination */}

      <div className="pagination">

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ← Prev
        </button>

        <span>{currentPage} / {totalPages}</span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next →
        </button>

      </div>

    </section>
  );
};

export default HealthyRecipes;