
import './index.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../RecipeCard/RecipeCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NonVegRecipes = () => {

  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const recipesPerPage = 4;

  useEffect(() => {
    const fetchNonVeg = async () => {
      try {

        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"
        );

        const meals = res.data.meals;

        const recipeDetails = await Promise.all(
          meals.map(async (meal) => {
            const detail = await axios.get(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
            );
            return detail.data.meals[0];
          })
        );

        const filtered = recipeDetails.filter(
          (meal) => meal.strInstructions && meal.strInstructions.trim() !== ""
        );

        setRecipes(filtered);

      } catch (error) {
        console.log("Error fetching Non Veg recipes:", error);
      }
    };

    fetchNonVeg();
  }, []);


  /* Pagination Logic */

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const totalPages = Math.ceil(recipes.length / recipesPerPage);


  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "2rem",
          margin: "30px 0",
          color:"#193671",
        }}
      >
        Non-Vegetarian Recipes
      </h2>


      {/* Recipe Grid */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          backgroundColor:"#193671",
        }}
      >
        {currentRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            id={recipe.idMeal}
            image={recipe.strMealThumb}
            title={recipe.strMeal}
            time="35 mins"
          />
        ))}
      </div>


      {/* Pagination Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
        }}
      >
       <div className="pagination">

<button 
onClick={prevPage} 
disabled={currentPage === 1}
className="arrow-btn"
>
<FaArrowLeft />
</button>

<span className="page-info">
{currentPage} / {totalPages}
</span>

<button 
onClick={nextPage} 
disabled={currentPage === totalPages}
className="arrow-btn"
>
<FaArrowRight />
</button>

</div>
      </div>
    </>
  );
};

export default NonVegRecipes;