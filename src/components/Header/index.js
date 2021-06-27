import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/github.png'
import styles from './styles.module.scss'

const Header = () => {
  console.log(styles.headerContainer)
  return (
    <div>
      <header className={styles.headerContainer}>
        <img src={logo} alt="github logo" />
        <Link to={'/'}>
          <h1>Github User Search</h1>
        </Link>
      </header>
    </div>
  )
}

export default Header
