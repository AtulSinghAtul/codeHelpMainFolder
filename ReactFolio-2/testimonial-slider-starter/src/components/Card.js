import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  const review = props.review;
  console.log(props.review);
  return (
    <div className="flex flex-col md:relative">
      <div className=" mx-auto absolute top-[-7px]">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25] "
          src={review.image}
        />
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-600px] left-[100px] z-[10]"></div>
      </div>

      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize tracking-wider ">
          {review.name}
        </p>
        <p className="text-violet-300 uppercase text-sm ">{review.job}</p>
      </div>

      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 text-slate-500">
        <p>{review.text}</p>
      </div>

      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
