import React from 'react'
import { useHistory } from 'react-router-dom'
import notFound from '../../../../assets/userNotFound.png'
import { goToHome } from '../../../../routes/coordinator'
import styles from './styles.module.scss'

function UserNotFound() {
  const history = useHistory()

  return (
    <div className={styles.userNotFoundContainer}>
      <img src={notFound} alt="User not found avatar" />
      <h1>User not found</h1>
      <button onClick={() => goToHome(history)}>Voltar</button>
    </div>
  )
}

export default UserNotFound
