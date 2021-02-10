import React from 'react';

// letters
import Angela from '../components/Home/Angela';
import Illiano from '../components/Home/Illiano';
import RRSS from '../components/Home/RRSS';

const Home = () => {
  const style = {};
  return (
    <div className='container-red'>
      <section className='home base-container'>
        <RRSS />
        <div className='home__name'>
          <p>Angela</p>
          <p>Illiano</p>
          {/* <Angela width='900' /> */}
          {/* <Illiano width='1158' /> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
