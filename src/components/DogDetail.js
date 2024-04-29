import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DogDetail() {
  const { name } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    async function fetchDog() {
      try {
        const response = await axios.get(`http://localhost:5001/dogs?name=${name}`);
        if (response.data.length === 0) {
    
          setDog(null);
        } else {
          setDog(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching dog data:', error);
      }
    }
    fetchDog();
  }, [name]);

  if (!dog) {
    return <div>Dog not found!</div>;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={`/images/${dog.src}.jpg`} alt={dog.name} />
      <h2>{dog.age} years old</h2>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetail;
