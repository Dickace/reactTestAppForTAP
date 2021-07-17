import React from 'react';
import PropTypes from 'prop-types';
import PersonItem from './PersonItem';

const PersonList = ({ persons }) => (
  <ul>
    <li className="personGrid">
      <div className="column-icon" />
      <div className="column-name"><h4>Имя</h4></div>
      <div className="column-lastname"><h4>Фамилия</h4></div>
      <div className="column-buttons" />
    </li>
    {console.log(persons)}
    {persons.map(((item) => (
      <PersonItem person={item} />
    )))}
  </ul>
);

PersonList.defaultProps = {
  persons: [{}],
};

PersonList.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.number,
    PropTypes.string,
    PropTypes.string,
  )),
};

export default PersonList;
