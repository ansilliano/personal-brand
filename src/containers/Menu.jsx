import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from '../components/Icon';

const Menu = () => (
  <div className="menu">
    <div className="menu__container">
      <div className="menu__items">
        <div className="menu__icon">
          <Link to="/">
            <Icon />
          </Link>
        </div>
        <div className="container__list">
          <NavLink to="/about" activeClassName="active-link">
            About me
          </NavLink>
          <NavLink to="/works" activeClassName="active-link">
            Works
          </NavLink>
          <NavLink to="/experiments" activeClassName="active-link">
            Experiments
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);

export default Menu;
