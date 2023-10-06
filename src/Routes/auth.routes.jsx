import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { PasswordRecToken } from "../pages/PasswordRecToken";
import { PasswordToken  } from "../pages/PasswordToken";
export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/password-reset" element={<PasswordRecToken />} />
      <Route path='/password-token/:email' element={<PasswordToken />} />
    </Routes>
  );
}
