import React from 'react';
import '../../app.scss'

const Slidebar = ({ navMenu, toggleNav }) => {
  return <div className={navMenu ? 'isOpen slidebar' : 'isClose slidebar'} navMenu={navMenu} onClick={toggleNav} >
    <i onClick={toggleNav} className="menuicon uil uil-times"></i>
    <nav class="nav">
      <ul>
        <li><a href="https://patakiistvan.netlify.app">Home</a></li>
      </ul>
      <ul>
        <li><a href="https://patakiistvan.netlify.app">About me</a></li>
      </ul>
      <ul>
        <li><a href="https://patakiistvan.netlify.app"> Projects</a></li>
      </ul>
      <ul>
        <li><a href="https://patakiistvan.netlify.app">Technical skills</a></li>
      </ul>
      <ul>
        <li><a href="https://patakiistvan.netlify.app">Contact</a></li>
      </ul>
    </nav>
    <i className="menuIcon uil uil-bars"></i>
  </div >;
};

export default Slidebar;
