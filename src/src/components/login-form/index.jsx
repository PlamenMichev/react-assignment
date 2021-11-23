import styles from './index.module.css'
import googleIcon from '../../assets/icons/google.svg'
import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { signInWithGoogle } from '../../services/firebase.js'
import UserContext from '../../context/user-context'

const LoginForm = ({ isLoginScreen }) => {
    const [email, setEmail] = useState('')
    const [rememberMeChecked, setRememberMeChecked] = useState(true)
    const navigate = useNavigate();
    const userContext = useContext(UserContext)

    const handleGoogleLogin = async () => {
        const result = await signInWithGoogle()
        
        userContext.logIn({
            ...result
        }, rememberMeChecked)

        if (isLoginScreen) {
            navigate('/')
        } else {
            navigate('/pick-username')
        }
    }

    const handleEmailLogin = () => {
        navigate('/otp-page', { state: { isLoginScreen: isLoginScreen } })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerSection}>
                <h1>{isLoginScreen ? 'Log In' : 'Sign Up'}</h1>
                <h4>Enter your email to sign in</h4>
            </div>
            <div className={styles.googleIconWrapper}>
                <button className={styles.googleLoginButton} onClick={handleGoogleLogin}>
                    <img src={googleIcon}  alt="Google Icon" />
                </button>
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
                <button className={styles.submitButton} onClick={handleEmailLogin}>{ isLoginScreen ? 'Log In' : 'Sign Up'}</button>
            </form>

            {isLoginScreen ? <p className={styles.redirectText}>Don't have an account? <Link to="/sign-up">Sign up</Link></p> : <p className={styles.redirectText}>Have an account? <Link to="/login">Log in</Link></p> }
        </div>
    )
}

export default LoginForm