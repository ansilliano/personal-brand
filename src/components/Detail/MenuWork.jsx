import React from 'react';

// component
import MenuItem from './MenuItem';

// icons
import DailyUI from '../Works/icons/DailyUI';
import Pika from '../Works/icons/Pika';
import RocketFroz from '../Works/icons/RocketFroz';

// db
import db from '../../db.json';

const icons = {
  dailyui: DailyUI,
  pika: Pika,
  rocketFroz: RocketFroz,
};

const MenuWork = () => (
  <div className='menu-work'>
    {db.map(({ color, Children, id }) => (
      <MenuItem
        key={id}
        color={color}
        icon={React.createElement(icons[Children])}
      />
    ))}
  </div>
);

export default MenuWork;
