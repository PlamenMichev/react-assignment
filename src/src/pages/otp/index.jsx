import styles from './index.module.css'
import Navigation from '../../components/navigation';
import backgroundImage from '../../assets/images/smiling-woman-auth-pages.jpg';
import OtpSection from '../../components/otp-section';

const OtpPage = () => {
    return (
    <>
        <Navigation />
        <OtpSection />
        <img src={backgroundImage} className={styles.backgroundImage} alt="Smiling Woman" />
    </>)
}

export default OtpPage