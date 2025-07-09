import React, { useState } from 'react';
import { Typography, Button, message } from 'antd';
import './OtpVerification.css'; // Custom styles

const { Title, Text } = Typography;

const OtpVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/, ''); // Only numbers
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== 6) {
      message.error('Please enter all 6 digits');
      return;
    }
    message.success('OTP Verified: ' + enteredOtp);

  };

  const handleResend = () => {
    message.success('OTP Resent to your email!');
  };

  return (
    <div className="otp-container">
      <Title level={3} className="otp-title">OTP Authentication</Title>
      <Text className="otp-subtitle">Enter the 6 digit OTP sent to your email.</Text>
      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target, index)}
            className="otp-input"
          />
        ))}
      </div>
      <Button className="otp-button" type="primary" onClick={handleSubmit}>
        submit
      </Button>
      <div className="otp-resend">
        <Text type="secondary">
          Didn’t receive an OTP?{' '}
          <span className="resend-link" onClick={handleResend}>
            Resend
          </span>
        </Text>
      </div>
    </div>
  );
};

export default OtpVerification;
