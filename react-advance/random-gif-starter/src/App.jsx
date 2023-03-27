import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-screen h-fit flex flex-col gap-y-8 background  items-center">
      <h1 className="bg-white rounded-md  w-11/12 text-center text-4xl font-bold mt-[40px]  py-2  ">
        RANDOM GIFS
      </h1>

      <div className="flex flex-col gap-y-8 items-center w-full ">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
