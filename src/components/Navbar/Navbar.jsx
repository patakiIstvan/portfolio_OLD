import React from 'react'
import '../../app.scss'

const menuIcon = document.querySelector('#menuIcon');
const nav = document.querySelector('.nav');

function navList() {
  menuIcon.classList.toggle('uil-times');
  nav.classList.toggle('active');
}

window.onscroll = () => {
  menuIcon.classList.remove('uil-times');
  nav.classList.remove('active');
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <span>Pataki István</span>
      </div>
      <nav class="nav">
        <ul>
          <li><a href="https://google.com">Home</a></li>
        </ul>
        <ul>
          <li><a href="https://google.com">About me</a></li>
        </ul>
        <ul>
          <li><a href="https://google.com"> Projects</a></li>
        </ul>
        <ul>
          <li><a href="https://google.com">Technical skills</a></li>
        </ul>
        <ul>
          <li><a href="https://google.com">Contact</a></li>
        </ul>
      </nav>
      <i id="menuIcon" onClick={navList} className="uil uil-bars"></i>
    </header>
  )
}

export default Navbar
