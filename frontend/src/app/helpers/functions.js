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

export function showPopup(message) {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  
  // Set the message
  popupMessage.textContent = message;
  
  // Display the pop-up
  popup.style.display = 'block';

  // Hide the pop-up after 3 seconds
  setTimeout(() => {
    popup.style.display = 'none';
  }, 2000);
}

export function generateSessionId(){
  return 'sess_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
};

export function checkOrCreateSessionId() {
  const sessionId = document.cookie.split('; ').find(row => row.startsWith('sessionId='))?.split('=')[1];
  if (!sessionId) {
    const newSessionId = generateSessionId();
    document.cookie = `sessionId=${newSessionId}; path=/; max-age=${60 * 60 * 24 * 7}`; // Set for 7 days
    return newSessionId;
  }
  return sessionId;
};

export const saveCartToBackend = (cart) => {
  const sessionId = checkOrCreateSessionId(); // Ensure sessionId is created

  console.log('Saving cart to backend:', cart); // Add this to see the cart contents

  fetch('http://localhost:3001/api/session/sync-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cart }),
    credentials: 'include',
  })
    .then(response => response.json())
    .then(data => {
      console.log('Response from backend:', data); // Log backend response
    })
    .catch(err => console.error('Error syncing cart:', err));
};

