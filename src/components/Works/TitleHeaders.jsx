import React from 'react';

const TitleHeaders = ({ Children, subtitle, title, side }) => {
  return (
    <div className='dailyUI__title'>
      {Children}
      <span>
        <p>{subtitle}</p>
        <p>{title}</p>
      </span>
    </div>
  );
};

export default TitleHeaders;
