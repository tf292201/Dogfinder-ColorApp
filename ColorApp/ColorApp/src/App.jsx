// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ColorsIndex from './ColorsIndex';
import ColorDetail from './ColorDetail';
import NewColorForm from './NewColorForm';

function App() {
  const [colors, setColors] = useState([
    { name: 'red', value: 'rgb(255, 0, 0)' },
    { name: 'green', value: 'rgb(0, 255, 0)' },
    { name: 'blue', value: 'rgb(0, 0, 255)' }
  ]);

  function handleAddColor(newColor) {
    setColors(prevColors => [...prevColors, newColor]);
  }

  return (
    <Router>
      <Routes>
        <Route path="/colors" element={<ColorsIndex colors={colors} onAddColor={handleAddColor} />} />
        <Route path="/colors/:color" element={<ColorDetail colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm onAddColor={handleAddColor} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </Router>
  );
}

export default App;
