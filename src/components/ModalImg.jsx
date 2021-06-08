import React from 'react';

const ModalImg = ({ element, isVisible }) => {
  const styles = {
    visibility: isVisible ? 'visible' : 'hidden',
    zIndex: 10,
  };
  console.log(element);

  return (
    <div style={styles}>
      {element && <img src={element.src} alt={element.alt} />}
    </div>
  );
};

export default ModalImg;
