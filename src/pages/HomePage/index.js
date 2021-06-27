import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToUserPage } from '../../routes/coordinator'
import styles from './styles.module.scss'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  let history = useHistory()

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    goToUserPage(history, searchQuery)
  }

  return (
    <main className={styles.homePageContainer}>
      <form>
        <input
          placeholder="Search for a user, e.g: kiwidev808"
          onChange={handleInputChange}
          value={searchQuery}
        />
        <button onClick={handleSearch}>Pesquisar</button>
      </form>
    </main>
  )
}

export default HomePage
