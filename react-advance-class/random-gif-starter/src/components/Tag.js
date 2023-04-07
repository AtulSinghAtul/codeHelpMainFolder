import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "./useGif";

function Tag() {
  const [tag, setTag] = useState("");

  // custom hook
  const { gif, loading, fetchData } = useGif("car");
  console.log(gif);

  function clickHandler() {
    //random gif
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="w-1/2 mt-3  bg-green-500  rounded-lg border border-black flex flex-col gap-y-2 items-center">
      <h1 className="text-2xl font-medium uppercase underline mt-2">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="400" />}

      <input
        className="w-2/3 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={changeHandler}
        value={tag}
      />
      <button
        className="bg-white text-xl font-medium rounded-md py-2 text-center  w-2/3 my-3"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
