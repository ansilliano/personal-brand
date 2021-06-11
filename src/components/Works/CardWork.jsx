import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Modal from '../Modal';
import Frozen from './Frozen';

const CardWork = ({
  Children,
  title = '...Next Project',
  color = '#fff',
  hoverColor,
  id,
  route,
  path,
}) => {
  const [hover, setHover] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const style = {
    backgroundColor: hover ? hoverColor : color,
    border: !Children && '4px dashed #555',
  };

  const { removeModal } = useContext(AppContext);
  const history = useHistory();
  const handleClick = (id) => {
    if (path === 'works') {
      if (id !== undefined && id !== 3) {
        history.push(`/${path}/${route}/${id}/`);
      }

      if (id === 3) {
        setOpen(!isOpen);
        console.log('click froz');
        setVisible(!isVisible);
      }
    }

    if (path === 'experiments') {
      console.log(route);
      if (id !== undefined) {
        history.push(`/${path}/${route}/${id}/`);
      }
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
      <Modal id='modal' isOpen={isOpen} removeModal={removeModal} />
      {id === 3 && <Frozen isVisible={isVisible} left='400px' />}
      {Children}
      <p>{title}</p>
    </article>
  );
};

export default CardWork;
