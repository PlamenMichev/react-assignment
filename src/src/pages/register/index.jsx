import LoginFormn from '../../components/login-form';
import Navigation from '../../components/navigation';
import backgroundImage from '../../assets/images/smiling-woman-auth-pages.jpg';
import styles from './index.module.css';

const RegisterPage = (props) => {

    return (
    <>
        <Navigation />
        <LoginFormn />
        <img src={backgroundImage} className={styles.backgroundImage} alt="Smiling Woman" />
    </>)
}

export default RegisterPage