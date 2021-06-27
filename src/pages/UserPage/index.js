import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Loading } from '../../components'
import { Navbar, RepoList, UserInfo, UserNotFound } from './components'
import { useSearchUser } from './hooks'

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
`

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
    <PageContainer>
      <UserInfo userData={userInfo} />
      <Navbar setView={setViewOption} view={viewOption} />
      <RepoList viewOption={viewOption} repos={repos} starreds={starreds} />
    </PageContainer>
  )
}

export default UserPage
