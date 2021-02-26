import React from 'react';

import Header from './Header';
import Footer from './Footer';
<<<<<<< HEAD
import SocialFooter from './SocialFooter';

const Layout = ({ children }) => {
  const screen = window.screen.width;
  console.log(screen < 500);
  return (
    <>
      <Header />
      {children}
      {screen < 500 ? (
        <div className='footer-all'>
          <SocialFooter />
        </div>
      ) : (
        <Footer />
      )}
    </>
  );
};
=======

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
>>>>>>> 50762cffc0a73816d14d365e8161383b53aac47e

export default Layout;
