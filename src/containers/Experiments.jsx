import React from 'react';
import doodle from '../assets/img/experiments-doodle.svg';
import Contact from '../components/Contact';
// icons components
import Sketching from '../components/Experiments/icons/Illustration';
import CardWork from '../components/Works/CardWork';
import Illustration from '../components/Works/icons/DailyUI';
import Branding from '../components/Works/icons/Pika';
import Windsurf from '../components/Works/icons/RocketFroz';
// db
import db from '../db.json';

// icons
const icons = {
  illustration: Illustration,
  branding: Branding,
  windsurf: Windsurf,
  sketching: Sketching,
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
        {db.experiments.map(
          ({ id, color, title, hoverColor, Children, route }) => (
            <CardWork
              path='experiments'
              key={id}
              id={id}
              color={color}
              title={title}
              route={route}
              Children={React.createElement(icons[Children], {})}
              hoverColor={hoverColor}
            />
            // eslint-disable-next-line comma-dangle
          )
        )}
        <CardWork />
      </section>
    </div>
  </div>
);

export default Experiments;
