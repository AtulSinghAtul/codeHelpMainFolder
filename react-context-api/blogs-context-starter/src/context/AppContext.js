import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

//! step -1: create context

export const AppContext = createContext();

//* step -1(A): preparing data

function AppContextProvider({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  // console.log(loading);

  //* step -1(A-b): fetching api data
  async function fetchBlogPosts(page = 1, tag = null, category) {
    console.log(category);
    setLoading(true);

    let url = `${baseUrl}?page=${page}`;

    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }

    console.log(url);

    try {
      const result = await fetch(url);
      const data = await result.json();
      if (!data.posts || data.posts.length === 0)
        throw new Error("Something went wrong");

      // console.log(result);
      console.log(data);

      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in Fetching BlogPosts", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }

    setLoading(false);
  }
  //* step -1(A-c): Handle change page
  function handlePageChange(page) {
    // fetchBlogPosts(page);
    navigate({ search: `?page=${page}` });
    setPage(page);
  }

  //* step -1(A-a): data filling
  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  //! Step- 2 Providing data
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
