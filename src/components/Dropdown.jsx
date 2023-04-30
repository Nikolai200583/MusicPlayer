import React, {useState} from 'react';
  
  const Dropdown = ({ data }) => {
    return (
      <div className="filter__dropdown">
        {data.map((item) => (
          <div key={item} className="dropdown-item">
            {item}
          </div>
        ))}
      </div>
    );
  };

  export default Dropdown
