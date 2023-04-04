import React from "react";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <Header />
      <div>
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
