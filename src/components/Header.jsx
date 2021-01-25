import React from 'react';
import Menu from '../containers/Menu';

const Header = () => (
  <>
    <div className="container-grid">
      <div className="line-top" />
      <div className="icon" />
      <div className="list-menu" />
      <div className="line-bottom" />
    </div>
    {/* <div className="line-inter" /> */}
    {/* <div className="borders-container">
      <div className="line-top" />
      <div className="line-bottom" />
      <div className="line-right" />
      <div className="line-left" />
      <Menu />
      <div className="line-inter" />
    </div> */}
  </>
);

export default Header;
