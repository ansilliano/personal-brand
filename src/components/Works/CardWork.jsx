import React, { useState } from 'react';
import { useHistory } from 'react-router';

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
  console.log(Children);

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
      onClick={() => {
        history.push(`/works/${id}`);
      }}
    >
      {Children}
      {/* {Children && <Children color={hover ? '#fff' : '#343434'} />} */}
      <p>{title}</p>
    </article>
  );
};

export default CardWork;
