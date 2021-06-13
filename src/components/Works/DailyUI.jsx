import React from 'react';
// daily db
import { dailyUI } from '../../db.json';
import useModal from '../../hooks/useModal';
import Ai from '../icons/Ai';
import Figma from '../icons/Figma';
import Ps from '../icons/Ps';
import Xd from '../icons/Xd';
import Modal from '../Modal';
import ModalImg from '../ModalImg';
import ButtonLink from './ButtonLink';
import CardDaily from './CardDaily';
import One from './numbers/One';
import Two from './numbers/Two';
import TitleHeaders from './TitleHeaders';

const DailyUIPage = () => {
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
        <div className='dailyUI__intro base-container-big'>
          <img
            loading='lazy'
            src='https://storage.googleapis.com/assets-portafolio/daily-ui-background_.png'
            alt='daily-ui'
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
              <div>
                <Figma size={20} />
                <Ai size={20} />
                <Ps size={20} />
                <Xd size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className='layout-grid layout-max-width'>
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
                <ModalImg isOpen={isOpen} uid={uid} tag={tag} />
              </Modal>
              {dailyUI.mobile.map(({ tag, uid, filename, filepath, title }) => (
                <CardDaily
                  handleModal={handleOpen}
                  tag={tag}
                  uid={uid}
                  image={filepath}
                  number={filename}
                  title={title}
                  key={uid}
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
          <div className='dailyUI__container'>
            <div className='dailyUI__grid animate__animated'>
              {dailyUI.desktop.map(
                ({ tag, uid, filename, filepath, title }) => (
                  <CardDaily
                    handleModal={handleOpen}
                    tag={tag}
                    uid={uid}
                    image={filepath}
                    number={filename}
                    title={title}
                    key={uid}
                  />
                  // eslint-disable-next-line comma-dangle
                )
              )}
            </div>
          </div>
          <TitleHeaders
            Children={React.createElement(Two)}
            title='Miscellaneous'
            subtitle='02_Design'
          />
          <div className='dailyUI__container'>
            <div className='dailyUI__grid'>
              {dailyUI.others.map(({ tag, uid, filename, filepath, title }) => (
                <CardDaily
                  handleModal={handleOpen}
                  tag={tag}
                  uid={uid}
                  image={filepath}
                  number={filename}
                  title={title}
                  key={uid}
                />
              ))}
            </div>
          </div>
          <TitleHeaders
            Children={React.createElement(Two)}
            title='Animation'
            subtitle='02_Design'
            side='right'
          />
          <div className='dailyUI__container'>
            <div className='dailyUI__grid'>
              {dailyUI.gif.map(({ tag, uid, filename, filepath, title }) => (
                <CardDaily
                  handleModal={handleOpen}
                  tag={tag}
                  uid={uid}
                  image={filepath}
                  number={filename}
                  title={title}
                  key={uid}
                />
              ))}
            </div>
          </div>
          <ButtonLink
            text='go to dribbble and see the 100 proposals'
            link='https://dribbble.com/ansilliano'
          />
        </div>
      </div>
    </div>
  );
};

export default DailyUIPage;
