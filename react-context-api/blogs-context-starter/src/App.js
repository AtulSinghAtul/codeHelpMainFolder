import Home from "../src/pages/Home";
import CategoryPage from "../src/pages/CategoryPage";
import TagPage from "../src/pages/TagPage";
import BlogPage from "../src/pages/BlogPage";

import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
// import DarkMode from "./components/DarkMode";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSearchParams, useLocation } from "react-router-dom";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    console.log(page);

    if (location.pathname.includes("tags")) {
      //tag wala page show karna hai
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      console.log(tag);
      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      console.log(category);
      fetchBlogPosts(Number(page), null, category);
    } else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/blog/:blogId" element={<BlogPage />} />

      <Route path="/tags/:tag" element={<TagPage />} />

      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}
