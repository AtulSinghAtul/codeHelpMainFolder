import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handleChange, totalPages } = useContext(AppContext);

  return (
    <div className="flex justify-center items-center gap-3  shadow-lg shadow-black py-3 w-full fixed bottom-0 bg-white ">
      <div className="w-11/12 max-w-[670px] flex justify-between items-center ">
        <div className="flex justify-center items-center gap-3   ">
          {page > 1 && (
            <button
              className="bg-gray-200 px-6 py-2 rounded"
              onClick={() => handleChange(page - 1)}
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              className="bg-gray-200 px-6 py-2 rounded"
              onClick={() => handleChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>

        <p className="font-bold ml-20">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
