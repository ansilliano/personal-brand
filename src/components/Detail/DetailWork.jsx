import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// page components
import DailyUIPage from '../../containers/DailyUI';
import PikaPage from '../../containers/Pika';
import { AppContext } from '../../context/AppContext';
import db from '../../db.json';
import Contact from '../Contact';
import MenuWork from '../Menu/MenuWork';
import Modal from '../Modal';
import Frozen from '../Works/Frozen';
// icons
import DailyUI from '../Works/icons/DailyUI';
import Pika from '../Works/icons/Pika';
import RocketFroz from '../Works/icons/RocketFroz';

const icons = {
  dailyui: DailyUI,
  pika: Pika,
  rocketFroz: RocketFroz,
};

const pageComponent = {
  dailyui: DailyUIPage,
  pika: PikaPage,
};

const DetailWork = () => {
  const { id } = useParams();
  const { removeModal, state, handleModal } = useContext(AppContext);
  const { isOpen, openFrozen } = state;

  const { projects } = db;
  const path = '/works';

  const { Children } = db.projects.find((item) => item.id === Number(id));

  return (
    <div className='base-container'>
      <Modal id='modal' isOpen={isOpen} removeModal={removeModal}>
        <Frozen isVisible={openFrozen} left='110px' bottom='85px' />
      </Modal>
      <Contact />
      <MenuWork
        items={projects}
        icons={icons}
        path={path}
        isOpen={isOpen}
        handleModal={handleModal}
      />
      <section className='work-detail'>
        {React.createElement(pageComponent[Children])}
      </section>
    </div>
  );
};

export default DetailWork;
