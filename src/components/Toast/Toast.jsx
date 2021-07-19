import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CloseBtn from '../../images/cancel.svg';

import './style.css';

const Toast = ({ toastList }) => {
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  const onDeleteNotification = (id) => {
    const itemId = list.findIndex((el) => el.id === id);
    const toastId = toastList.findIndex((el) => el.id === id);
    list.splice(itemId, 1);
    toastList.splice(toastId, 1);
    setList([...list]);
  };

  useEffect(() => {
    const int = setInterval(() => {
      if (toastList.length && list.length) {
        onDeleteNotification(toastList[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(int);
    };
  });

  return (
    <>
      <div className="notification-box notification-pos">
        {list.map((item) => (
          <div key={item.id} className="notification notification-pos" style={{ backgroundColor: item.backgroundColor }}>
            <div className="notification-text">
              <p className="notification-title">{item.title}</p>
              <p className="notification-description">{item.description}</p>
            </div>
            <div aria-hidden="true" aria-label="close" className="notification-closeIcon" onClick={() => onDeleteNotification(item.id)}>
              <img src={CloseBtn} alt="none" />
            </div>
          </div>
        ))}

      </div>
    </>

  );
};

Toast.propTypes = {
  toastList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    backgroundColor: PropTypes.string,
  })).isRequired,
};

export default Toast;
