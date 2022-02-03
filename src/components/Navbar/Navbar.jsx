import React from 'react'
import '../../app.scss'

const menuIcon = document.querySelector('#menuIcon');
const nav = document.querySelector('.nav');

function navList() {
  menuIcon.classList.toggle('uil-times');
  nav.classList.toggle('active');
}

// window.onscroll = () => {
//   menuIcon.classList.remove('uil-times');
//   nav.classList.remove('active');
// }

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <span>Pataki István</span>
      </div>
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
      <i onClick={navList} className="menuIcon uil uil-bars"></i>
    </header>
  )
}

export default Navbar
