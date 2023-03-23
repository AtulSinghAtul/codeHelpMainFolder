import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/support");
  }

  function backHandler() {
    navigate(-1);
  }

  return (
    <div>
      <h1>This is About Page</h1>
      <button onClick={clickHandler}>Move to Support Page</button>

      <button onClick={backHandler}>Go Back Previous Page</button>
    </div>
  );
}

export default About;
