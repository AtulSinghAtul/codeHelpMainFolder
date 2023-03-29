import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";

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
        posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col justify-center items-start gap-y-2 "
          >
            <p className="text-lg font-bold">{post.title}</p>

            <p className="text-[12px] flex gap-x-1">
              By <span className="italic ">{post.author}</span>
              on<span className="underline">{post.category}</span>
            </p>

            <p className="text-[10px]">Posted on {post.date}</p>

            <p className="text-xm mt-[10px]">{post.content}</p>

            <div className="flex gap-x-2">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="text-blue-700 underline font-bold text-[10px] mt-[4px]"
                  >{`#${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
