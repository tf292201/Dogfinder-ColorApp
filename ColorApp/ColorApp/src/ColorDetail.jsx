// ColorDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ColorDetail({ colors }) {
  const { color } = useParams();
  const selectedColor = colors.find(c => c.name === color);

  if (!selectedColor) {
    return <div>Color not found</div>;
  }

  return (
    <div>
      <h1>{selectedColor.name}</h1>
      <div style={{ width: '100px', height: '100px', backgroundColor: selectedColor.value }}></div>
    </div>
  );
}

export default ColorDetail;
