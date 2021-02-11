import React from 'react';

const MenuItem = ({ icon, color }) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <div className='menu-item' style={style}>
      {icon}
    </div>
  );
};

export default MenuItem;
