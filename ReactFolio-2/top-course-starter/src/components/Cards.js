import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  const allCourses = [];
  const getCourses = () => {
    // it's give array
    console.log(Object.values(courses));
    Object.values(courses).forEach((courseCategroy) => {
      console.log(courseCategroy);
      courseCategroy.forEach((course) => {
        console.log(course);
        allCourses.push(course);
      });
    });
  };
  getCourses();
  console.log(allCourses);

  return (
    <div>
      {allCourses.map((course) => {
        console.log(course);
        return <Card key={course.id} propCourse={course} />;
      })}
    </div>
  );
};

export default Cards;
