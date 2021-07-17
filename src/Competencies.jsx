import React, { useEffect, useState } from 'react';
import './styles/Competencies.css';
import './styles/adaptive.css';
import axios from 'axios';
import PersonList from './personCompnent/PersonList';
import AddPerson from './personCompnent/AddPerson';

function Competencies() {
  const [personData, setPersonData] = useState([]);

  function data() {
    axios.get('http://localhost:3000/api/v1/persons').then((response) => {
      if (response.data) {
        setPersonData(response.data);
      }
    });
  }
  useEffect(() => {
    data();
  }, []);

  return (
    <section className="section-pd">
      <div className="container person-container">
        <h1>Список сотрудников</h1>
        <PersonList persons={personData} />
        <AddPerson />
      </div>
    </section>
  );
}

export default Competencies;
