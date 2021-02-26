import React from 'react';

import Header from './Header';
import Footer from './Footer';
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

export default Layout;
