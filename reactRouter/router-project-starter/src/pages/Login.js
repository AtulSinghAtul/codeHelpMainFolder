import React from "react";
import Templets from "../components/Templets";
import loginImg from "../assets/login.png";

function Login({ setIsLoggedIn }) {
  return (
    <div>
      <Templets
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond"
        desc2="Build skills for today, tomorrow, and beyond"
        image={loginImg}
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default Login;
