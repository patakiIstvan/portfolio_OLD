import React from 'react';

const Slidebar = ({ navMenu, toggleNav }) => {
  return <div className={navMenu ? 'isOpen slidebar' : 'isClose slidebar'} onClick={toggleNav} >
    <i onClick={toggleNav} className="menuicon uil uil-times"></i>
    <nav className="nav">
      <ul>
        <li><a href="#home">Home</a></li>
      </ul>
      {/* <ul>
        <li><a href="#home">About me</a></li>
      </ul> */}
      <ul>
        <li><a href="#projects"> Projects</a></li>
      </ul>
      {/* <ul>
        <li><a href="#home">Technical skills</a></li>
      </ul> */}
      <ul>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
    <i className="menuIcon uil uil-bars"></i>
  </div >;
};

export default Slidebar;
