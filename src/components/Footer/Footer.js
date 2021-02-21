import { Link } from 'react-router-dom'

import styles from './Footer.module.css'


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>

        <Link to='/' className={styles.link}>Home</Link>
        <p className={styles.dot}>•</p>
        <Link to='/about' className={styles.link}>About</Link>

      </div>
    </div>
  )
}

export default Footer
