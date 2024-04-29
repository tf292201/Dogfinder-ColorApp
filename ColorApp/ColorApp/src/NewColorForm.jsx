import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewColorForm({ onAddColor }) {
  const navigate = useNavigate();
  const [colorName, setColorName] = useState('');
  const [colorValue, setColorValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Call the onAddColor function with the new color
    onAddColor({ name: colorName, value: colorValue });
    // Redirect to colors index after submission
    navigate('/colors');
  }

  return (
    <div>
      <h1>Add New Color</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Color Name:
          <input
            type="text"
            name="colorName"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
          />
        </label>
        <label>
          Color Value:
          <input
            type="color"
            name="colorValue"
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewColorForm;