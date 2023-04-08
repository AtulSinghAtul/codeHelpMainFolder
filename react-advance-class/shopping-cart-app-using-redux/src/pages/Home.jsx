import { useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { useEffect } from "react";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);

  async function fetchProductData() {
    setloading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      // console.log(data);
    } catch (error) {
      console.log("error aa gya g api se" + error);
      setPosts([]);
    }
    setloading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  console.log(posts);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Product key={post.id} item={post} />
          ))}
        </div>
      ) : (
        <p>Post data not found</p>
      )}
    </div>
  );
};

export default Home;
