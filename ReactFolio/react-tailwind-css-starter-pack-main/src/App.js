import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
  }

  function increaseHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className=" w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-10 bg-gray-700 text-white">
      <div className="text-[#0398d4] text-2xl">Increment & Decrement</div>

      <div className=" flex justify-center items-center  bg-white text-black px-4 py-3 gap-12 text-[25px] rounded-sm">
        <button onClick={decreaseHandler}>-</button>

        <div className="w-[2rem] h-[2rem] font-bold">{count}</div>

        <button onClick={increaseHandler}>+</button>
      </div>

      <div
        onClick={resetHandler}
        className="bg-[#0398d4] px-3 py-1 rounded-sm hover:cursor-pointer"
      >
        Reset
      </div>
    </div>
  );
}

export default App;
