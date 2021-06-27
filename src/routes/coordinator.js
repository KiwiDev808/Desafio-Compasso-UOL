const goToHome = (history) => history.push('/')

const goToUserPage = (history, username) => history.push(`/${username}`)

export { goToHome, goToUserPage }
