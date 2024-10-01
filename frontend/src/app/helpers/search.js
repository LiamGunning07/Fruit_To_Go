const handleInputChange = (e, setQuery) => {
  setQuery(e.target.value);
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

module.exports = { handleInputChange}