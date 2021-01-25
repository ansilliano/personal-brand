import React from 'react';

// letters
import Angela from '../components/Home/Angela';
import Illiano from '../components/Home/Illiano';
import RRSS from '../components/Home/RRSS';

const Home = () => (
  <div className="home">
    <RRSS />
    <div className="home__name">
      <div>
        <Angela width="750" />
      </div>
      <div>
        <Illiano width="750" />
      </div>
    </div>
  </div>
);

export default Home;
