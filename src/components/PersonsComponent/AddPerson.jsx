import React, { useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import AddPersonModal from '../ModalWidnows/AddPersonModal';

const AddPerson = ({ data, toastMe }) => {
  const [showAddPersonModal, setShowAddPersonModal] = useState(false);

  const openAddPersonModal = () => {
    setShowAddPersonModal((prev) => !prev);
  };
  return (
    <>
      <div onClick={openAddPersonModal} aria-hidden="true" aria-label="Add" tabIndex="0" role="button" className="btn btn-add">
        Добавить сотрудника
      </div>

      <AddPersonModal
        showAddPersonModal={showAddPersonModal}
        setShowAddPersonModal={setShowAddPersonModal}
        refreshData={data}
        toastMe={toastMe}
      />
    </>
  );
};

AddPerson.defaultProps = {
  data: 'none',
  toastMe: 'none',
};

AddPerson.propTypes = {
  data: PropTypes.func,
  toastMe: PropTypes.func,
};
export default AddPerson;
