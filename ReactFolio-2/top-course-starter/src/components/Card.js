import React from "react";
import { FcLike } from "react-icons/fc";

const Card = ({ propCourse }) => {
  console.log(propCourse);
  return (
    <div>
      <div>
        <img src={propCourse.image.url}></img>

        <div>
          <button>
            <FcLike fontSize="1.75rem" />
          </button>
        </div>
      </div>

      <div>
        <p>{propCourse.title}</p>
        <p>{propCourse.description}</p>
      </div>
    </div>
  );
};

export default Card;
