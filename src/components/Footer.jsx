import React from 'react';
import { useLocation } from 'react-router-dom';
import SocialFooter from './SocialFooter';

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/' ? (
        <div className='footer-all'>
          <p>created with ♥ by Ans and developed by @krlosaren</p>
          <SocialFooter width='50%' height='50%' />
        </div>
      ) : (
        <div className='footer-home'>
          <p>created with ♥ by Ans and developed by @krlosaren</p>
        </div>
      )}
    </>
  );
};

export default Footer;
