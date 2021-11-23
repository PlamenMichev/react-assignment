import { Link } from 'react-router-dom'
import styles from './index.module.css'
import userProfilePicture from '../../assets/images/user-profile-image.jpg'

const Navigation = ({ isLoggedIn }) => {
    return (
    <div className={styles.wrapper}>
        <Link to="#" className={styles.logo}>Girlmantra</Link>
        <div className={styles.navLinks}>
            {isLoggedIn ?
            <>
            <Link to="#">All Programs</Link>
            <Link to="#">All Guides</Link>
            <Link to="#"><img src={userProfilePicture} alt="Profile Picture" /></Link>
            </>
            :
            <> <Link to="#">Programs</Link>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/login" className={styles.loginButton}><span>Log in</span></Link> 
            </>}
        </div>
    </div>)
}

export default Navigation