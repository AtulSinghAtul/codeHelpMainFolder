import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ propCourse, likedCourses, setLikedCourses }) => {
  function likedHandler() {
    console.log("pahle se hai");
    //logic
    if (likedCourses.includes(propCourse.id)) {
      //yadi pahle se like hua pada tha to ham unlike karenge
      setLikedCourses((prev) => prev.filter((cid) => cid !== propCourse.id));
      toast.warning("Removed Successfully");
    } else {
      // yadi pahle se unlike hai to ham like karne wale hain
      console.log("not liked");
      if (likedCourses.length === 0) {
        console.log("0");
        setLikedCourses([propCourse.id]);
      } else setLikedCourses((prevState) => [...prevState, propCourse.id]);
      toast.success("Liked Successfully");
    }
  }
  // console.log(propCourse);
  return (
    <div className="w-[300px]  bg-bgDark rounded-md overflow-hidden bg-opacity-80 ">
      <div className="w-[100%] relative">
        <img className="w-[100%]" src={propCourse.image.url}></img>

        <div className="w-[35px] h-[35px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center ">
          <button onClick={likedHandler}>
            {likedCourses.includes(propCourse.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder />
            )}
          </button>
        </div>
      </div>

      <div className="m-3">
        <p className="text-white font-semibold text-lg leading-6">
          {propCourse.title}
        </p>
        <p className="mt-2 text-white">
          {propCourse.description.length > 100
            ? propCourse.description.substring(0, 100)
            : propCourse.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
