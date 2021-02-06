import React from 'react';

// letters
import Angela from '../components/Home/Angela';
import Illiano from '../components/Home/Illiano';
import RRSS from '../components/Home/RRSS';

const Home = () => {
  const style = {};
  return (
    <section className='home container_aux'>
      <RRSS />
      <div className='home__name'>
        <p>Angela</p>
        <p>Illiano</p>
        {/* <Angela width='900' /> */}
        {/* <Illiano width='1158' /> */}
      </div>
    </section>
  );
};

export default Home;
