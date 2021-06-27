import React from 'react'
import styles from './styles.module.scss'

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}>
        <div className={styles.dot1}></div>
        <div className={styles.dot2}></div>
      </div>
    </div>
  )
}

export default Loading
