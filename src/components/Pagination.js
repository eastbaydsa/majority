import React from 'react'
import { Link } from 'gatsby'
import styles from './pagination.module.scss'

const Pagination = ({ pageContext, pathPrefix }) => {
  console.log(pageContext)
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <nav className={styles.pagination} role="navigation">
      <div className="navbar navbar-menu">
        {previousPagePath && (
          <div className="navbar-item">
            <Link to={previousPagePath} rel="prev">
              ‹ Previous
            </Link>
          </div>
        )}
        {nextPagePath && (
          <div className="navbar-item">
            <Link to={nextPagePath} rel="next">
              Next ›
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Pagination
