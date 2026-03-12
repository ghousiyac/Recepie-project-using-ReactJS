import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../RecipeCard/RecipeCard"; 

const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        setRecipes(res.data.meals.slice(0, 8));
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipes();
  }, []);

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
        Pupuler Recipes
      </h2>

    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
   
      {recipes.map((item) => (
        <RecipeCard
          key={item.idMeal}
          id={item.idMeal}
          image={item.strMealThumb}
          title={item.strMeal}
          time="30 mins"
        />
      ))}
    </div>
    </>
  );
};

export default PopularRecipe;