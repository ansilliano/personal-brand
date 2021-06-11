import React from 'react';
import useModal from '../../hooks/useModal';
import Modal from '../Modal';
import ModalImg from '../ModalImg';
import One from '../Works/numbers/One';
import TitleHeaders from '../Works/TitleHeaders';

const BrandingPage = () => {
  const [modalState, handleOpen] = useModal();
  const { isOpen, uid, tag } = modalState;

  const styles = {
    backgroundColor: '#3e3e3e',
    left: '200px',
    width: '200%',
  };

  return (
    <div className='work-detail'>
      <div className='dailyUI'>
        <div className='dailyUI__intro layout-grid'>
          <img
            loading='lazy'
            src='https://storage.googleapis.com/assets-portafolio/illustration/illustration_hero.png'
            alt='illustration-hero'
          />
          <div className='dailyUI__intro--info'>
            <div className='project-name'>
              <div style={styles} />
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
          <div className='dailyUI__container'>
            <div className='dailyUI__grid'>
              <Modal id='modal' isOpen={isOpen} removeModal={handleOpen}>
                <ModalImg isOpen={isOpen} uid={uid} tag={tag} />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingPage;
