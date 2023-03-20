import { logDOM } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

const App = () => {
  const [tours, setTours] = useState(data);

  function notInterested(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  function refreshHandler() {
    setTours(data);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left </h2>
        <button className="btn-white" onClick={() => refreshHandler()}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours toursData={tours} notInterested={notInterested}></Tours>
    </div>
  );
};

export default App;
