import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const category = location.pathname.split("/").at(-1);

  function clickHandler() {
    navigate(-1);
  }

  return (
    <div className="">
      <Header />
      <div className="flex flex-col justify-center items-center  w-screen">
        <div className="relative -z-30 top-20 -left-[190px] my-8 flex  gap-4 ">
          <button
            className="text-white px-5 py-2 rounded-md bg-red-500"
            onClick={clickHandler}
          >
            back
          </button>
          <h2 className="font-bold text-3xl">
            Blogs on <span> {category}</span>
          </h2>
        </div>
        <Blogs />
      </div>

      <Pagination />
    </div>
  );
};

export default CategoryPage;
