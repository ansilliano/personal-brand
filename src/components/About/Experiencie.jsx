import React from 'react';
import ExperiencieDown from './Experiencie/ExperiencieDown';

import globo from '../../assets/timeline/globo.svg';
import tubes from '../../assets/timeline/tubes.svg';
import computer from '../../assets/timeline/computer.svg';
import pencils from '../../assets/timeline/pencils.svg';
import curveLine from '../../assets/timeline/curve-line.svg';
import timeline from '../../assets/timeline/line_timeline.svg';

const downExperiencie = [
  {
    id: 1,
    icon: globo,
    title: 'AIESEC',
    subtitle: 'Volunteer',
    location: 'Medellín, Colombia',
    year: 2017,
    label: 'aiesec',
  },
  {
    id: 2,
    icon: computer,
    title: 'Spain Embassy',
    subtitle: 'Architect',
    location: 'Caracas, Venezuela',
    year: 2018,
    label: 'spain',
  },
  {
    id: 3,
    icon: computer,
    title: 'TECMA',
    subtitle: 'Architect',
    location: 'Santiago, Chile',
    year: 2019,
    label: 'tecma',
  },
  {
    id: 4,
    icon: globo,
    title: 'Pe+Arte',
    subtitle: 'Architect',
    location: 'Caracas, Venezuela',
    year: 2017,
    label: 'petararte',
  },
  {
    id: 5,
    icon: pencils,
    title: 'Platzi',
    subtitle: 'UI Designer',
    location: 'Remote',
    year: 2020,
    label: 'platzi',
  },
  {
    id: 6,
    icon: tubes,
    title: 'Amazing Projects',
    subtitle: 'Product Designer*',
    location: 'Remote',
    year: 2025,
    label: 'future',
  },
];

const Experiencie = ({ children, handleModal }) => {
  return (
    <>
      {children}
      <div className='experiencie_container'>
        <div className='curve-line'>
          <img src={curveLine} alt='curve-line' />
        </div>
        <div className='timeline'>
          <img src={timeline} alt='timeline' />
        </div>
        {downExperiencie.map((item) => (
          <ExperiencieDown
            data={item}
            key={item.id}
            handleModal={handleModal}
          />
        ))}
      </div>
    </>
  );
};

export default Experiencie;
