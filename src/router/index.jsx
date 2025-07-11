import { Routes, Route } from "react-router-dom";
import Signup from "../pages/SignUp";
import Login from "../pages/SignIn";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
       <Route path="/signup" element={<Signup/>} />
    </Routes>
  );
};
