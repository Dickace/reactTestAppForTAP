import React from 'react';
import PropTypes from 'prop-types';
import UserLogo from '../images/user.svg';
import EditIcon from '../images/pencil.svg';
import DeleteIcon from '../images/cancel.svg';

const PersonItem = ({ person }) => {
  function onEditPerson() {
    console.log(person.id.toString());
  }
  function onDeletePerson() {
    console.log(person.id.toString());
  }

  return (
    <li className="personGrid">
      <div className="column-icon">
        <img src={UserLogo} alt="none" />
      </div>
      <div className="column-name">{person.firstName}</div>
      <div className="column-lastname">{person.lastName}</div>
      <div className="column-buttons">
        <div onClick={onEditPerson} aria-hidden="true" aria-label="Edit" tabIndex="-1" role="button" className="btn btn-edit">
          <img src={EditIcon} alt="none" />
        </div>
        <div onClick={onDeletePerson} aria-hidden="true" aria-label="Delete" tabIndex="0" role="button" className="btn btn-delete">
          <img src={DeleteIcon} alt="none" />
        </div>
      </div>
    </li>
  );
};

PersonItem.defaultProps = {
  person: { id: 0, firstName: 'none', lastName: 'none' },
};

PersonItem.propTypes = {
  person: PropTypes.objectOf(PropTypes.number, PropTypes.string, PropTypes.string),
};

export default PersonItem;
