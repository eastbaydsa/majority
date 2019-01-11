import React, { Component } from 'react';
import './footer.scss';
import Logo from '../Logo';
import ebdsaLogo from '../../img/ebdsa-logo@2x.png'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__columns">
            <div className="footer__column footer__column--links">

            </div>
            <div className="footer__column footer__column--logos">
              <img className="footer__ebdsa-logo" src={ebdsaLogo} alt="East Bay DSA" />
              <Logo />
            </div>
          </div>
          
        </div>
      </footer>
    );
  }
}

export default Footer
