import Link from "next/link";

function ShowAllBtn() {
  return (
    <div className="md:w-[440px] my-[50px]  mx-auto flex justify-center items-center">
      <Link
        href="/cars#more-cars"
        className="bg-white border-black border-2 block max-sm:w-fit max-sm:px-[10px] w-full text-center py-[10px] px-0 rounded-md"
      >
        See all cars
      </Link>
    </div>
  );
}

export default ShowAllBtn;
