import React from 'react';
import { useParams } from 'react-router';
import Contact from '../Contact';
import MenuWork from './MenuWork';

// db

const DetailWork = () => {
  // eslint-disable-next-line global-require
  const db = require('../../db.json');
  const { id } = useParams();

  const { project, title } = db.find((item) => item.id === Number(id));

  return (
    <div className='base-container'>
      <Contact />
      <MenuWork />
      <section className='work-detail'>
        <img src={project} alt={title} />
      </section>
    </div>
  );
};

export default DetailWork;
