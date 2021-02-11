import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ icon: Icon, color, id }) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <Link to={`/works/${id}`} className='menu-item' style={style}>
      <Icon />
    </Link>
  );
};

export default MenuItem;
