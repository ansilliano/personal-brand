import React from 'react';

// letters
import Angela from '../components/Home/Angela';
import Illiano from '../components/Home/Illiano';
import RRSS from '../components/Home/RRSS';

const Home = () => (
  <section className='container_aux'>
    <div className='home container_aux'>
      <RRSS />
      <div className='home__name'>
        <Angela width='100%' />
        <Illiano width='100%' />
      </div>
    </div>
  </section>
);

export default Home;
