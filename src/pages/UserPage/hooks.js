import { useEffect, useState } from 'react'
import { Github } from '../../services/github'

export const useSearchUser = (username) => {
  const [userInfo, setUserInfo] = useState({})
  const [repos, setRepos] = useState([])
  const [starreds, setStarreds] = useState([])

  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const searchUser = async (user) => {
      try {
        const requestUserInfo = await Github.getUser(user)
        const requestRepos = await Github.getRepositories(user)
        const requestStarreds = await Github.getStarreds(user)

        setUserInfo(requestUserInfo)
        setRepos(requestRepos)
        setStarreds(requestStarreds)
      } catch (error) {
        setNotFound(true)
      } finally {
        setLoading(false)
      }
    }
    searchUser(username)
  }, [username])

  return { userInfo, repos, starreds, loading, notFound }
}
