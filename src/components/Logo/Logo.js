import React from 'react'
import { Link } from 'gatsby'
import './logo.scss'

export default function Logo() {
  return (
    <Link to="/">
      <div className="logo">
        <span className="logo__east-bay">EAST BAY</span>
        <span className="logo__majority">MAJORITY</span>
      </div>
    </Link>
  )
}
