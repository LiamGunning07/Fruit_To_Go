import { useGlobalState } from "../Context/GlobalStateContext";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar() {
const {query, setQuery, results, setResults} = useGlobalState()

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
        setResults();  // Clear results on error
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
