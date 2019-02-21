import React, { Component } from 'react'
import Helmet from 'react-helmet'
import classNames from 'classnames'

import Header from './header'
import Footer from './Footer'
import Drawer from './drawer/drawer.component'
import 'modern-normalize/modern-normalize.css'
import './all.scss'

const _isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

class Layout extends Component {
  state = {
    menuOpen: false,
    isMobile: _isMobile(),
  }

  componentDidMount() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
    document.addEventListener('click', this.onDocumentClick)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
    document.removeEventListener('click', this.onDocumentClick)
  }

  onResize = () => {
    const isMobile = _isMobile()
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile })
    }
  }

  isHamburger = element => {
    const classList = element.classList
    if (!classList) return false
    return classList.contains('hamburger')
  }

  onDocumentClick = evt => {
    let targetElement = evt.target
    const flyoutElement = document.getElementById('drawer')

    do {
      if (targetElement === flyoutElement || this.isHamburger(targetElement)) {
        return
      }
      targetElement = targetElement.parentNode
    } while (targetElement)

    this.setMenuOpen(false)
  }

  setMenuOpen = menuOpen => this.setState({ menuOpen })

  render() {
    const { bodyClass, children } = this.props
    return (
      <div className="majority">
        <Helmet
          bodyAttributes={{
            class: bodyClass,
          }}
        >
          <title>East Bay Majority</title>

          <link rel="icon" type="image/png" href="/favicon.ico" />

          <meta
            name="description"
            content="News for the East Bay's diverse, working-class majority. A publication by the East Bay Chapter of the Democratic Socialists of America."
          />

          <meta
            name="google-site-verification"
            content="kB_f4HWcQtu3pvQxjI5bJVO7PNqbEIQb006RLpAtphQ"
          />

          <meta property="og:site_name" content="East Bay Majority" />
          <meta property="og:url" content="https://eastbaymajority.com" />
          <meta property="og:type" content="website" />

          <link
            href="https://fonts.googleapis.com/css?family=Anton"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Rasa:400,500,600"
            rel="stylesheet"
          />
        </Helmet>
        <Drawer
          isOpen={!this.state.isMobile && this.state.menuOpen}
          onClose={() => this.setMenuOpen(false)}
        />
        <Header
          setMenuOpen={this.setMenuOpen}
          menuOpen={this.state.menuOpen}
          isMobile={this.state.isMobile}
        />
        <div
          className={classNames({
            blurred: this.state.isMobile && this.state.menuOpen,
          })}
        >
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
