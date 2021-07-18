import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserLogo from '../../images/user.svg';
import EditIcon from '../../images/pencil.svg';
import DeleteIcon from '../../images/cancel.svg';
import './style.css';
import DeletePersonModal from '../ModalWidnows/DeletePersonModal';
import EditPersonModal from '../ModalWidnows/EditPersonModal';

const PersonItem = ({ person, data }) => {
  const [showDeletePersonModal, setShowDeletePersonModal] = useState(false);
  const [showEditPersonModal, setShowEditPersonModal] = useState(false);
  const openDeletePersonModal = () => {
    setShowDeletePersonModal((prev) => !prev);
  };
  const openEditPersonModal = () => {
    setShowEditPersonModal((prev) => !prev);
  };

  return (
    <li className="personGrid">
      <div className="column-icon">
        <img src={UserLogo} alt="none" />
      </div>
      <div className="column-name">{person.firstName}</div>
      <div className="column-lastname">{person.lastName}</div>
      <div className="column-buttons">
        <div onClick={openEditPersonModal} aria-hidden="true" aria-label="Edit" tabIndex="-1" role="button" className="btn btn-edit">
          <img src={EditIcon} alt="none" />
        </div>
        <div onClick={openDeletePersonModal} aria-hidden="true" aria-label="Delete" tabIndex="0" role="button" className="btn btn-delete">
          <img src={DeleteIcon} alt="none" />
        </div>
      </div>
      <DeletePersonModal
        showDeletePersonModal={showDeletePersonModal}
        setShowDeletePersonModal={setShowDeletePersonModal}
        refreshData={data}
        id={person.id}
      />
      <EditPersonModal
        showEditPersonModal={showEditPersonModal}
        setShowEditPersonModal={setShowEditPersonModal}
        refreshData={data}
        person={person}
      />
    </li>
  );
};

PersonItem.defaultProps = {
  person: { id: 0, firstName: 'none', lastName: 'none' },
  data: 'none',
};

PersonItem.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
  data: PropTypes.func,
};

export default PersonItem;
