import styles from './index.module.css'
import googleIcon from '../../assets/icons/google.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [rememberMeChecked, setRememberMeChecked] = useState(true)
    return (
        <div className={styles.wrapper}>
            <div className={styles.headerSection}>
                <h1>Sign Up</h1>
                <h4>Enter your email to sign in</h4>
            </div>
            <div className={styles.googleIconWrapper}>
                <img src={googleIcon}  alt="Google Icon" />
            </div>
            <form className={styles.emailForm}>
                <label htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" placeholder="Your email" />

                <div className={styles.checkboxSection}>
                    <label className={styles.switch}>
                        <input type="checkbox" name="rememberMe" value={rememberMeChecked} onChange={() => setRememberMeChecked(!rememberMeChecked)} />
                        <div className={styles.slider}></div>
                    </label>
                    <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <button className={styles.submitButton}>Sign Up</button>
            </form>

            <p className={styles.redirectText}>Don't have an account? <Link to="/login">Sign up</Link></p>
        </div>
    )
}

export default LoginForm