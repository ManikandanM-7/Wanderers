import React from 'react';
import './FilterBar.css';

function FilterBar({ selectedCategory, onCategoryChange }) {
  const categories = ['All', 'Beach', 'Mountain', 'City', 'Historical', 'Adventure'];
  
  const categoryIcons = {
    All: '🌍',
    Beach: '🏖',
    Mountain: '⛰',
    City: '🏙',
    Historical: '🏛',
    Adventure: '🌿'
  };

  return (
    <div className="filter-bar">
      <h3>Filter by Category:</h3>
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {categoryIcons[category]} {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
