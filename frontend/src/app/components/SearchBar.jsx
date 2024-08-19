import styles from "../styles/SearchBar.module.css"

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <input
        type="text"
        // value={query}
        // onChange={handleInputChange}
        placeholder="Search..."
        className={styles.searchbar}
      />
      <button onClick={() => setResults(mockSearch(query))} className={styles.button}>
        Search
      </button>
    </div>
  )
}