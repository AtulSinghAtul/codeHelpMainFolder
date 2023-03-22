import React from "react";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";

const App = () => {
  const [data, setData] = useState(filterData);
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState();
  console.log(category);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const apiFetch = await fetch(apiUrl);
        const output = await apiFetch.json();
        setApiData(output.data);
        // console.log(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter
            filterData={data}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] min-h-[50vh]: mx-auto flex flex-wrap  justify-center items-center">
          {loading ? (
            <Spinner />
          ) : (
            <Cards
              courses={apiData}
              category={category}
              setCategory={setCategory}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
