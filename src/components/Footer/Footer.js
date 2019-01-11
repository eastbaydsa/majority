import React, { Component } from 'react'
import './footer.scss'
import Logo from '../Logo'
import ebdsaLogo from '../../img/ebdsa-logo@2x.png'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__columns">
            <div className="footer__column footer__column--links" />
            <div className="footer__column footer__column--logos">
              <Logo />
              <div className="ebdsa">
                <img src={ebdsaLogo} alt="East Bay DSA" />
                <p>
                  A publication by the
                  <br />
                  East Bay Chapter of the
                  <br />
                  Democratic Socialists of America
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
