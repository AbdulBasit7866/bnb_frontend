import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ForgotPassword from '../components/ForgetPassword';
import OtpVerification from '../components/OtpVerification';

export default function AppRoute() {
  return (
    <Routes>
      
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-verification" element={<OtpVerification />} />
    </Routes>
  );
}
