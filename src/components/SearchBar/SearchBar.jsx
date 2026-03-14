import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchBar.css";

function SearchBar({ onSearch, externalQuery }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  
  useEffect(() => {
    if (externalQuery !== undefined && externalQuery !== query) {
      setQuery(externalQuery);
      setShowSuggestions(false); 
    }
  }, [externalQuery]);

  
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!query || query.trim() === "" || !showSuggestions) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );

        if (res.data.meals) {
          const filtered = res.data.meals.filter((meal) =>
            meal.strMeal.toLowerCase().includes(query.toLowerCase())
          );
          setSuggestions(filtered.slice(0, 5));
        } else {
          setSuggestions([]);
        }
      } catch (err) {
        console.log(err);
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [query, showSuggestions]);

  
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    
    setShowSuggestions(value.trim() !== "");

    if (onSearch) onSearch(value, "recipe");
  };

  
  const handleSelect = (meal) => {
    setQuery(meal.strMeal);
    setSuggestions([]);
    setShowSuggestions(false);
    if (onSearch) onSearch(meal.strMeal, "recipe");
  };

  
  const handleSearch = () => {
    if (query.trim() !== "" && onSearch) onSearch(query, "recipe");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search recipes..."
          value={query}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

     
      {showSuggestions && suggestions.length > 0 && (
        <div className="suggestions-box">
          {suggestions.map((meal) => (
            <div
              key={meal.idMeal}
              className="suggestion-item"
              onClick={() => handleSelect(meal)}
            >
              {meal.strMeal}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;