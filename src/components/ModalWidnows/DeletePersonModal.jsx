import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
const DeletePersonModal = ({
  showDeletePersonModal, setShowDeletePersonModal, refreshData, id,
}) => {
  const closeDeletePersonModal = () => {
    setShowDeletePersonModal(false);
    refreshData();
  };
  const deletePersonRequest = () => {
    axios.delete(`http://localhost:3000/api/v1/person/${id.toString()}`).then((response) => {
      console.log(response.status.toString());
      closeDeletePersonModal();
    }).catch((error) => {
      console.log(error.response.data);
    });
  };
  return (
    <>
      {showDeletePersonModal ? (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div className="background" onClick={closeDeletePersonModal}>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className="modal-wrapper modal-delete" onClick={(event) => { event.stopPropagation(); }}>
            <div className="modal-header">
              Вы уверены, что хотите удалить сотрудинка?
            </div>
            <div className="modal-btnWrap">
              {/* eslint-disable-next-line max-len */}
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <div className="btn btn-cancel" onClick={closeDeletePersonModal}>
                Отмена
              </div>
              {/* eslint-disable-next-line max-len */}
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
              <div onClick={deletePersonRequest} className="btn btn-modal-delete">
                Удалить
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
DeletePersonModal.defaultProps = {
  showDeletePersonModal: 'none',
  setShowDeletePersonModal: 'none',
  refreshData: 'none',
  id: 'undefined',
};

DeletePersonModal.propTypes = {
  showDeletePersonModal: PropTypes.func,
  setShowDeletePersonModal: PropTypes.func,
  refreshData: PropTypes.func,
  id: PropTypes.number,
};

export default DeletePersonModal;
