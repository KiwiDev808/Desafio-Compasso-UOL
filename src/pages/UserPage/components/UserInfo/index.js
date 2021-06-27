import React from 'react'
import styles from './styles.module.scss'

function UserInfo({ userData }) {
  return (
    <div className={styles.userInfoContainer}>
      <img alt="user avatar" src={userData.avatar_url} />
      <div className={styles.personalInfo}>
        <div className={styles.userName}>
          <h1>{userData.name}</h1>
          <a href={userData.html_url}>@{userData.login}</a>
        </div>
        <h3>{userData.bio}</h3>
        <div>
          <div>{userData.company && `Company: ${userData.company}`}</div>
          <div>{userData.location && `Location: ${userData.location}`}</div>
          <div>{userData.blog && `Blog: ${userData.blog}`}</div>
        </div>
        <div className={styles.githubInfo}>
          <div>
            <span>{userData.followers}</span>
            <p>Followers</p>
          </div>
          <div>
            <span>{userData.following}</span>
            <p>Following</p>
          </div>
          <div>
            <span>{userData.public_repos}</span>
            <p>Repos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
