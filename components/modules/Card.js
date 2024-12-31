import Link from "next/link";
import Location from "../icons/Location";

function Card(props) {
  const { id, name, model, year, distance, location, image, price } = props;

  return (
    <Link href={`/cars/${id}`}>
      <div className="w-fit rounded-md p-[10px] shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden">
        <img src={image} alt={name} className="w-[300px] rounded-md" />
        <h4 className="my-[10px]">{`${name} ${model}`}</h4>
        <p className="text-gray-500 my-[5px] text-sm">{`${year} . ${distance}km`}</p>
        <div className="flex justify-between mt-5 mb-1 ">
          <p className="bg-black text-white py-1 px-2 rounded-md text-sm font-bold flex items-center">
            $ {price}
          </p>
          <div className="flex items-end">
            <p className="mr-[5px]">{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
