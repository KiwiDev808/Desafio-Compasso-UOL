import { Router } from './routes/Router'
import styles from './styles/app.module.scss'
import './styles/global.scss'

function App() {
  return (
    <div className={styles.wrapper}>
      <Router />
    </div>
  )
}

export default App
