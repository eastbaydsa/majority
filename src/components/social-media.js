import React from 'react'
import twitterLogo from '../img/twitter.svg'
import facebookLogo from '../img/facebook.svg'
import './social-media.scss'

const SocialMedia = () => (
  <div className="social">
    <a
      href="https://twitter.com/eastbaymajority"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={twitterLogo} alt="Twitter" className="sm__twitter" />
    </a>
    <a
      href="https://www.facebook.com/EastBayMajority"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={facebookLogo} alt="Facebook" className="sm__facebook" />
    </a>
  </div>
)

export default SocialMedia
