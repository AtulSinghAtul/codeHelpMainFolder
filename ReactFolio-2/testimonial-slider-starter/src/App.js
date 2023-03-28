import React from "react";
import Testimonial from "./components/Testimonial";
import data from "./data";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gray-300 ">
      <div className="text-center">
        <div>
          <h1 className="text-4xl font-bold"> Our Testimonials</h1>
        </div>

        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>

        <div>
          <Testimonial review={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
