import React from 'react'
import './navbar.scss';

function Navbar() {
  return (
    <header class="navbar">
      <div class="logo">
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
      <i id="menuIcon" class="uil uil-bars"></i>
    </header>
  )
}

export default Navbar
