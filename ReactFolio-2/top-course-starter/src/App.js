import React from "react";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

const App = () => {
  const [data, setData] = useState(filterData);
  const [apiData, setApiData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiFetch = await fetch(apiUrl);
        const output = await apiFetch.json();
        setApiData(output.data);
        console.log(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    fetchData();
  }, []);

  // async function api() {
  //   const ap = await fetch(apiUrl);
  //   console.log(await ap.json());
  // }
  // api();

  return (
    <div>
      <Navbar />

      <Filter filterData={data} />

      <Cards courses={apiData} />
    </div>
  );
};

export default App;
