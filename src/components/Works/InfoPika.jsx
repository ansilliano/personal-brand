import React from 'react';

const InfoPika = ({ img, title, text, grid }) => {
  const style = {
    gridColumn: grid,
  };
  return (
    <div className='infoPika' style={style}>
      <p>{title}</p>
      <img src={img} alt={title} />
      <p>{text}</p>
    </div>
  );
};

export default InfoPika;
