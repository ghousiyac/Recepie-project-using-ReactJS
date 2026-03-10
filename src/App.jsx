
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import Footer from "./components/Footer/Footer";
// import Recipe from "./components/RecipeCard/Recipe"
// import Hero from './components/Hero/Hero';
// import Category from './components/Category/Category';
// import SearchBar from './components/SearchBar/SearchBar';

// function App() {
//   return (
//     <>
  
//         <Navbar/>

//         <SearchBar/>
//          <h1 style={{textAlign:"center"}}>Popular Recipes</h1>

//       <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
//         <Recipe 
//           image="https://source.unsplash.com/300x200/?pasta"
//           title="Creamy Pasta"
//           time="25 mins"
//         />

//         <Recipe 
//           image="https://source.unsplash.com/300x200/?pizza"
//           title="Cheese Pizza"
//           time="30 mins"
//         />

//         <Recipe 
//           image="https://source.unsplash.com/300x200/?burger"
//           title="Chicken Burger"
//           time="20 mins"
//         />
   
// </div>
// <Hero/>
// <Category/>
//       <Footer />
//    </>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";
import PopularRecipe from "./components/PopularRecipe/PopularRecipe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/popular" element={<PopularRecipe />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;