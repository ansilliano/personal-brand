import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, removeModal }) => {
  const style = {
    display: isOpen ? 'block' : 'none',
  };
  const target = document.getElementById('modal');
  return createPortal(
    <div
      aria-hidden='true'
      role='button'
      style={style}
      className='modal'
      onClick={() => {
        console.log('cerrar');
        removeModal();
      }}
    />,
<<<<<<< HEAD
    // eslint-disable-next-line comma-dangle
=======
>>>>>>> 50762cffc0a73816d14d365e8161383b53aac47e
    target
  );
};

export default Modal;
