import React from 'react';

const Colors = ({ color = '' }) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <div style={style} className='color__box'>
      <p>{color}</p>
    </div>
  );
};

export default Colors;
