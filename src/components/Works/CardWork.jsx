import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CardWork = ({
  Children,
  title = '...Next Project',
  color = '#fff',
  hoverColor,
  id,
}) => {
  const [hover, setHover] = useState(false);

  const style = {
    backgroundColor: hover ? hoverColor : color,
    border: !Children && '4px dashed #555',
  };

  const history = useHistory();
  const handleClick = (id) => {
    if (id !== undefined) {
      history.push(`/works/${id}`);
    }
  };

  return (
    <article
      aria-hidden='true'
      className='card-work'
      style={style}
      onMouseEnter={() => {
        setHover(!hover);
      }}
      onMouseLeave={() => {
        setHover(!hover);
      }}
      onClick={() => handleClick(id)}
    >
      {Children}
      <p>{title}</p>
    </article>
  );
};

export default CardWork;
