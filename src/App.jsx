
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Recipe from "./components/RecipeCard/Recipe"
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <>
  
        <Navbar/>

        <SearchBar/>
         <h1 style={{textAlign:"center"}}>Popular Recipes</h1>

      <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
        <Recipe 
          image="https://source.unsplash.com/300x200/?pasta"
          title="Creamy Pasta"
          time="25 mins"
        />

        <Recipe 
          image="https://source.unsplash.com/300x200/?pizza"
          title="Cheese Pizza"
          time="30 mins"
        />

        <Recipe 
          image="https://source.unsplash.com/300x200/?burger"
          title="Chicken Burger"
          time="20 mins"
        />
   
</div>
<Hero/>
<Category/>
      <Footer />
   </>
  );
}

export default App;
