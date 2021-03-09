import React from 'react';
import Contact from '../Contact';
import MenuWork from '../Menu/MenuWork';

const DetailExperiments = () => {
  <div className='base-container'>
    <Contact />
    <MenuWork items={projects} icons={icons} path={path} />
    <section className='work-detail'>
      <img src={project} alt={title} />
    </section>
  </div>;
};

export default DetailExperiments;
