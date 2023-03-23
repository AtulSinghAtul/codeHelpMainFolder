import React from "react";
import { useNavigate } from "react-router-dom";

function Support() {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("*");
  }

  function backHandler() {
    navigate(-1);
  }

  return (
    <div>
      <h1>This is Support Page</h1>
      <button onClick={clickHandler}>Move to Not Found Page</button>

      <br />
      <button onClick={backHandler}>Go Back Previous Page</button>
    </div>
  );
}

export default Support;
