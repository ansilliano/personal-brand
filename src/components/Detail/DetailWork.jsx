import React from 'react';
import { useParams } from 'react-router-dom';
// page components
import DailyUIPage from '../../containers/DailyUI';
import PikaPage from '../../containers/Pika';
import db from '../../db.json';
import Contact from '../Contact';
import MenuWork from '../Menu/MenuWork';
// icons
import DailyUI from '../Works/icons/DailyUI';
import Pika from '../Works/icons/Pika';
import RocketFroz from '../Works/icons/RocketFroz';

const icons = {
  dailyui: DailyUI,
  pika: Pika,
  rocketFroz: RocketFroz,
};

const pageComponent = {
  dailyui: DailyUIPage,
  pika: PikaPage,
};

const DetailWork = () => {
  const { id } = useParams();

  const { projects } = db;
  const path = '/works';

  const { Children } = db.projects.find((item) => item.id === Number(id));

  return (
    <div className='base-container'>
      <Contact />
      <MenuWork items={projects} icons={icons} path={path} />
      <section className='work-detail'>
        {React.createElement(pageComponent[Children])}
      </section>
    </div>
  );
};

export default DetailWork;
