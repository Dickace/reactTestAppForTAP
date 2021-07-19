import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './style.css';

import PersonList from '../PersonsComponent/PersonList';
import AddPerson from '../PersonsComponent/AddPerson';
import Toast from '../Toast/Toast';

function Competitions() {
  const [personData, setPersonData] = useState([]);
  const [toastList, setToastList] = useState([]);

  const toastMe = (response) => {
    let toastProps = null;
    const array = new Uint8Array(1);
    const crypto = window.crypto || window.msCrypto;
    const id = crypto.getRandomValues(array)[0];
    switch (response.status) {
      case 200:
        toastProps = {
          id,
          title: 'Удачно',
          description: 'Успешное выполнение запроса',
          backgroundColor: 'rgba(0,210,0,1)',
        };
        break;
      case 201:
        toastProps = {
          id,
          title: 'Удачно',
          description: 'Сотрудник успешно добавлен',
          backgroundColor: 'rgba(0,210,0,1)',
        };
        break;
      case 400:
        toastProps = {
          id,
          title: 'Ошибка',
          description: 'Неверный запрос',
          backgroundColor: 'rgba(255,49,42,0.6)',
        };
        break;
      case 404:
        toastProps = {
          id,
          title: 'Ошибка',
          description: 'Cущность не найдена в системе',
          backgroundColor: 'rgba(255,49,42,0.6)',
        };
        break;
      case 500:
        toastProps = {
          id,
          title: 'Ошибка',
          description: 'Cерверная ошибка',
          backgroundColor: 'rgba(255,49,42,0.6)',
        };
        break;

      default:
        setToastList([]);
    }
    setToastList([...toastList, toastProps]);
  };

  const data = () => {
    axios.get('http://localhost:3000/api/v1/persons').then((response) => {
      if (response.data) {
        if (JSON.stringify(response.data) !== JSON.stringify(personData)) {
          setPersonData(response.data);
          toastMe(response);
        }
      }
    }).catch((error) => {
      if (error.response) {
        toastMe(error.response);
      } else if (error.message === 'Network Error') {
        toastMe({ status: 500 });
      }
    });
  };

  useEffect(() => {
    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="section-pd">
      <div className="container person-container">
        <h1>Список сотрудников</h1>
        <PersonList persons={personData} data={data} toastMe={toastMe} />
        <AddPerson data={data} toastMe={toastMe} />
      </div>
      <Toast
        toastList={toastList}
      />
    </section>
  );
}

export default Competitions;
