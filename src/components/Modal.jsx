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
    target
  );
};

export default Modal;
