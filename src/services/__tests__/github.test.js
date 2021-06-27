import axios from 'axios'
import { Github } from '../github'

jest.mock('axios')

describe('Test the mock', () => {
  test('getUser should return userData', async () => {
    const mockUserData = {
      login: 'mock_user_login',
      id: 11111111,
      node_id: 'mock_user_id',
      avatar_url: 'mock_avatar_url',
      type: 'User',
      name: 'mock_user_name',
      company: null,
      blog: '',
      location: 'mock_user_location',
      bio: 'mock_user_bio',
    }

    axios.get.mockResolvedValue({ data: mockUserData })

    const result = await Github.getUser('mock_user_name')
    expect(result.name).toBe('mock_user_name')
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('/mock_user_name')
  })

  test('getRepositories should return User Repositories', async () => {
    const mockUserRepos = [
      {
        id: 111111111,
        name: 'mocked_repo_1',
        full_name: 'mocked_user/mocked_repo_1',
        owner: {
          login: 'mock_user_name',
          id: 111111111,
        },
        html_url: 'https://github.com/mocked_user/mocked_repo_1',
        description: 'mocked_description_1',
        stargazers_count: 0,
        watchers_count: 0,
      },
    ]
    axios.get.mockImplementation(async () => {
      return Promise.resolve({ data: mockUserRepos })
    })
    const result = await Github.getRepositories('mock_user_name')
    expect(result[0].owner.login).toBe('mock_user_name')
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('/mock_user_name/repos')
  })

  test('getStarreds should return Starreds Repositories', async () => {
    const mockUserStarred = [
      {
        id: 111111111,
        name: 'mocked_starred_1',
        full_name: 'mocked_user/mocked_starred_1',
        owner: {
          login: 'mock_user_name',
          id: 111111111,
        },
        html_url: 'https://github.com/mocked_user/mocked_starred_1',
        description: 'mocked_description_1',
        stargazers_count: 0,
        watchers_count: 0,
      },
    ]

    axios.get.mockImplementation(async () => {
      return Promise.resolve({ data: mockUserStarred })
    })
    const result = await Github.getStarreds('mock_user_name')
    expect(result[0].owner.login).toBe('mock_user_name')
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('/mock_user_name/starred')
  })
})
