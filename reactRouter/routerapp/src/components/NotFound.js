import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };

  function backHandler() {
    navigate(-1);
  }

  return (
    <div>
      <h1>Not Found Page</h1>
      <button onClick={clickHandler}>Move to Home page</button>

      <button onClick={backHandler}>Go Back Previous Page</button>
    </div>
  );
}

export default NotFound;
