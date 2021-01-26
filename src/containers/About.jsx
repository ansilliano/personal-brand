import React from 'react';

import doodle from '../assets/img/about-me-doodle.svg';
import Education from '../components/About/Education';
import Experiencie from '../components/About/Experiencie';

const About = () => (
  <div className="about">
    <div className="about__container">
      <article className="about__intro">
        <div className="intro__text">
          <h2 className="h2-title">this is about me</h2>
          <div>
            <p>Hello!</p>
            <p>
              I&#39;m Angela Illiano. UI Designer, Architect, and Product
              Designer in progress.
            </p>
            During my academic career, most of the works were linked to urban
            design, social projects, and interventions in public space, however,
            in the world of work, the architecture industry (especially in
            construction) was not what I expected for me. For this reason, I am
            pivoting towards the technology area with the aim of merging my
            knowledge about architecture and my passion for design.
            <p>...and leave the world better than I found it</p>
          </div>
        </div>
        <img src={doodle} alt="about-doodle" />
      </article>
      <article className="about__experiencie">
        <h2 className="h2-title">experiencie...</h2>
        <span>(this is not a time line)</span>
        <Experiencie width="100%" height="100%" />
      </article>
      <article className="about__education">
        <h2 className="h2-title">Education...</h2>
        <Education width="100%" height="100%" />
      </article>
      <article className="about__tools">
        <div className="tools__container">
          <div className="tool">
            <h3 className="h3-title">tools</h3>
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
          <div className="skill">
            <h3 className="h3-title">skills</h3>
            <div>Visual Design</div>
            <div>Wireframing</div>
            <div>Prototyping</div>
            <div>Branding</div>
            <div>User Research</div>
          </div>
          <div className="general">
            <h3 className="h3-title">general</h3>
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

export default About;
