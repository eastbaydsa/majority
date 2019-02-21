import React from 'react'
import classNames from 'classnames'
import styles from './drawer.module.scss'

import Menu from '../menu'

const Drawer = ({ isOpen, onClose }) => (
  <div
    className={classNames(styles.drawer, 'drawer', { [styles.open]: isOpen })}
  >
    <Menu onClose={onClose} inDrawer />
  </div>
)

export default Drawer
