import { Link } from 'react-router-dom'
import styles from './index.module.css'

const Navigation = (props) => {
    return (
    <div className={styles.wrapper}>
        <Link to="#" className={styles.logo}>Girlmantra</Link>
        <div className={styles.navLinks}>
            <Link to="#">Programs</Link>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/login" className={styles.loginButton}><span>Log in</span></Link>
        </div>
    </div>)
}

export default Navigation