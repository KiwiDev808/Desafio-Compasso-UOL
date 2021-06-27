import React from 'react'
import { renderView } from '../../action'
import styles from './styles.module.scss'

function RepoList({ viewOption, repos, starreds }) {
  const currView = renderView(viewOption, repos, starreds)

  return (
    <div className={styles.repoListContainer}>
      {currView.map((item) => {
        return (
          <div>
            <a href={item.url}>{item.name}</a>
            <p>{item.description}</p>

            <div className={styles.repoStatistics}>
              {item.language && (
                <span className={styles.language}>{item.language}</span>
              )}
              {item.stars ? <span>stars: {item.stars}</span> : ''}
              {item.forks ? <span>forks: {item.forks}</span> : ''}
              <span>Updated on {item.lastUpdated}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RepoList
