import React from 'react';
import PropTypes from 'prop-types';
import PersonItem from './PersonItem';
import './style.css';

const PersonList = ({ persons, data, toastMe }) => (
  <ul className="personList">
    <li className="personGrid darkBg">
      <div className="column-icon pd-5" />
      <div className="column-name pd-5"><h3>Имя</h3></div>
      <div className="column-lastname pd-5"><h3>Фамилия</h3></div>
      <div className="column-buttons pd-5" />
    </li>
    {persons.map(((item) => (
      <PersonItem key={item.id} person={item} data={data} toastMe={toastMe} />
    )))}
  </ul>
);

PersonList.defaultProps = {
  persons: [{}],
  data: 'none',
  toastMe: 'none',
};

PersonList.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  })),
  data: PropTypes.func,
  toastMe: PropTypes.func,
};

export default PersonList;
