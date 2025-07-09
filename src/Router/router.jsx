import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from '../pages/Signincomp/Signin';
import Signup from '../pages/Signupcomp/Signup';
import ForgotPassword from "../pages/Forgotpassword/forgot.jsx";
import ResetPassword from '../pages/Resetpassword/reset.jsx';

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
  );
}
