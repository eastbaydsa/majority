import React, { Component } from 'react'

import './footer.scss'
import NewsletterSignup from '../newsletter-signup'
import Logo from '../Logo'
import ebdsaLogo from '../../img/ebdsa-logo@2x.png'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__columns">
            <div className="footer__column footer__column--links">
              <NewsletterSignup />
            </div>
            <div className="footer__column footer__column--logos">
              <Logo isSmall />
              <div className="ebdsa">
                <img src={ebdsaLogo} alt="East Bay DSA" />
                <p>
                  A publication of the
                  <br />
                  Democratic Socialists of America,
                  <br />
                  East Bay chapter.
                  <br />
                  <a href="mailto:majority@eastbaydsa.org">
                    majority@eastbaydsa.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
