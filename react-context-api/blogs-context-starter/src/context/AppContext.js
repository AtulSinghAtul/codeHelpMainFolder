import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//! step -1: create context

export const AppContext = createContext();
console.log(AppContext);

//* step -1(A): preparing data

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

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

  //* step -1(A-b): fetching api data
  async function fetchBlogPosts(page = 1, tag, category) {
    setLoading(true);

    let url = `${baseUrl}?page=${page}`;
    if (tag) {
      url = url + `&tag=${tag}`;
    }
    if (category) {
      url = url + `&category=${category}`;
    }

    console.log(url);

    try {
      const result = await fetch(url);
      const data = await result.json();
      if (!data.posts || data.posts.length === 0)
        throw new Error("Something went wrong");

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
    setPage(page);
    fetchBlogPosts(page);
  }

  //! Step- 2 Providing data
  return (
    <AppContext.Provider value={value}>
      {children}
      {console.log(children)}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
