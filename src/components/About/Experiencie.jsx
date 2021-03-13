import React from 'react';
import ExperiencieDown from './Experiencie/ExperiencieDown';

const downExperiencie = [
  {
    id: 1,
    icon: 'global',
    title: 'AIESEC',
    subtitle: 'Volunteer',
    location: 'Medellin, Colombia',
  },
  {
    id: 2,
    icon: 'global',
    title: 'Spain Embassy',
    subtitle: 'Architect',
    location: 'Caracas, Venezuela',
  },
  {
    id: 3,
    icon: 'global',
    title: 'TECMA',
    subtitle: 'Architect',
    location: 'Santiago, Chile',
  },
  {
    id: 4,
    icon: 'global',
    title: 'Pe+Arte',
    subtitle: 'Architect',
    location: 'Caracas, Venezuela',
  },
  {
    id: 5,
    icon: 'global',
    title: 'Platzi',
    subtitle: 'UI Designer',
    location: 'Remote',
  },
  {
    id: 6,
    icon: 'global',
    title: 'Amazing Projects',
    subtitle: 'Product Designer*',
    location: 'Remote',
  },
];

const Experiencie = () => {
  return (
    <div className='experiencie_container'>
      {downExperiencie.map((i) => (
        <ExperiencieDown data={i} key={i.id} />
      ))}
    </div>
  );
};

export default Experiencie;
