import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from '../components/Icon';

const Menu = ({ color, dotColor }) => (
  <nav className='menu container_aux '>
    <div className='line-left' />
    <div className='line-top' />
    <div className='icon' />
    <div className='menu__icon'>
      <Link to='/'>
        <Icon fillColor={color} dotColor={dotColor} />
      </Link>
    </div>
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

export default Menu;
