import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import styles from './logo.module.scss'

export default function Logo({ isSmall }) {
  return (
    <Link to="/" className={styles.link}>
      <div className={classNames(styles.logo, { [styles.small]: isSmall })}>
        MAJORITY
      </div>
    </Link>
  )
}
