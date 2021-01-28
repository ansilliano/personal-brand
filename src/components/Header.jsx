import React from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../containers/Menu';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={`header main_container ${
        pathname === '/' ? 'bg-menu_red' : 'bg-menu_white'
      }`}
    >
      {pathname !== '/' ? (
        <Menu color='#e84141' dotColor='#fff' />
      ) : (
        <Menu color='#fff' dotColor='#e84141' />
      )}
    </div>
  );
};

export default Header;
