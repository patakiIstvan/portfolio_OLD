import React from 'react';
import linkedinIcon from '../../assets/images/icon_linkedin.png';
import githubIcon from '../../assets/images/icon_github.png';
import facebookIcon from '../../assets/images/icon_facebook.png';

function Footer() {
  return (
    <footer id="footer" class="footer section">
      <div className="icon__container">
        <a href="https://linkedin.com/in/patakiistvan">
          <img src={linkedinIcon} alt="icon" className="footer__icon" />
        </a>
        <a href="https://github.com/patakiIstvan">
          <img src={githubIcon} alt="icon" className="footer__icon" />
        </a>
        <a href="https://www.facebook.com/istvan.pataki.39/">
          <img src={facebookIcon} alt="icon" className="footer__icon" />
        </a>
      </div>
      {/* <h2 className="section__title">Contact me</h2>
      <span className="section__subtitle">Get in touch</span>
      <div class="footer__container grid">
        <div>

          <div className="contact__information">
            <i className="uil uil-phone contact__icon"></i>
            <div>
              <h3 className="contact__title">Call me</h3>
              <span className="contact__subtitle">999-777-666</span>
            </div>
          </div>
          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">xddf@fdsfds.com</span>
            </div>
          </div>

        </div>
        <form action="" className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="" className="contact__label">Name</label>
              <input type="text" className="contanct__input" />
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact__label">Email</label>
              <input type="email" className="contanct__input" />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="" className="contact__label">Name</label>
            <input type="text" className="contanct__input" />
          </div>
          <div className="contact__content">
            <label htmlFor="" className="contact__label">Name</label>
            <textarea name="" id="" cols="0" rows="7" className="contact__input"></textarea>
          </div>
          <div>
            <a href="https://patakiistvan.netlify.app" className="button button--flex">
              Send
              <i className="uil uil-message contact__icon"></i>
            </a>
          </div>
        </form>
      </div> */}
    </footer>
  );
}

export default Footer;
