import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from '../components/Icon';

const Menu = ({ color, dotColor }) => {
  return (
    <nav className='menu'>
      <div className='line-left' />
      <div className='line-top' />
      <div className='icon' />
      <Link to='/' className='menu__icon'>
        <Icon fillColor={color} dotColor={dotColor} />
      </Link>
      <div className='menu__items'>
        <NavLink to='/about' activeClassName='active-link'>
          About me
        </NavLink>
        <NavLink to='/works' activeClassName='active-link'>
          Works
        </NavLink>
        <NavLink to='/experiments' activeClassName='active-link'>
          Experiments
        </NavLink>
      </div>
      <div className='line-right' />
      <div className='line-bottom' />
    </nav>
  );
};

export default Menu;
