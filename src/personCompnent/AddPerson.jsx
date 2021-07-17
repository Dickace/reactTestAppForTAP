import React, { useState } from 'react';

function AddPerson() {
  // eslint-disable-next-line no-unused-vars
  const [person, setPerson] = useState('');

  function onAddPerson() {
  }
  return (
    <div>
      <div onClick={onAddPerson} aria-hidden="true" aria-label="Add" tabIndex="0" role="button" className="btn btn-add">Добавить сотрудника</div>
    </div>
  );
}

export default AddPerson;
