import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// process.env give us object
let API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif() {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("false");
  // console.log(tag);

  async function fetchData(tag) {
    setLoading(true);

    const { data } = await axios.get(tag ? `${url}&${tag}` : `${url}`);
    const imageSourse = await data.data.images.downsized.url;
    setGif(imageSourse);

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
}

export default useGif;