import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../RecipeCard/RecipeCard"; 

const Breakfast = () => {

const [breakfastRecipes, setBreakfastRecipes] = useState([]);

  useEffect(() => {
    const fetchBreakfast = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast",
        );

        const meals = res.data.meals;

        const recipeDetails = await Promise.all(
          meals.map(async (meal) => {
            const detail = await axios.get(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`,
            );
            return detail.data.meals[0];
          }),
        );

        const filtered = recipeDetails.filter(
          (meal) => meal.strInstructions && meal.strInstructions.trim() !== "",
        );

        setBreakfastRecipes(filtered.slice(0, 8));
          } catch (error) {
        console.log("Error fetching breakfast recipes:", error);
      }
    };

    fetchBreakfast();
  }, []);

  return (
    <>
      

<h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "2rem",
          color: "black",
          margin: "30px 0",
        }}
      >
        Breakfast Ideas
      </h2>

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {breakfastRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            id={recipe.idMeal}
            image={recipe.strMealThumb}
            title={recipe.strMeal}
            time="20-30 mins"
          />
        ))}
      </div>

    </>
  )
}

export default Breakfast
