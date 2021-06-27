import axios from 'axios'

axios.defaults.baseURL = 'https://api.github.com/users'

export class Github {
  static async getUser(username) {
    const request = axios.get(`/${username}`)
    return request.then((response) => response.data)
  }

  static async getRepositories(username) {
    const request = axios.get(`/${username}/repos`)
    return request.then((response) => response.data)
  }

  static async getStarreds(username) {
    const request = axios.get(`/${username}/starred`)
    return request.then((response) => response.data)
  }
}
