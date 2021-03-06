import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components'
import { Navbar, RepoList, UserInfo, UserNotFound } from './components'
import { useSearchUser } from './hooks'
import styles from './styles.module.scss'

const UserPage = () => {
  const { username } = useParams()
  const { userInfo, repos, starreds, loading, notFound } =
    useSearchUser(username)

  const [viewOption, setViewOption] = useState('Repository')

  if (loading) {
    return <Loading />
  }

  if (notFound) {
    return <UserNotFound />
  }

  return (
    <main className={styles.userPageContainer}>
      <UserInfo userData={userInfo} />
      <Navbar setView={setViewOption} view={viewOption} />
      <RepoList viewOption={viewOption} repos={repos} starreds={starreds} />
    </main>
  )
}

export default UserPage
