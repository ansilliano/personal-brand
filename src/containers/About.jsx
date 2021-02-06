import React, { useState } from 'react';

import doodle from '../assets/img/about-me-doodle.svg';
import Education from '../components/About/Education';
import Experiencie from '../components/About/Experiencie';
import Aiesec from '../components/About/Experiencie/Aiesec';
import Future from '../components/About/Experiencie/Future';
import Petararte from '../components/About/Experiencie/Petararte';
import Platzi from '../components/About/Experiencie/Platzi';
import Spain from '../components/About/Experiencie/Spain';
import Tecma from '../components/About/Experiencie/Tecma';

const components = {
  future: Future,
  petararte: Petararte,
  platzi: Platzi,
  tecma: Tecma,
  spain: Spain,
  aiesec: Aiesec,
};

const About = () => {
  const [hover, setHover] = useState(false);
  const [children, setChildren] = useState(null);

  const handleView = (e) => {
    setHover(!hover);

    switch (e.target.id) {
      case 'future':
        return setChildren(
          React.createElement(components[e.target.id], {
            isVisible: hover,
          })
        );
      case 'aiesec':
        return setChildren(
          React.createElement(components[e.target.id], {
            isVisible: hover,
          })
        );
      case 'spain':
        return setChildren(
          React.createElement(components[e.target.id], {
            isVisible: hover,
          })
        );
      case 'tecma':
        return setChildren(
          React.createElement(components[e.target.id], {
            isVisible: hover,
          })
        );
      case 'petararte':
        return setChildren(
          React.createElement(components[e.target.id], {
            isVisible: hover,
          })
        );
      case 'platzi':
        return setChildren(
          React.createElement(components[e.target.id], {
            isVisible: hover,
          })
        );

      default:
        return setHover(!hover);
    }
  };

  const style = {
    backgroundColor: hover ? 'black' : 'white',
  };

  return (
    <div className='about container' style={style}>
      <div className='text-intro'>
        <article className='about__intro'>
          <h2 className='h2-title'>this is about me</h2>
          <div className='intro__text'>
            <p>Hello!</p>
            <p>
              I&#39;m Angela Illiano. UI Designer, Architect, and Product
              Designer in progress.
            </p>
            <p>
              During my academic career, most of the works were linked to urban
              design, social projects, and interventions in public space,
              however, in the world of work, the architecture industry
              (especially in construction) was not what I expected for me. For
              this reason, I am pivoting towards the technology area with the
              aim of merging my knowledge about architecture and my passion for
              design.
            </p>
            <p>...and leave the world better than I found it</p>
          </div>
        </article>
      </div>
      <div className='doodle-img'>
        <img src={doodle} alt='about-doodle ' className='' />
      </div>
      <div className='experiencie-container '>
        <article className='about__experiencie container_aux'>
          <h2 className='h2-title'>experiencie...</h2>
          <span>(this is not a time line)</span>
          <Experiencie width='100%' height='100%' handleView={handleView}>
            {children}
          </Experiencie>
        </article>
      </div>
      <div className='education-container '>
        <article className='about__education container_aux'>
          <h2 className='h2-title'>Education...</h2>
          <Education width='100%' height='100%' />
        </article>
      </div>
      <div className='tools-container'>
        <article className='about__tools container_aux'>
          <div className='tools__container'>
            <div className='tool'>
              <h3 className='h3-title'>tools</h3>
              <div>Figma</div>
              <div>Illustrator</div>
              <div>Adobe XD</div>
              <div>Photoshop</div>
              <div>Paper & Pencil</div>
              <div>
                CSS / HTML <span>(basic)</span>
              </div>
              <div>AutoCad</div>
            </div>
            <div className='skill'>
              <h3 className='h3-title'>skills</h3>
              <div>Visual Design</div>
              <div>Wireframing</div>
              <div>Prototyping</div>
              <div>Branding</div>
              <div>User Research</div>
            </div>
            <div className='general'>
              <h3 className='h3-title'>general</h3>
              <div>Adaptability</div>
              <div>
                Creativity
                <span>and homurous</span>
              </div>
              <div>Critical Thinking</div>
              <div>Patience</div>
              <div>Empathy</div>
              <div>Resiliencie</div>
              <div>Desire to Learn</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default About;
