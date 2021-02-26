import React from 'react';
import { useParams } from 'react-router-dom';
import Contact from '../Contact';
import MenuWork from '../Menu/MenuWork';
import db from '../../db.json';

// icons
import DailyUI from '../Works/icons/DailyUI';
import Pika from '../Works/icons/Pika';
import RocketFroz from '../Works/icons/RocketFroz';

const icons = {
  dailyui: DailyUI,
  pika: Pika,
  rocketFroz: RocketFroz,
};

const DetailWork = () => {
  // eslint-disable-next-line global-require
  const { id } = useParams();

  const { projects } = db;
  const path = '/works';

  const { project, title } = db.projects.find((item) => item.id === Number(id));

  return (
    <div className='base-container'>
      <Contact />
      <MenuWork items={projects} icons={icons} path={path} />
      <section className='work-detail'>
        <img src={project} alt={title} />
      </section>
    </div>
  );
};

export default DetailWork;
