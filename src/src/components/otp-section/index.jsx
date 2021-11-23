import styles from './index.module.css'
import backArrow from '../../assets/icons/back-arrow.svg';
import OtpInput from 'react-otp-input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpSection = () => {
    const [otp, setOtp] = useState('')
    const navigate = useNavigate()
    return (
    <div className={styles.wrapper}>
       <img className={styles.backArrow} src={backArrow} alt="back icon" />
       <h1>Enter OTP</h1>
       <h4>We’ve sent a 6 digit OTP to your email</h4>
       <OtpInput
        value={otp}
        onChange={(otp) => setOtp(otp)}
        numInputs={6}
        inputStyle={styles.otpInput}
      />
      <button className={styles.resendButton}>Resend OTP</button>
      <button className={styles.submitButton} onClick={() => navigate('/pick-username')}>Sign Up</button>
    </div>)
}

export default OtpSection