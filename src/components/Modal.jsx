import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, removeModal, children = null }) => {
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
        removeModal({ uid: null });
      }}
    >
      {children}
    </div>,
    // eslint-disable-next-line comma-dangle
    target
  );
};

export default Modal;
