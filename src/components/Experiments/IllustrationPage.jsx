import React from 'react';
import { illustrations } from '../../db.json';
import useModal from '../../hooks/useModal';
import Ai from '../icons/Ai';
import Figma from '../icons/Figma';
import Ps from '../icons/Ps';
import Xd from '../icons/Xd';
import Modal from '../Modal';
import ModalImg from '../ModalImg';
import One from '../Works/numbers/One';
import Two from '../Works/numbers/Two';
import TitleHeaders from '../Works/TitleHeaders';
import CardIllustrations from './CardIllustrations';

const IllustrationPage = () => {
  const [modalState, handleOpen] = useModal();
  const { isOpen, uid, tag } = modalState;

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
            title='About My Illustrations'
            subtitle='01_Introduction'
          />
          <div className='dailyUI__text'>
            <p>
              In this section I want to show you a compilation of some{' '}
              <strong>graphic works</strong> that I did in my college days and
              some personal projects as an experimental form of graphic
              expression.
            </p>
          </div>
          <TitleHeaders
            side='left'
            Children={React.createElement(Two, { side: 'left' })}
            title='Graduation Project'
            subtitle='02_Design'
          />
          <div className='dailyUI__container'>
            <div className='dailyUI__grid'>
              <Modal id='modal' isOpen={isOpen} removeModal={handleOpen}>
                <ModalImg isOpen={isOpen} uid={uid} tag={tag} />
              </Modal>
              {illustrations.map(({ uid, title, image }) => (
                <CardIllustrations
                  handleModal={handleOpen}
                  uid={uid}
                  image={image}
                  title={title}
                  key={uid}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllustrationPage;
