import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './style.css';

import PersonList from '../PersonsComponent/PersonList';
import AddPerson from '../PersonsComponent/AddPerson';

function Competitions() {
  const [personData, setPersonData] = useState([]);

  const data = () => {
    axios.get('http://localhost:3000/api/v1/persons').then((response) => {
      if (response.data) {
        setPersonData(response.data);
      }
    });
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <section className="section-pd">
      <div className="container person-container">
        <h1>Список сотрудников</h1>
        <PersonList persons={personData} data={data} />
        <AddPerson data={data} />
      </div>
    </section>
  );
}

export default Competitions;
