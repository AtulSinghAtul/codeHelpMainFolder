import Spinner from "./Spinner";
import useGif from "./useGif";

function Random() {
  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    //random gif
    fetchData();
  }

  return (
    <div className="w-1/2 mt-3  bg-green-500  rounded-lg border border-black flex flex-col gap-y-2 items-center">
      <h1 className="text-2xl font-medium uppercase underline mt-2">
        A Random Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="400" />}
      <button
        className="bg-white text-xl font-medium rounded-md py-2 text-center  w-2/3 my-3"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
