import styles from './index.module.css'
import backArrow from '../../assets/icons/back-arrow.svg';
import OtpInput from 'react-otp-input';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OtpSection = () => {
    const [otp, setOtp] = useState('')
    const navigate = useNavigate()
    const {state} = useLocation();

    const handleSubmit = () => {
      if (state.isLoginScreen) {
        navigate('/')
      } else {
        navigate('/pick-username')
      }
    }

    const handleBack = () => {
      navigate(-1)
    }

    return (
    <div className={styles.wrapper}>
       <img onClick={handleBack} className={styles.backArrow} src={backArrow} alt="back icon" />
       <h1>Enter OTP</h1>
       <h4>We’ve sent a 6 digit OTP to your email</h4>
       <OtpInput
        value={otp}
        onChange={(otp) => setOtp(otp)}
        numInputs={6}
        inputStyle={styles.otpInput}
      />
      <button className={styles.resendButton}>Resend OTP</button>
      <button className={styles.submitButton} onClick={handleSubmit}>Sign Up</button>
    </div>)
}

export default OtpSection