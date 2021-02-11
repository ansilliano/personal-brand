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
    <div className='arrow-up'>up</div>
    {db.map(({ color, Children, id }) => (
      <MenuItem
        key={id}
        id={id}
        color={color}
        icon={React.createElement(icons[Children])}
      />
    ))}
    <div className='arrow-up'>down</div>
  </div>
);

export default MenuWork;
