import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { VelocityTransitionGroup } from 'velocity-react'
import classNames from 'classnames'
import ebdsaLogo from '../img/ebdsa-logo@2x.png'
import SocialMedia from './social-media'
import Menu from './menu'
import Hamburger from './hamburger/hamburger.component'

import './header.scss'
import Logo from './Logo'

class Header extends Component {
  state = {
    stickyHeaderEnabled: false,
  }

  componentDidMount() {
    this.setStickyScrollPos()
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)
    window.addEventListener('keydown', this.onKeydown)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('keydown', this.onKeydown)
  }

  onScroll = () => {
    const stickyHeaderEnabled = window.scrollY >= this.stickyHeaderPos
    if (stickyHeaderEnabled !== this.state.stickyHeaderEnabled) {
      this.setState({ stickyHeaderEnabled })
    }
  }

  onResize = () => {
    this.setStickyScrollPos()
    this.onScroll()
  }

  bindHeaderRef = ref => {
    this.headerRef = ref
  }

  setStickyScrollPos = () => {
    this.stickyHeaderPos =
      this.headerRef.clientHeight - this.getPaddingBottom(this.headerRef)
  }

  getPaddingBottom = elm => {
    return parseInt(
      window.getComputedStyle(elm, null).getPropertyValue('padding-bottom')
    )
  }

  openMenu = () => this.props.setMenuOpen(true)

  closeMenu = () => this.props.setMenuOpen(false)

  toggleMenu = () => this.props.setMenuOpen(!this.props.menuOpen)

  onKeydown = e => {
    const escKeyCode = 27
    if (e.which === escKeyCode) {
      this.closeMenu()
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `}
        render={data => (
          <>
            {this.props.menuOpen && this.props.isMobile && (
              <Menu onClose={this.closeMenu} />
            )}
            {this.state.stickyHeaderEnabled && (
              <div className="sticky-header" />
            )}
            <VelocityTransitionGroup
              enter={{ animation: 'fadeIn', duration: 250 }}
            >
              {this.state.stickyHeaderEnabled && (
                <div
                  className={classNames('sticky-header-content', {
                    blurred: this.props.menuOpen && this.props.isMobile,
                  })}
                >
                  <div className="sticky-header-content__inner">
                    <div className="sticky-header__left">
                      {!this.props.menuOpen && (
                        <Hamburger isInStickyHeader onClick={this.toggleMenu} />
                      )}
                      <h2>
                        <Link to="/">MAJORITY</Link>
                      </h2>
                    </div>
                    <div className="sticky-header__right">
                      <SocialMedia />
                    </div>
                  </div>
                </div>
              )}
            </VelocityTransitionGroup>

            <div
              className={classNames('header', {
                blurred: this.props.menuOpen && this.props.isMobile,
              })}
              ref={this.bindHeaderRef}
            >
              {!(this.props.menuOpen && this.props.isMobile) && (
                <div className="hamburger-wrapper">
                  <Hamburger onClick={this.toggleMenu} />
                </div>
              )}
              <SocialMedia />
              <Logo />
              <div className="tagline">
                <p>News for the East Bay's diverse, working-class majority.</p>
                <p>
                  Brought to you by the Democratic Socialists of America, East
                  Bay chapter.
                </p>
                <img src={ebdsaLogo} alt="East Bay DSA" />
              </div>
              <nav className="navbar">
                {/* <div className="navbar-start">
              {data.allWordpressPage.edges.map(edge => (
                <Link
                  className="navbar-item"
                  to={edge.node.slug}
                  key={edge.node.slug}
                >
                  {edge.node.title}
                </Link>
              ))}
            </div> */}
              </nav>
            </div>
          </>
        )}
      />
    )
  }
}

export default Header
