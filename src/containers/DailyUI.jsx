import React from 'react';
import Ai from '../components/icons/Ai';
import Figma from '../components/icons/Figma';
import Ps from '../components/icons/Ps';
import Xd from '../components/icons/Xd';
import Modal from '../components/Modal';
import ModalImg from '../components/ModalImg';
import CardDaily from '../components/Works/CardDaily';
import One from '../components/Works/numbers/One';
import Two from '../components/Works/numbers/Two';
import TitleHeaders from '../components/Works/TitleHeaders';
// daily db
import { dailyUI } from '../db.json';
import useModal from '../hooks/useModal';

const DailyUIPage = () => {
  const [modalState, handleOpen] = useModal();
  const { isOpen, uid } = modalState;

  return (
    <div className='work-detail'>
      <div className='dailyUI'>
        <div className='dailyUI__intro'>
          <img
            src='https://storage.googleapis.com/portafolio-bucket/daily-ui-background.png'
            alt='daily-ui'
          />
          <div className='dailyUI__intro--info'>
            <div className='project-name'>
              <div />
              <span>Daily</span>
              <span>UI</span>
            </div>
          </div>
          <div className='dailyUI__description'>
            <div className='project-task'>
              <h4>Task</h4>
              <p>Design 100 UI ideas in 100 days.</p>
            </div>
            <div className='project-tools'>
              <h4>Tools</h4>
              <div>
                <Figma size={20} />
                <Ai size={20} />
                <Ps size={20} />
                <Xd size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className='layout-grid'>
          <TitleHeaders
            side='right'
            Children={React.createElement(One)}
            title='About Daily UI'
            subtitle='01_Introduction'
          />
          <div className='dailyUI__text'>
            <p>
              For <strong>100 days</strong>, I was designing 100 different user
              interface elements for mobile, tablet and web. This project was
              built to provide a fun engaging way to improve my skills as a
              designer, earn rewards, and get feedback from others.
            </p>
          </div>
          <TitleHeaders
            Children={React.createElement(Two)}
            title='Mobile'
            subtitle='02_Design'
          />
          <div className='dailyUI__container'>
            <div className='dailyUI__grid'>
              <Modal id='modal' isOpen={isOpen} removeModal={handleOpen}>
                <ModalImg isOpen={isOpen} uid={uid} />
              </Modal>
              {dailyUI.mobile.map(({ uid, filename, filepath, title }) => (
                <CardDaily
                  handleModal={handleOpen}
                  key={uid}
                  uid={uid}
                  image={filepath}
                  number={filename}
                  title={title}
                />
              ))}
            </div>
          </div>
          <TitleHeaders
            Children={React.createElement(Two)}
            title='Desktop'
            subtitle='02_Design'
            side='right'
          />
        </div>
      </div>
    </div>
  );
};

export default DailyUIPage;
