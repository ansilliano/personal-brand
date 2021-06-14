import React from 'react';

const TitleHeaders = ({ Children, subtitle, title, side }) => {
  const styles = {
    width: side === 'left' && '100%',
  };

  return (
    <div className='dailyUI__title'>
      {Children}
      <span style={styles}>
        <p>{subtitle}</p>
        <p>{title}</p>
      </span>
    </div>
  );
};

export default TitleHeaders;
