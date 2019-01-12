import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import './logo.scss'

export default function Logo({ isSmall }) {
  return (
    <Link to="/" className="logo-link">
      <div className={classNames('logo', { 'logo--small': isSmall })}>
        <span className="logo__majority">MAJORITY</span>
      </div>
    </Link>
  )
}
