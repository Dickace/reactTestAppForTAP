import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [personData, setPersonData] = useState('');

  function data() {
    axios.get('http://localhost:3000/api/v1/persons').then((response) => {
      if (response.data) {
        setPersonData(response.data);
        console.log(personData);
      }
    });
  }
  useEffect(() => {
    data();
  }, []);

  return (
    <div className="App">
      {personData ? (
        <code>
          {personData.map((value) => (
            <div>
              <code>{value.id}</code>
              <code>{value.firstName}</code>
              <code>{value.lastName}</code>
            </div>
          ))}
        </code>
      ) : <p>No data</p>}
    </div>
  );
}

export default App;
