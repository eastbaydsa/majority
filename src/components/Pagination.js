import React from 'react'
import { Link } from 'gatsby'
import styles from './pagination.module.scss'

const Pagination = ({ pageContext, pathPrefix }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <nav className={styles.pagination} role="navigation">
      <div className="navbar navbar-menu">
        {previousPagePath && (
          <div className="navbar-item">
            <Link to={previousPagePath} rel="prev">
              ‹ Previous Page
            </Link>
          </div>
        )}
        {nextPagePath && (
          <div className="navbar-item">
            <Link to={nextPagePath} rel="next">
              Next Page ›
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Pagination
