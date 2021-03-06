import React from 'react';
import { useLocation } from 'react-router-dom';
import SocialFooter from './SocialFooter';

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/' ? (
        <div className='footer-all'>
          <p>
            created with ♥ by Ans and developed by{' '}
            <a href='https://krlosaren.com' target='_blank' rel='noreferrer'>
              @krlosaren
            </a>
          </p>
          <SocialFooter />
        </div>
      ) : (
        <div className='footer-home'>
          <p>
            created with ♥ by Ans and developed by{' '}
            <a href='https://krlosaren.com' target='_blank' rel='noreferrer'>
              @krlosaren
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
