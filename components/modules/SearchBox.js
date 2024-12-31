import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

function SearchBox() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const router = useRouter();

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      toast.error("Please Enter minimum and maximum price!");
    }
  };

  return (
    <div className=" max-w-[1000px]  mx-auto border-t-[1px]">
      <div className="flex gap-1  m-[5px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap mt-8">
        <input
          className="border-[1px] max-sm:text-[15px] w-28 md:w-32 focus:outline-none  border-black border-solid rounded-md p-1 my-1 mx-0 "
          type="text"
          placeholder="Enter min-price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <span>-</span>
        <input
          className="border-[1px] max-sm:text-[15px] w-28 md:w-32 focus:outline-none  border-black border-solid rounded-md p-1 my-1 mx-0 "
          type="text"
          placeholder="Enter max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
        <button
          className="max-sm:m-[5px]  max-sm:text-[15px] sm:mx-0 bg-black text-white border-none py-1 px-2 rounded-md cursor-pointer ml-[10px] "
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
