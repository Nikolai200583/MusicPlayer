import React, {useState} from 'react';

const CategoryButton = ({ category, isActive, onClick }) => {
    return (
      <button
        className={`filter__button ${isActive ? "active__button" : ""}`}
        onClick={onClick}
      >
        {category}
      </button>
    );
  };
  export default CategoryButton