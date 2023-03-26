import React from "react";
import Templets from "../components/Templets";
import signupImg from "../assets/signup.png";

function Signup({ setIsLoggedIn }) {
  console.log(setIsLoggedIn);
  return (
    <Templets
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond"
      desc2="Build skills for today, tomorrow, and beyond"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup;
