import { useRouter } from "next/router";
import Back from "../icons/Back";
import Card from "../modules/Card";

function CarsList({ data }) {
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  return (
    <div className="m-auto px-10">
      <div
        className="cursor-pointer flex items-center w-fit bg-white border-black border-2 py-[10px] px-[15px] rounded-md my-[50px] sm:mx-[50px] text-2xl"
        onClick={backHandler}
      >
        <Back />
        <p className="ml-[10px]">back</p>
      </div>
      <div className="flex flex-wrap justify-center gap-5 mx-auto my-9">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CarsList;
