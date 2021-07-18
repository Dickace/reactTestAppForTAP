import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
const AddPersonModal = ({ showAddPersonModal, setShowAddPersonModal, refreshData }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const closeAddPersonModal = () => {
    setFirstName('');
    setLastName('');
    setShowAddPersonModal(false);
    refreshData();
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const addPersonRequest = () => {
    axios.post('http://localhost:3000/api/v1/person', {
      firstName,
      lastName,
    }).then((response) => {
      console.log(response.status.toString());
      closeAddPersonModal();
    }).catch((error) => {
      console.log(error.response.data);
    });
  };
  return (
    <>
      {showAddPersonModal ? (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div className="background" onClick={closeAddPersonModal}>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className="modal-wrapper" onClick={(event) => { event.stopPropagation(); }}>
            <div className="modal-header">
              Создание сотрудника
            </div>
            {/* eslint-disable-next-line max-len */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className="back-to-parent" onClick={closeAddPersonModal}>
              Назад к списку
            </div>
            <input value={firstName} onChange={handleFirstNameChange} className="modal-input" type="text" placeholder="Введите имя сотрудника" />
            <input value={lastName} onChange={handleLastNameChange} className="modal-input" type="text" placeholder="Введите фамилию сотрудника" />
            {/* eslint-disable-next-line max-len */}
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
            <div onClick={addPersonRequest} className="btn btn-save">
              Сохранить
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
AddPersonModal.defaultProps = {
  showAddPersonModal: false,
  setShowAddPersonModal: 'none',
  refreshData: 'none',
};

AddPersonModal.propTypes = {
  showAddPersonModal: PropTypes.bool,
  setShowAddPersonModal: PropTypes.func,
  refreshData: PropTypes.func,
};

export default AddPersonModal;
