import React from 'react';

// component
import CardWork from '../components/Works/CardWork';

// doodle
import doodle from '../assets/img/work-doodle.svg';

// icons
import DailyUI from '../components/Works/icons/DailyUI';
import Pika from '../components/Works/icons/Pika';
import RocketFroz from '../components/Works/icons/RocketFroz';
import Contact from '../components/Contact';

// db
import db from '../db.json';

const icons = {
  dailyui: DailyUI,
  pika: Pika,
  rocketFroz: RocketFroz,
};

const Works = () => (
  <div className='base-container'>
    <Contact />
    <section className='about base-container'>
      <h2 className='h2-title'>This is my work!</h2>
      <div className='text-intro'>
        <article className='about__intro'>
          <div className='work__text'>
            <p>
              Most of my experience is linked to the area of{' '}
              <span>architecture</span>, however, I’ve done freelance work
              related more to graphic design, branding, and UX/UI design.
            </p>
            <p>
              Since I began to educate myself and become more involved with the
              tech world, I could immediately realize that this is where I want
              to be due to its <strong>exponential growth</strong>. I
              don&lsquo;t know what the future will hold but I do know that with
              the best disposition on my part and thirst for knowledge, it is an
              industry in which you never stop growing..
            </p>
          </div>
        </article>
      </div>
      <div className='doodle-img'>
        <img src={doodle} alt='about-doodle ' className='' />
      </div>
    </section>
    <div className='cards-works'>
      <section className='grid-works'>
        {db.projects.map(({ color, title, Children, hoverColor, id }) => (
          <CardWork
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

export default Works;
