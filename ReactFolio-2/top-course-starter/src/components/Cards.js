import React from "react";
import { useState } from "react";
import Card from "./Card";
import NoDataFound from "./NoDataFound";

const Cards = ({ courses, category, setCategory }) => {
  const [likedCourses, setLikedCourses] = useState([]);
  // console.log(likedCourses);
  console.log(courses);
  let allCourses = [];
  console.log(allCourses);
  const getCourses = () => {
    if (category === "All") {
      // it's give array
      Object.values(courses).forEach((courseCategroy) => {
        courseCategroy.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      console.log("Luta A Raja");
      //Mai sirf specific category ka data array karunga
      console.log(courses[category]);
      return courses[category];
    }
  };
  console.log(getCourses());
  // getCourses function stored the both return value
  let a = getCourses();
  console.log(a);
  console.log(allCourses);
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {a?.map((course) => {
        return (
          <Card
            key={course.id}
            propCourse={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
