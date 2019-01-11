import React from 'react';
import { Link } from 'gatsby'
import './_logo.scss';

export default function Logo() {
  return (
    <Link to="/">
      <div className="logo">
        <span className="logo__the">THE</span>
        <span className="logo__majority">MAJORITY</span>
      </div>
    </Link>
  )
}
