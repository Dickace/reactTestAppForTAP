import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserLogo from '../../images/user.svg';
import EditIcon from '../../images/pencil.svg';
import DeleteIcon from '../../images/cancel.svg';
import './style.css';
import DeletePersonModal from '../ModalWidnows/DeletePersonModal';
import EditPersonModal from '../ModalWidnows/EditPersonModal';

const PersonItem = ({ person, data, toastMe }) => {
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
      <div className="column-icon pd-5">
        <img src={UserLogo} alt="none" />
      </div>
      <div className="column-name pd-5">{person.firstName}</div>
      <div className="column-lastname pd-5">{person.lastName}</div>
      <div className="column-buttons pd-5">
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
        toastMe={toastMe}
      />
      <EditPersonModal
        showEditPersonModal={showEditPersonModal}
        setShowEditPersonModal={setShowEditPersonModal}
        refreshData={data}
        person={person}
        toastMe={toastMe}
      />
    </li>
  );
};

PersonItem.defaultProps = {
  person: { id: 0, firstName: 'none', lastName: 'none' },
  data: 'none',
  toastMe: 'none',
};

PersonItem.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
  data: PropTypes.func,
  toastMe: PropTypes.func,
};

export default PersonItem;
