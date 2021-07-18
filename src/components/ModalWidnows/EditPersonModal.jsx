import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
const EditPersonModal = ({
  showEditPersonModal, setShowEditPersonModal, refreshData, person,
}) => {
  const [firstName, setFirstName] = useState(person.firstName);
  const [lastName, setLastName] = useState(person.lastName);
  const closeEditPersonModal = () => {
    setShowEditPersonModal(false);
    refreshData();
  };
  const editPersonRequest = () => {
    axios.put(`http://localhost:3000/api/v1/person/${person.id.toString()}`, {
      firstName,
      lastName,
      id: 'null',
    }).then((response) => {
      console.log(response.status.toString());
      closeEditPersonModal();
    }).catch((error) => {
      console.log(error.response.data);
    });
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  return (
    <>
      {showEditPersonModal ? (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div className="background" onClick={closeEditPersonModal}>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className="modal-wrapper" onClick={(event) => { event.stopPropagation(); }}>
            <div className="modal-header">
              Вы уверены, что хотите удалить сотрудинка?
            </div>
            {/* eslint-disable-next-line max-len */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className="back-to-parent" onClick={closeEditPersonModal}>
              Назад к списку
            </div>
            <input value={firstName} onChange={handleFirstNameChange} className="modal-input" type="text" placeholder="Введите имя сотрудника" />
            <input value={lastName} onChange={handleLastNameChange} className="modal-input" type="text" placeholder="Введите фамилию сотрудника" />
            {/* eslint-disable-next-line max-len */}
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
            <div onClick={editPersonRequest} className="btn btn-save">
              Сохранить
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
EditPersonModal.defaultProps = {
  showEditPersonModal: 'none',
  setShowEditPersonModal: 'none',
  refreshData: 'none',
  person: { id: 0, firstName: 'none', lastName: 'none' },
};

EditPersonModal.propTypes = {
  showEditPersonModal: PropTypes.func,
  setShowEditPersonModal: PropTypes.func,
  refreshData: PropTypes.func,
  person: PropTypes.objectOf(PropTypes.number, PropTypes.string, PropTypes.string),
};

export default EditPersonModal;
