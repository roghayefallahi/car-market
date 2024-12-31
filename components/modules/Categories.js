import Link from "next/link";
import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";

function Categories() {
  return (
    <div className=" sm:w-[100%]  md:w-fit my-[50px] mx-auto flex justify-center items-center gap-4 flex-wrap  ">
      <Link href="/categories/sedan">
        <div className="w-[150px] shadow-[0_8px_24px_rgba(149,157,165,0.2)]  flex flex-col justify-center items-center m-[5px]  py-[10px] px-5 rounded-md text-center">
          <span>Sedan</span>
          <Sedan />
        </div>
      </Link>
      <Link href="/categories/suv">
        <div className="w-[150px] shadow-[0_8px_24px_rgba(149,157,165,0.2)] flex flex-col justify-center items-center  m-[5px]  py-[10px] px-5 rounded-md text-center">
          <span>SUV</span>
          <Suv />
        </div>
      </Link>
      <Link href="/categories/hatchback">
        <div className="w-[150px] shadow-[0_8px_24px_rgba(149,157,165,0.2)]  flex flex-col justify-center items-center m-[5px]  py-[10px] px-5 rounded-md text-center">
          <span>Hatchback</span>
          <Hatchback />
        </div>
      </Link>
      <Link href="/categories/sport">
        <div className="w-[150px] shadow-[0_8px_24px_rgba(149,157,165,0.2)]  flex flex-col justify-center items-center m-[5px]  py-[10px] px-5 rounded-md text-center">
          <span>Sport cars</span>
          <Sport />
        </div>
      </Link>
    </div>
  );
}

export default Categories;
