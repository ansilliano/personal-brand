import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MenuItem = ({ icon: Icon, color, id, path, route, hoverColor }) => {
  console.log(color);
  const { pathname } = useLocation();
  const current = pathname.split('/')[2];
  const style = {
    backgroundColor: current === route ? hoverColor : color,
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
