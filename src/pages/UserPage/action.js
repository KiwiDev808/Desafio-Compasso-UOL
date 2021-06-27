import { formatDate } from '../../utils/formatDate'

export const renderView = (viewOption, repos, starreds) => {
  const viewArr = viewOption === 'Repository' ? repos : starreds
  const mappedView = viewArr.map((item) => {
    return {
      name: item.name,
      url: item.html_url,
      stars: item.stargazers_count,
      forks: item.forks_count,
      lastUpdated: formatDate(item.updated_at),
      description: item.description,
      language: item.language,
    }
  })
  return mappedView
}
