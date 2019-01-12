import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ebdsaLogo from '../img/ebdsa-logo@2x.png'
import twitterLogo from '../img/twitter.svg'
import facebookLogo from '../img/facebook.svg'
import './navbar.scss'
import Logo from './Logo'

const Navbar = () => (
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
      <div className="header">
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
        <Logo />
        <div className="tagline">
          <p>News for the East Bay's diverse, working-class majority.</p>
          <p>
            Brought to you by the Democratic Socialists of America, East Bay
            chapter.
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
    )}
  />
)

export default Navbar
