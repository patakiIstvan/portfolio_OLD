import React from 'react';

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__main">
        <div class="footer__main__col1">
          <h3 class="footer__main__title">Join our mailing list</h3>
          <form action="">
            <label for="fn">First name</label>
            <input type="text" name="" id="fn" placeholder="" />
            <label for="mail">Email</label>
            <input type="email" name="" id="mail" />
            <button>Subscribe</button>
          </form>
        </div>
        <div class="footer__main__col2">
          <h3 class="footer__main__title">Explore</h3>
          <a href="/">home</a>
          <a href="/tickets">tickets</a>
          <a href="/bands">bands</a>
          <a href="/contact">contact</a>
        </div>

        <div class="footer__main__col3">
          <h3 class="footer__main__title">Get in touch</h3>
          <a href="/">home</a>
          <a href="/about">tickets</a>
        </div>
      </div>
      <div class="footer__credit">
        <p>&copyCopyright 2021 - István</p>
      </div>
    </footer>
  );
}

export default Footer;
