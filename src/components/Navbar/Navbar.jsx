import React from 'react'

function Navbar({ toggleNav }) {
  return (
    <header className="navbar">
      <div className="logo">
        <span>Pataki István</span>
      </div>
      <nav className="nav">
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
      <i onClick={toggleNav} className="menuIcon uil uil-bars"></i>
    </header>
  )
}

export default Navbar
