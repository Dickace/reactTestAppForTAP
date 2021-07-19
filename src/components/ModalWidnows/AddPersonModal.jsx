import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import axios from 'axios';

const AddPersonModal = ({
  showAddPersonModal, setShowAddPersonModal, refreshData, toastMe,
}) => {
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
      toastMe(response);
      closeAddPersonModal();
    }).catch((error) => {
      if (error.response) {
        toastMe(error.response);
      } else if (error.message === 'Network Error') {
        toastMe({ status: 500 });
      }
    });
  };
  return (
    <>
      {showAddPersonModal ? (
        <div className="background" aria-hidden="true" aria-label="close" onClick={closeAddPersonModal}>
          <div aria-hidden="true" aria-label="stopPang" className="modal-wrapper" onClick={(event) => { event.stopPropagation(); }}>
            <div className="modal-header">
              Создание сотрудника
            </div>
            <div className="modal-body">
              <div className="back-to-parent" aria-hidden="true" aria-label="close" onClick={closeAddPersonModal}>
                Назад к списку
              </div>
              <input value={firstName} onChange={handleFirstNameChange} className="modal-input" type="text" placeholder="Введите имя сотрудника" required />
              <input value={lastName} onChange={handleLastNameChange} className="modal-input" type="text" placeholder="Введите фамилию сотрудника" required />
              <div onClick={addPersonRequest} aria-hidden="true" aria-label="save" className="btn btn-save">
                Сохранить
              </div>
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
  toastMe: 'none',
};

AddPersonModal.propTypes = {
  showAddPersonModal: PropTypes.bool,
  setShowAddPersonModal: PropTypes.func,
  refreshData: PropTypes.func,
  toastMe: PropTypes.func,
};

export default AddPersonModal;
