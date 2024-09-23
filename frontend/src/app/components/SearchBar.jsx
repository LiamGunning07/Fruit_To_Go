import { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalStateContext";
import { showPopup } from "../helpers/functions";
import styles from "../styles/SearchBar.module.css";
import Fuse from "fuse.js";

export default function SearchBar() {
  const { query, setQuery, results, setResults, fruits, setFruits } = useGlobalState();
  const [fuse, setFuse] = useState(null);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Fetch all items when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/fruits`); // Endpoint to fetch all items
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setFruits(data); // Store data in global state

        // Initialize Fuse.js with the fetched data
        const options = {
          keys: ['name', 'description'], // Fields to search in
          threshold: 0.3, // Adjust for sensitivity
        };
        const fuseInstance = new Fuse(data, options);
        setFuse(fuseInstance);
      } catch (error) {
        console.error("Error fetching items:", error);
        showPopup("An error occurred while fetching items.");
      }
    };

    fetchData();
  }, [setFruits]);

  // Debounce the search input to optimize performance
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // Delay in milliseconds

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  // Perform Fuse.js search when debouncedQuery changes
  useEffect(() => {
    if (fuse) {
      if (debouncedQuery.trim() === '') {
        // If query is empty, clear results
        setResults([]);
      } else {
        const fuseResults = fuse.search(debouncedQuery).map(result => result.item);
        setResults(fuseResults);
      }
    }
  }, [debouncedQuery, fuse]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Handle 'Search' button click
  const handleSearchClick = async () => {
    console.log("Performing full search for:", query);

    try {
      const response = await fetch(`http://localhost:3001/api/search?q=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.length === 0) {
        showPopup("No items found for your search.");
      }
      setResults(data);
    } catch (error) {
      console.error("Error performing full search:", error);
      showPopup("An error occurred while performing full search.");
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query || ''}
        onChange={handleInputChange}
        placeholder="Search..."
        className={styles.searchbar}
      />
    </div>
  );
}
