import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;