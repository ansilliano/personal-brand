import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from '../components/Icon';

const Menu = ({ color, dotColor }) => (
  <div className="menu">
    <div className="container-grid">
      <div className="line-top" />
      <div className="icon">
        <div className="menu__icon">
          <Link to="/">
            <Icon fillColor={color} dotColor={dotColor} />
          </Link>
        </div>
      </div>
      <div className="list-menu">
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
      <div className="line-bottom" />
    </div>
  </div>
);

export default Menu;
