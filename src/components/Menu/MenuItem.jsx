import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ icon: Icon, color, id, path }) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <Link to={`${path}/${id}`} className='menu-item' style={style}>
      <Icon />
    </Link>
  );
};

export default MenuItem;
