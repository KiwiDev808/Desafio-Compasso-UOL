import React from 'react'
import { useHistory } from 'react-router-dom'
import pageNotFound from '../../assets/pageNotFound.png'
import { goToHome } from '../../routes/coordinator'
import styles from './styles.module.scss'

const NotFound = () => {
  let history = useHistory()

  return (
    <main className={styles.notFoundPageContainer}>
      <img alt="Page not found" src={pageNotFound} />
      <button onClick={() => goToHome(history)}>Voltar</button>
    </main>
  )
}

export default NotFound
