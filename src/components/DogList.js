import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DogList() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function fetchDogs() {
      try {
        const response = await axios.get('http://localhost:5001/dogs');
        setDogs(response.data);
      } catch (error) {
        console.error('Error fetching dog data:', error);
      }
    }
    fetchDogs();
  }, []);

  return (
    <div>
      <h1>Meet our dogs:</h1>
      <ul>
        {dogs.map(dog => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;
