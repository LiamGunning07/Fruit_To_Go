export async function fetchAllFruits(setFruits) {
  try {
    const response = await fetch('http://localhost:3001/api/fruits');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // console.log("Raw Fruit Fetch Data", data);
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
    // console.log("ASC fruit data", data);
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
    // console.log("DESC fruit Data", data);
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
  // Retrieve sessionId from cookie, or create a new one if not found
  const sessionId = document.cookie.split('; ').find(row => row.startsWith('sessionId='))?.split('=')[1];
  if (!sessionId) {
    const newSessionId = generateSessionId();
    document.cookie = `sessionId=${newSessionId}; path=/; max-age=${60 * 60 * 24 * 1}`; // 1 day expiry
    return newSessionId;
  }
  return sessionId;
}
export const saveCartToBackend = (cart) => {
  const sessionId = checkOrCreateSessionId(); // Ensure sessionId is created

  console.log('Saving cart to backend:', cart); // Add this to see the cart contents

  fetch('http://localhost:3001/api/session/sync-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sessionId, cart }), // Send sessionId along with cart
    credentials: 'include',
  })
    .then(response => response.json())
    .then(data => {
      // console.log('Response from backend:', data); // Log backend response
    })
    .catch(err => console.error('Error syncing cart:', err));
};
export const loadCart = async (setCart) => {
  try {
    const response = await fetch('http://localhost:3001/api/session/load-cart', {
      method: 'GET',
      credentials: 'include',  // Include credentials to send cookies
    });
    const data = await response.json();
    setCart(data.cart); // Assuming the cart is stored in the global state
  } catch (error) {
    console.error('Error loading cart:', error);
  }
};
export const selectCard = async (product_id, fruits, setSelectedCard, setFruits) => {
  console.log("Product ID:", product_id);

  // Find the selected product
  const selectedProduct = fruits.find(fruit => fruit.id == product_id);
  
  if (selectedProduct) {
    // Mark the selected product with `isSelected: true`
    const updatedFruits = fruits.map(fruit => 
      fruit.id === product_id
        ? { ...fruit, isSelected: true }
        : { ...fruit, isSelected: false }
    );

    // First, update the fruits list
    setFruits(updatedFruits);

    // Delay updating selectedCard to allow time for fruits state to update
    
      setSelectedCard(selectedProduct);  // Update the selected card after a short delay
    // Adjust the timeout duration as needed (300ms here)
  } else {
    console.log("Product not found with ID:", product_id);
  }
};
// cartHelpers.js
// helpers/functions.js
export const addToCart = (e, product, cart, setCart, saveCartToBackend) => {
  e.stopPropagation();

  // Destructure only the fields that are necessary
  const { product_id, name, price, quantityPerUnit } = product;

  const existingItem = cart.find(item => item.product_id === product_id);

  let updatedCart;
  if (existingItem) {
    updatedCart = cart.map(item =>
      item.product_id === product_id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    updatedCart = [...cart, { product_id, name, price, quantity: 1, quantityPerUnit }];
  }

  // Update cart state and then sync to backend after the state has been updated
  setCart(updatedCart);
  saveCartToBackend(updatedCart); // Call after updating the cart
};





