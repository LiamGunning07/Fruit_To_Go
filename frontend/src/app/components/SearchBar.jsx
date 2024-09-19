import { useGlobalState } from "../context/GlobalStateContext";
import { showPopup } from "../helpers/functions";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar() {
const {query, setQuery, results, setResults, setFruits} = useGlobalState()

const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = async () => {
    console.log("Searching for:", query);

    try {
      const response = await fetch(`http://localhost:3001/api/search?q=${query}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.length === 0) {
        // If no results found, show the popup with a message
        showPopup("No items found for your search.");
      } else {
        setResults(data);
        setFruits(data);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setResults([]); // Clear results on error
      showPopup("An error occurred while fetching search results.");
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
      <button className={styles.button} onClick={handleSearchClick}>
        Search
      </button>
      <div className={styles.results}>
        <ul >
        {results && results.length > 0 ? (
            <span> Results:{results.length} </span>
          ) : (
            <span> Search for an Item </span>
          )}
        </ul>
      </div>
    </div>
  );
}
