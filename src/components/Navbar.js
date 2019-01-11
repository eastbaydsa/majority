import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ebdsaLogo from '../img/ebdsa-logo@2x.png'
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
        <Logo />
        <div className="ebdsa">
          <img src={ebdsaLogo} alt="East Bay DSA" />
          <p>
            A publication by the East Bay Chapter of the
            <br />
            Democratic Socialists of America
          </p>
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
