import PopularRecipe from "../components/PopularRecipe/PopularRecipe";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import NonVegRecipes from "../components/NonVeg/NonVegRecipes";
import Breakfast from "../components/Breakfast/Breakfast";

function Home() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <PopularRecipe />
      <Breakfast/>
      <NonVegRecipes />
      <Footer />
    </>
  );
}

export default Home;
