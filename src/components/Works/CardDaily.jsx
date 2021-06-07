import React from 'react';

const CardDaily = ({ image, title, number }) => {
  return (
    <div className='cardDaily'>
      <img src={image} alt={title} />
      <div>
        <p>
          # {number} | {title}
        </p>
      </div>
    </div>
  );
};

export default CardDaily;
