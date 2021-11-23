import backgroundImage from '../../assets/images/smiling-woman-username-page.jpg';
import warningIcon from '../../assets/icons/warning.svg';
import checkIcon from '../../assets/icons/check.svg';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserContext from '../../context/user-context';

const PickUsername = () => {
    const userContext = useContext(UserContext)
    const [username, setUsername] = useState(userContext.user.username || '')
    const handleChange = (event) => {
        setUsername(event.target.data)
    }

    const navigate = useNavigate()
    return (
        <div className={styles.wrapper}>
        <div className={styles.progressLine}></div>
        <div className={styles.flexSection}>
            <img src={backgroundImage} className={styles.backgroundImage} alt="Smiling Woman" />
            <div className={styles.formSection}>
                <div className={styles.headerSection}>
                    <h1>Hi, What’s your name?</h1>
                    <h4>We can be on a first name basis.</h4>
                </div>
                <form>
                    <input className={styles.nameInput} type="text" name="username" value={username} onChange={handleChange} placeholder="Type your name here" />
                    <div className={styles.errorMessage}>
                        <img src={warningIcon} alt="warning icon" />
                        <span>Please fill this in</span>
                    </div>
                    
                    <div className={styles.submitSection}>
                        <button onClick={() => navigate('/')} className={styles.submitButton}>Ok
                            <img src={checkIcon} alt="check icon" /></button>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default PickUsername