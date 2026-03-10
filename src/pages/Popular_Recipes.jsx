import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";
import Recipe from "../components/RecipeCard/Recipe";

const Popular_Recipes = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );

      setRecipes(res.data.meals.slice(0,8));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar/>
      <SearchBar/>

      <h1 style={{textAlign:"center"}}>Popular Recipes</h1>

      <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
        
        {recipes.map((item) => (
        <Recipe
        id={item.idMeal}
        image={item.strMealThumb}
        title={item.strMeal}
        time="30 mins"
/>        ))}

      </div>

      <Footer/>
    </>
  );
};

export default Popular_Recipes;