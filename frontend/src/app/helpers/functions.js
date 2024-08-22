export async function fetchAllFruits(setFruits) {
  try {
    const response = await fetch('http://localhost:3001/api/fruits');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setFruits(data);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}


