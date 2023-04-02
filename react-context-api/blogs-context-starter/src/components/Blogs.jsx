import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import Card from "./Card";

// import Card from "../components/Card";

const Blogs = () => {
  // consume data from context
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[670px] h-[100%] flex flex-col justify-center items-center gap-y-9 my-[100px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <p>No post found</p>
      ) : (
        posts.map((post) => <Card post={post} />)
      )}
    </div>
  );
};

export default Blogs;
