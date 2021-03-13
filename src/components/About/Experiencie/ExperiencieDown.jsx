import React from 'react';
import { GrLocation } from 'react-icons/gr';

const ExperiencieDown = ({ data }) => {
  const { icon, title, subtitle, location } = data;
  return (
    <div className='detailExperiencie'>
      <img src={icon} alt={title} />
      <h4>{title}</h4>
      <p>{subtitle}</p>
      <p>
        <GrLocation /> {location}
      </p>
    </div>
  );
};

export default ExperiencieDown;
