// ColorsIndex.js
import React from 'react';
import { Link } from 'react-router-dom';

function ColorsIndex({ colors }) {
  return (
    <div>
      <h1>All Available Colors</h1>
      <ul>
        {colors.map(color => (
          <li key={color.name}>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">Add a Color</Link>
    </div>
  );
}

export default ColorsIndex;
