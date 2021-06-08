import React from 'react';

const CardDaily = ({ image, title, number, handleModal, uid }) => {
  return (
    <div className='cardDaily' role='button' tabIndex={0}>
      <img src={image} alt={title} onClick={() => handleModal(uid)} />
      <p>
        # {number} | {title}
      </p>
    </div>
  );
};

export default CardDaily;
