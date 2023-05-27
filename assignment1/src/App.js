import React from 'react';
import './App.css';
import  { useState } from 'react';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
  };

  const handleSelectSubcategory = (subcategoryId) => {
    setSelectedSubcategory(subcategoryId);
  };

  const categories = [
    { id: 1, name: 'Furniture' },
    { id: 2, name: 'Automobiles' },
    { id: 3, name: 'Game Accessories' },
  ];

  const subcategories = [
    { id: 1, name: 'Table', categoryId: 1 },
    { id: 2, name: 'Chairs', categoryId: 1 },
    { id: 3, name: 'Cars', categoryId: 2 },
    { id: 4, name: 'Bikes', categoryId: 2 },
    { id: 5, name: 'Keyboard', categoryId: 3 },
  ];

  const products = [
    { id: 1, name: 'Table 1', description: 'Just bought from Ikea', price: 50, subcategoryId: 1 },
    { id: 2, name: 'Table 2', description: 'I am shifting from halifax need to sell my talbe', price: 10, subcategoryId: 1 },
    { id: 3, name: 'Table 3', description: 'Just giving away stuff', price: 30, subcategoryId: 1 },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 40, subcategoryId: 4 },
    { id: 5, name: 'Product 5', description: 'Description 5', price: 50, subcategoryId: 5 },
  ];
  // Filter subcategories and products based on the selected category and subcategory
  const filteredSubcategories = subcategories.filter(
    (subcategory) => subcategory.categoryId === selectedCategory
  );

  const filteredProducts = products.filter(
    (product) => product.subcategoryId === selectedSubcategory
  );

  return (
    <div className="App">
      <ul className='navbar'>
          <li><a href = "#">Home</a></li>
          <li><a href = "#">About</a></li>
          <li><a href = "#">Contact</a></li>
        </ul>
      <header className="App-header">
        <h1>Welcome to the Marketplace</h1>
        <p>Discover unique products from around the world.</p>
      </header>
      <main className="App-content">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button onClick={() => handleSelectCategory(category.id)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>

      {selectedCategory && (
      <>
          <h2>Subcategories</h2>
          
          <ul>
            {filteredSubcategories.map((subcategory) => (
              <li key={subcategory.id}>
                <button onClick={() => handleSelectSubcategory(subcategory.id)}>
                  {subcategory.name}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
      {selectedCategory && ( 
        <>
        <section className="Product-list">
          {filteredProducts.map((product) => (
            <div className="Product-card">
              <img
                className="Product-image"
                src="./images/pexels-scott-webb-2451264 (1).jpg"
                alt=""
              />
              <div className="Product-details">
                
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: $<strong>{product.price}</strong></p>
                <button className="Product-button">View Details</button>
              </div>
            
            </div>
            ))}
        </section>
        </>
        )}
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 Your Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
