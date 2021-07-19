import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
const DeletePersonModal = ({
  showDeletePersonModal, setShowDeletePersonModal, refreshData, id, toastMe,
}) => {
  const closeDeletePersonModal = () => {
    setShowDeletePersonModal(false);
    refreshData();
  };
  const deletePersonRequest = () => {
    axios.delete(`http://localhost:3000/api/v1/person/${id.toString()}`).then((response) => {
      toastMe(response);
      closeDeletePersonModal();
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
      {showDeletePersonModal ? (
        <div aria-hidden="true" aria-label="close" className="background" onClick={closeDeletePersonModal}>
          <div aria-hidden="true" aria-label="close" className="modal-wrapper modal-delete" onClick={(event) => { event.stopPropagation(); }}>
            <div className="modal-header">
              Вы уверены, что хотите удалить сотрудинка?
            </div>
            <div className="modal-body">
              <div className="modal-btnWrap">
                <div aria-hidden="true" aria-label="close" className="btn btn-cancel" onClick={closeDeletePersonModal}>
                  Отмена
                </div>
                <div aria-hidden="true" aria-label="close" onClick={deletePersonRequest} className="btn btn-modal-delete">
                  Удалить
                </div>
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
  toastMe: 'none',
};

DeletePersonModal.propTypes = {
  showDeletePersonModal: PropTypes.bool,
  setShowDeletePersonModal: PropTypes.func,
  refreshData: PropTypes.func,
  id: PropTypes.number,
  toastMe: PropTypes.func,
};

export default DeletePersonModal;
