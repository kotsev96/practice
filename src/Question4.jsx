import React, { useState } from "react";

/*
Requirements:

1. Display a list of products with a name and price.
2. Add functionality to add a product to the cart.
3. Show a list of items in the cart with their quantities.
4. Allow users to remove items from the cart.
5. Display the total price of all items in the cart.
*/

const Question4 = () => {
    const products = [
      { id: 1, name: "Apple", price: 1 },
      { id: 2, name: "Banana", price: 2 },
      { id: 3, name: "Cherry", price: 3 },
    ];
  
    const [cart, setCart] = useState([]);
  
    // Add your logic here
  
    return (
      <div>
        <h1>Shopping Cart</h1>
        <h2>Products</h2>
        <ul>
          {/* Render product list here */}
        </ul>
        <h2>Cart</h2>
        <ul>
          {/* Render cart items here */}
        </ul>
        <h3>Total: $0</h3>
      </div>
    );
  };
  
  export default Question4;