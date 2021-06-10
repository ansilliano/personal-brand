import React from 'react';
import useObserver from '../../hooks/useObserver';

const CardDaily = ({ image, title, number, handleModal, uid, tag }) => {
  const [show, element] = useObserver();
  return (
    <article ref={element} className='cardDaily'>
      {show && (
        <>
          <img
            src={image}
            alt={title}
            onClick={() => handleModal(uid, tag)}
            loading='lazy'
          />
          <p>
            # {number} | {title}
          </p>
        </>
      )}
    </article>
  );
};

export default CardDaily;
