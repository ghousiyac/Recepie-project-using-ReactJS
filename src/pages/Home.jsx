import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import NonVegRecipes from "../components/NonVeg/NonVegRecipes";
import HealthyRecipes from "../components/HealthyRecipes/HealthyRecipes";

function Home() {

  const [popularRecipes, setPopularRecipes] = useState([]);
  const [breakfastRecipes, setBreakfastRecipes] = useState([]);
  const [defaultRecipes, setDefaultRecipes] = useState([]); 
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = async (query, type = "recipe") => {
  setSearchQuery(type === "recipe" ? query : ""); 

  if (type === "page") return; 

  if (!query || query.trim() === "") return;

  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    setPopularRecipes(res.data.meals || []);
  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {

    const fetchPopular = async () => {

      try {

        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );

        const filtered = res.data.meals.filter(
          (meal) =>
            meal.strInstructions &&
            meal.strInstructions.trim() !== ""
        );

        const topRecipes = filtered.slice(0, 8);

        setPopularRecipes(topRecipes);
        setDefaultRecipes(topRecipes); // ⭐ save default

      } catch (error) {
        console.log("Error fetching popular recipes:", error);
      }

    };

    const fetchBreakfast = async () => {

      try {

        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
        );

        const meals = res.data.meals;

        const recipeDetails = await Promise.all(
          meals.slice(0, 8).map(async (meal) => {

            const detail = await axios.get(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
            );

            return detail.data.meals[0];

          })
        );

        setBreakfastRecipes(recipeDetails);

      } catch (error) {
        console.log("Error fetching breakfast recipes:", error);
      }

    };

    fetchPopular();
    fetchBreakfast();

  }, []);

  return (
    <>

      <Navbar onSearch={handleSearch} />

      <Hero />

      <SearchBar onSearch={handleSearch} externalQuery={searchQuery} />

      <h2 style={{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "2rem",
        margin: "30px 0"
      }}>
        Popular Recipes
      </h2>

      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px"
      }}>

        {popularRecipes.length === 0 ? (

          <h3>No recipes found</h3>

        ) : (

          popularRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              id={recipe.idMeal}
              image={recipe.strMealThumb}
              title={recipe.strMeal}
              time="30 mins"
            />
          ))

        )}

      </div>

      <h2 style={{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "2rem",
        margin: "30px 0"
      }}>
        Breakfast Ideas
      </h2>

      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px"
      }}>

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

      <HealthyRecipes />

      <Footer />

    </>
  );
}

export default Home;