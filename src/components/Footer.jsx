import React from 'react';
import { useLocation } from 'react-router-dom';
import SocialFooter from './SocialFooter';

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/' ? (
        <div className='footer-all'>
<<<<<<< HEAD
          <p>
            created with ♥ by Ans and developed by{' '}
            <a href='https://krlosaren.com' target='_blank' rel='noreferrer'>
              @krlosaren
            </a>
          </p>
=======
          <p>created with ♥ by Ans and developed by @krlosaren</p>
>>>>>>> 50762cffc0a73816d14d365e8161383b53aac47e
          <SocialFooter />
        </div>
      ) : (
        <div className='footer-home'>
<<<<<<< HEAD
          <p>
            created with ♥ by Ans and developed by{' '}
            <a href='https://krlosaren.com' target='_blank' rel='noreferrer'>
              @krlosaren
            </a>
          </p>
=======
          <p>created with ♥ by Ans and developed by @krlosaren</p>
>>>>>>> 50762cffc0a73816d14d365e8161383b53aac47e
        </div>
      )}
    </>
  );
};

export default Footer;
