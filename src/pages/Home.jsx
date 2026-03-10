import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
// import SearchBar from "../components/SearchBar/SearchBar";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import NonVegRecipes from "../components/NonVeg/NonVegRecipes";

function Home() {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [breakfastRecipes, setBreakfastRecipes] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const filtered = res.data.meals.filter(
          (meal) => meal.strInstructions && meal.strInstructions.trim().length > 0
        );
        setPopularRecipes(filtered.slice(0, 8));
      } catch (error) {
        console.log("Error fetching popular recipes:", error);
      }
    };

    // const fetchBreakfast = async () => {
    //   try {
    //     const res = await axios.get(
    //       "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
    //     );
    //     const recipesWithInfo = [];
    //     for (let meal of res.data.meals) {
    //       const details = await axios.get(
    //         `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
    //       );
    //       const mealDetail = details.data.meals[0];
    //       if (mealDetail.strInstructions && mealDetail.strInstructions.trim().length > 0) {
    //         recipesWithInfo.push(mealDetail);
    //       }
    //     }
    //     setBreakfastRecipes(recipesWithInfo.slice(0, 8));
    //   } catch (error) {
    //     console.log("Error fetching breakfast recipes:", error);
    //   }
    // };

    const fetchBreakfast = async () => {
  try {

    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
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

    setBreakfastRecipes(filtered.slice(0, 8));

  } catch (error) {
    console.log("Error fetching breakfast recipes:", error);
  }
};

    fetchPopular();
    fetchBreakfast();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      {/* <SearchBar /> */}

      <h2 style={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem", color: "black", margin: "30px 0" }}>
        Popular Recipes
      </h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {popularRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            id={recipe.idMeal}
            image={recipe.strMealThumb}
            title={recipe.strMeal}
            time="30 mins"
          />
        ))}
      </div>

      <h2 style={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem", color: "black", margin: "30px 0" }}>
        Breakfast Ideas
      </h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
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

       <NonVegRecipes />

      <Footer />
    </>
  );
}

export default Home;