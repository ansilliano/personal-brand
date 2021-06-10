import React from 'react';
import doodle from '../assets/img/experiments-doodle.svg';
import Contact from '../components/Contact';
import Branding from '../components/Experiments/icons/Branding';
import Desarrollarte from '../components/Experiments/icons/Desarrollarte';
import Handcraft from '../components/Experiments/icons/Handcraft';
// icons components
import Illustration from '../components/Experiments/icons/Illustration';
import Sketching from '../components/Experiments/icons/Sketching';
import Windsurf from '../components/Experiments/icons/Windsurf';
import CardWork from '../components/Works/CardWork';
// db
import db from '../db.json';

// icons
const icons = {
  illustration: Illustration,
  branding: Branding,
  windsurf: Windsurf,
  sketching: Sketching,
  handcraft: Handcraft,
  desarrollarte: Desarrollarte,
};

const Experiments = () => (
  <div className='base-container'>
    <Contact />
    <section className='about base-container'>
      <h2 className='h2-title'>This is my work!</h2>
      <div className='text-intro'>
        <article className='about__intro'>
          <div className='work__text'>
            <p>
              There are those who say that we must find our passion but with so
              many options in life, how to choose just one?.
            </p>
            <p>
              I consider myself a curious, creative person and always with the
              active <span>desire to learn</span> new things. That is why in my
              life I like to constantly experiment in different fields
              (personal, professional, academic, etc.)
            </p>
            <p>
              I decided to create this space to share those experiments that
              I’ve enjoyed in life and that have helped me to be the{' '}
              <span>Angela</span> that I am today.
            </p>
          </div>
        </article>
      </div>
      <div className='doodle-img'>
        <img src={doodle} alt='about-doodle' />
      </div>
    </section>
    <div className='cards-works'>
      <section className='grid-works'>
        {db.experiments.map(({ id, color, title, hoverColor, Children }) => (
          <CardWork
            path='experiments'
            key={id}
            id={id}
            color={color}
            title={title}
            Children={React.createElement(icons[Children], {})}
            hoverColor={hoverColor}
          />
        ))}
        <CardWork />
      </section>
    </div>
  </div>
);

export default Experiments;
