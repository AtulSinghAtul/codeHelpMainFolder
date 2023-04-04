import React, { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import BlogDetailes from "../components/BlogDetailes";

// console.log(loading);
// console.log(setLoading);
const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const location = useLocation();
  const { loading, setLoading } = createContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);
  console.log(blogId);

  async function fetchRelatedBlogs() {
    // setLoading(true);
    const url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log(url);

    try {
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedBlog(data.relatedBlogs);
    } catch (error) {
      console.log("error aa gaya hai blog id wali call se");
      setBlog(null);
      setRelatedBlog([]);
    }
    // setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center mt-[100px]">
        <div className="flex self-baseline  mr-7 reelative">
          <button
            className="bg-blue-600 px-4 py-2 text-white rounded-md fixed -ml-16"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>

        {loading ? (
          <p>loading</p>
        ) : blog ? (
          <div className="flex flex-col justify-center items-start w-5/12">
            <BlogDetailes post={blog} />
            <h2 className="mt-10 mb-5 font-bold text-3xl">Related Blogs :</h2>
            {relatedBlog.map((post) => {
              return (
                <div key={post.id}>
                  <BlogDetailes post={post} />
                </div>
              );
            })}
          </div>
        ) : (
          <p>No Blog Found</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
