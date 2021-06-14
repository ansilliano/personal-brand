import React from 'react';
import useObserver from '../../hooks/useObserver';

const CardIllustrations = ({ image, title, handleModal, uid }) => {
  const [show, element] = useObserver();
  return (
    <article ref={element} className='cardDaily'>
      {show && (
        <>
          <img
            src={image}
            alt={title}
            onClick={() => handleModal(uid)}
            loading='lazy'
          />
          <p>{title}</p>
        </>
      )}
    </article>
  );
};

export default CardIllustrations;
