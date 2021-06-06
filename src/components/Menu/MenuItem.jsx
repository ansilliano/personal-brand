import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ icon: Icon, color, id, path, route }) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <NavLink
      to={`${path}/${route}/${id}`}
      className='menu-item'
      style={style}
      activeClassName='active-menu-item'
    >
      <Icon />
    </NavLink>
  );
};

export default MenuItem;
