import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import axios from 'axios';
import API_URL from '../../ApiUrls.json';

const EditPersonModal = ({
  showEditPersonModal, setShowEditPersonModal, refreshData, person, toastMe,
}) => {
  const [firstName, setFirstName] = useState(person.firstName);
  const [lastName, setLastName] = useState(person.lastName);
  const closeEditPersonModal = () => {
    setShowEditPersonModal(false);
    refreshData();
  };
  const editPersonRequest = () => {
    axios.put(`${API_URL}/api/v1/person/${person.id.toString()}`, {
      firstName,
      lastName,
      id: 'null',
    }).then((response) => {
      toastMe(response);
      closeEditPersonModal();
    }).catch((error) => {
      if (error.response) {
        toastMe(error.response);
      } else if (error.message === 'Network Error') {
        toastMe({ status: 500 });
      }
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
        <div aria-hidden="true" aria-label="close" className="background" onClick={closeEditPersonModal}>
          <div aria-hidden="true" aria-label="stop" className="modal-wrapper" onClick={(event) => { event.stopPropagation(); }}>
            <div className="modal-header">
              Вы уверены, что хотите удалить сотрудинка?
            </div>
            <div className="modal-body">
              <div aria-hidden="true" aria-label="close" className="back-to-parent" onClick={closeEditPersonModal}>
                Назад к списку
              </div>
              <input value={firstName} onChange={handleFirstNameChange} className="modal-input" type="text" placeholder="Введите имя сотрудника" />
              <input value={lastName} onChange={handleLastNameChange} className="modal-input" type="text" placeholder="Введите фамилию сотрудника" />
              <div aria-hidden="true" aria-label="save" onClick={editPersonRequest} className="btn btn-save">
                Сохранить
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
EditPersonModal.defaultProps = {
  showEditPersonModal: false,
  setShowEditPersonModal: 'none',
  refreshData: 'none',
  person: { id: 0, firstName: 'none', lastName: 'none' },
  toastMe: 'none',
};

EditPersonModal.propTypes = {
  showEditPersonModal: PropTypes.bool,
  setShowEditPersonModal: PropTypes.func,
  refreshData: PropTypes.func,
  person: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
  toastMe: PropTypes.func,
};

export default EditPersonModal;
