export async function fetchAllFruits(setFruits) {
  try {
    const response = await fetch('http://localhost:3001/api/fruits');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Raw Fruit Fetch Data", data);
    setFruits(data);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

export async function fetchAllFruitsAscending(setFruits) {
  try {
    const response = await fetch('http://localhost:3001/api/fruits/price/asc');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("ASC fruit data", data);
    setFruits(data);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

export async function fetchAllFruitsDescending(setFruits) {
  try {
    const response = await fetch('http://localhost:3001/api/fruits/price/desc');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("DESC fruit Data", data);
    setFruits(data);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}
