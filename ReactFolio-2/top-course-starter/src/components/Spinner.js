import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center gap-y-1">
      <div className="loader"> </div>
      <p className="textbgDark text-lg font-semibold">Loading....</p>
    </div>
  );
};

export default Spinner;
