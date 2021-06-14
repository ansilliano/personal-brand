import React from 'react';
import Ai from '../icons/Ai';
import Figma from '../icons/Figma';
import Ps from '../icons/Ps';
import Xd from '../icons/Xd';
import One from '../Works/numbers/One';
import TitleHeaders from '../Works/TitleHeaders';

const IllustrationPage = () => {
  return (
    <div className='work-detail'>
      <div className='experiments'>
        <div className='main_container'>
          <div className='illustration__intro base-container-big'>
            <div className='experiments-container-without-margin work-detail'>
              <div className='illustration__intro--info'>
                <div className='experiments-name-project'>
                  <span>Illustrations</span>
                </div>
              </div>
              <div className='line__white' />
              <div className='experiments__description'>
                <div className='experiments-project-task'>
                  <h4>Task</h4>
                  <p>
                    Represent in a graphic way some works in different areas.
                  </p>
                </div>
                <div className='project-tools'>
                  <h4>Tools</h4>
                  <div>
                    <Figma size={20} color='#fff' />
                    <Ai size={20} color='#fff' />
                    <Ps size={20} color='#fff' />
                    <Xd size={20} color='#fff' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='layout-grid layout-max-width'>
          <TitleHeaders
            Children={React.createElement(One, {})}
            title='About Daily UI'
            subtitle='01_Introduction'
          />
        </div>
      </div>
    </div>
  );
};

export default IllustrationPage;
