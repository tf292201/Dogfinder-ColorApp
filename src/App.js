import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DogList from './components/DogList';
import DogDetail from './components/DogDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dogs" element={<DogList />} />
        <Route path="/dogs/:name" element={<DogDetail />} />
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </Router>
  );
}

export default App;
