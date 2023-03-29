import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//step -1: create context

export const AppContext = createContext();

//step -2: preparing data

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

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
    handleChange,
  };

  async function fetchBlogPosts(page = 1) {
    setLoading(true);

    const url = `${baseUrl}?page=${page}`;
    // let url = "https://codehelp-apis.vercel.app/api/get-blogs?page=1";
    //https://codehelp-apis.vercel.app/api/get-blogs?page=1

    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      console.log(data.posts);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Api fat gayi");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }

    setLoading(false);
  }

  function handleChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  // passing data
  return (
    <AppContext.Provider value={value}>
      {children}
      {console.log(children)}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
