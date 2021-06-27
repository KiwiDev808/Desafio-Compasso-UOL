import React from 'react'
import styles from './styles.module.scss'

function Navbar({ setView, view }) {
  return (
    <nav className={styles.navbarContainer}>
      <button
        onClick={() => setView('Repository')}
        className={view === 'Repository' ? styles.activeView : ''}
      >
        Repositories
      </button>
      <button
        onClick={() => setView('Starred')}
        className={view === 'Starred' ? styles.activeView : ''}
      >
        Starreds
      </button>
    </nav>
  )
}

export default Navbar
