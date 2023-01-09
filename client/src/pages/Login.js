import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUp from "./SignUp";

function Login({ setUser }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      {isVisible ? (
        <SignUp setUser={setUser} setIsVisible={setIsVisible} />
      ) : (
        <LoginForm setUser={setUser} setIsVisible={setIsVisible} />
      )}
    </div>
  );
}

export default Login;
