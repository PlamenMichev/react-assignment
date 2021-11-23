import LoginForm from '../../components/login-form';
import Navigation from '../../components/navigation';
import backgroundImage from '../../assets/images/smiling-woman-auth-pages.jpg';
import styles from './index.module.css';

const RegisterPage = ({ isLoginScreen }) => {

    return (
    <>
        <Navigation />
        <LoginForm isLoginScreen={isLoginScreen} />
        <img src={backgroundImage} className={styles.backgroundImage} alt="Smiling Woman" />
    </>)
}

export default RegisterPage