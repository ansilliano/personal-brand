import React, { useState } from 'react';

const CardWork = ({
  Children,
  title = '...Next Project',
  color = '#fff',
  hoverColor,
}) => {
  const [hover, setHover] = useState(false);

  const style = {
    backgroundColor: hover ? hoverColor : color,
    border: !Children && '4px dashed #555',
  };

  return (
    <article
      className='card-work'
      style={style}
      onMouseEnter={() => {
        setHover(!hover);
      }}
      onMouseLeave={() => {
        setHover(!hover);
      }}
    >
      {Children && <Children color={hover ? '#fff' : '#343434'} />}
      <p>{title}</p>
    </article>
  );
};

export default CardWork;
