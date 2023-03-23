import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function clickHandler() {
    console.log("GGGGGGGGGG");
    navigate("/about");
  }

  function backHandler() {
    navigate(-1);
  }

  return (
    <div>
      <h1>This is Home Page</h1>
      <button onClick={clickHandler}>Move to About Page</button>

      <button onClick={backHandler}>Go Back Previous Page</button>
    </div>
  );
}

export default Home;
