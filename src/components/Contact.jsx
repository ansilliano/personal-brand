import React from 'react';

import Email from './Home/Rs-Icons/Mail';

const Contact = () => (
  <div className='contact-button'>
    <form action='mailto:illianoangela@gmail.com' method='get'>
      <button type='submit'>
        <Email />
      </button>
    </form>
  </div>
);

export default Contact;
