import React from 'react';

const TitleHeaders = ({ Children, subtitle, title, side = '2-4' }) => {
  const styles = {
    gridColumn: side === 'right' && '2/-1',
  };

  return (
    <div className='dailyUI__title' style={styles}>
      {Children}
      <span>
        <p>{subtitle}</p>
        <p>{title}</p>
      </span>
    </div>
  );
};

export default TitleHeaders;
