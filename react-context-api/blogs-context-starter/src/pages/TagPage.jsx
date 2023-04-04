import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  function clickHandler() {
    navigate(-1);
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="relative -z-30 top-20 -left-[190px] my-8 flex  gap-4 ">
          <button
            className="text-white px-5 py-2 rounded-md bg-red-500"
            onClick={clickHandler}
          >
            back
          </button>
          <h2 className="font-bold text-3xl">
            Blogs Tagged <span>#{tag}</span>
          </h2>
        </div>

        <Blogs />
      </div>

      <Pagination />
    </div>
  );
};

export default TagPage;
