import styles from "../styles/SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({setQuery, setResults, query, results}) {


const handleInputChange = (event) => {
    setQuery(event.target.value);
    console.log("query", query)
  };

  const handleSearchClick = async () => {
    console.log("Searching for:", query);

    try {
        const response = await fetch(`http://localhost:3001/api/search?q=${query}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
       
        const data = await response.json();
        setResults(data);
    } catch (error) {
        console.error("Error fetching search results:", error);
        setResults([]);  // Clear results on error
    }
};


  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className={styles.searchbar}
      />
      <button onClick={handleSearchClick}>
        Search
      </button>
      <ul>
      {results && results.length > 0 ? (
          results.map((result, index) => (
            <li key={index}>{result.name}</li>
          ))
        ) : (
          <span> Search for an Item </span>
        )}
      </ul>
    </div>
  );
}
