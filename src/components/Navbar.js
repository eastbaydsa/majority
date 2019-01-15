import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { VelocityTransitionGroup } from 'velocity-react'
import ebdsaLogo from '../img/ebdsa-logo@2x.png'
import SocialMedia from './social-media'

import './navbar.scss'
import Logo from './Logo'

class Navbar extends Component {
  state = {
    stickyHeaderEnabled: false,
  }

  componentDidMount() {
    this.setStickyScrollPos()
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onResize)
  }

  onScroll = () => {
    const scrollPos = window.scrollY
    const stickyHeaderEnabled = scrollPos >= this.stickyHeaderPos
    if (stickyHeaderEnabled !== this.state.stickyHeaderEnabled) {
      this.setState({ stickyHeaderEnabled })
    }
  }

  onResize = () => {
    console.log('onResize')
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
            {this.state.stickyHeaderEnabled && (
              <div className="sticky-header" />
            )}
            <VelocityTransitionGroup
              enter={{ animation: 'fadeIn', duration: 250 }}
            >
              {this.state.stickyHeaderEnabled && (
                <div className="sticky-header-content">
                  <div className="sticky-header-content__inner">
                    <h2>
                      <Link to="/">MAJORITY</Link>
                    </h2>
                    <SocialMedia />
                  </div>
                </div>
              )}
            </VelocityTransitionGroup>

            <div className="header" ref={this.bindHeaderRef}>
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

export default Navbar
