import React from 'react';
import { GrLocation } from 'react-icons/gr';

import dot from '../../../assets/timeline/dot.svg';

const ExperiencieDown = ({ data, handleModal }) => {
  const { icon, title, subtitle, location, year, label } = data;

  return (
    <div className='detailExperiencie'>
      <div className='detailExperiencie__year'>
        <img src={icon} alt={title} />
        <p className='p-card'>{year}</p>
      </div>
      <div className='detailExperiencie__dot'>
        <img src={dot} alt='dot' id={label} onMouseEnter={handleModal} />
      </div>
      <div className='detailExperiencie__info'>
        <h4 className='h4-header'>{title}</h4>
        <p className='p-card'>{subtitle}</p>
        <p className='p-card'>
          <GrLocation /> {location}
        </p>
      </div>
    </div>
  );
};

export default ExperiencieDown;
