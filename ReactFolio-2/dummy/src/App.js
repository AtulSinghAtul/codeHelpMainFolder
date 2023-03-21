import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  // Variation 1 ==> Every Render
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // });

  //  Variation 2 ==> First Render
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // }, []);

  //  Variation 3 ==>on First Render  + whenever dependency changes
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // }, [inputText]);

  //  Variation 4 ==> To hadle Unmounting of a component.
  useEffect(() => {
    // add event listener
    console.log("Eventlistener Added");
    // remove listener
    return () => {
      console.log("Listener Removed");
    };
  }, [inputText]);

  function inputHandler(event) {
    setInputText(event.target.value);
    console.log(inputText);
  }

  return (
    <div className="App">
      <input type="text" onChange={inputHandler}></input>
    </div>
  );
}

export default App;
