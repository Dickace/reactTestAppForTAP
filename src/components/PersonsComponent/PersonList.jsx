import React from 'react';
import PropTypes from 'prop-types';
import PersonItem from './PersonItem';
import './style.css';

const PersonList = ({ persons, data }) => (
  <ul>
    <li className="personGrid">
      <div className="column-icon" />
      <div className="column-name"><h4>Имя</h4></div>
      <div className="column-lastname"><h4>Фамилия</h4></div>
      <div className="column-buttons" />
    </li>
    {console.log(persons)}
    {persons.map(((item) => (
      <PersonItem key={item.id} person={item} data={data} />
    )))}
  </ul>
);

PersonList.defaultProps = {
  persons: [{}],
  data: 'none',
};

PersonList.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  })),
  data: PropTypes.func,
};

export default PersonList;
