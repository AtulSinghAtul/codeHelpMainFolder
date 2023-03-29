import React from "react";

const DarkMode = () => {
  function darkModeHandler() {
    const element = document.body;
    element.classList.toggle();
  }

  return (
    <button
      className="absolute top-5 right-24 w-3 h-3 bg-black z-40"
      onClick={darkModeHandler}
    >
      ghgghjghjjj
    </button>
  );
};

export default DarkMode;
