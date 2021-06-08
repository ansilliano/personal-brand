import React, { useState } from 'react';
import ModalImg from '../ModalImg';

const CardDaily = ({ image, title, number, setOpen, isOpen, isVisible }) => {
  const [element, setElement] = useState(null);
  const handleModal = (e) => {
    setOpen(!isOpen);
    setElement(e.target);
  };

  return (
    <div className='cardDaily' role='button' tabIndex={0}>
      <img src={image} alt={title} onClick={(e) => handleModal(e)} />
      <div>
        <p>
          # {number} | {title}
        </p>
      </div>
      <ModalImg element={element} isVisible={isVisible} />
    </div>
  );
};

export default CardDaily;
