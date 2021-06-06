import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Frozen from './Frozen';

const CardWork = ({
  Children,
  title = '...Next Project',
  color = '#fff',
  hoverColor,
  id,
  classProps,
}) => {
  const [hover, setHover] = useState(false);
  // const [isOpen, setOpen] = useState(false);

  const style = {
    backgroundColor: hover ? hoverColor : color,
    border: !Children && '4px dashed #555',
  };

  const history = useHistory();
  const handleClick = (id) => {
    if (id !== undefined && id !== 3) {
      history.push(`/works/${id}`);
    }
  };

  const handleModal = () => {};

  return (
    <article
      aria-hidden='true'
      className={`card-work ${classProps}`}
      style={style}
      onMouseEnter={() => {
        setHover(!hover);
      }}
      onMouseLeave={() => {
        setHover(!hover);
      }}
      onClick={(() => handleClick(id), handleModal())}
    >
      {/* <Modal id='modal' isOpen={isOpen} removeModal={removeModal} /> */}
      <Frozen />
      {Children}
      <p>{title}</p>
    </article>
  );
};

export default CardWork;
