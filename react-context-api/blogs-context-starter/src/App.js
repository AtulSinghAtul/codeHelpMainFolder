import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import DarkMode from "./components/DarkMode";
import "./App.css";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center gap-y-6">
      <DarkMode />
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
