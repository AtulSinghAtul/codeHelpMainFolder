import { React, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Card = () => {
  const { title } = useContext(AppContext);
  return (
    <div>
      <h1>{title}</h1>
      <p>{}</p>
    </div>
  );
};

export default Card;
