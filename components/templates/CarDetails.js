import Calender from "../icons/Calender";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";

function CarDetails(props) {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    image,
    price,
    description,
  } = props;

  return (
    <div className="max-w-[900px] my-10 mx-auto flex flex-col max-sm:mx-[15px]">
      <img src={image} alt={name} className="w-full rounded-md" />
      <h3 className="mt-10 mx-0 mb-5 text-2  px-5">
        {name} {model}
      </h3>
      <div className="w-full shadow-[0_8px_24px_rgba(149,157,165,0.2)]  py-[10px] px-5 my-[15px] mx-0">
        <div className="flex items-center my-[15px] mx-0">
          <Company />
          <p className="ml-[10px]">company</p>
          <span className="text-gray-500 ml-auto">{name}</span>
        </div>

        <div className="flex items-center my-[15px] mx-0">
          <Model />
          <p className="ml-[10px]">Model</p>
          <span className="text-gray-500 ml-auto">{model}</span>
        </div>
        <div className="flex items-center my-[15px] mx-0">
          <Calender />
          <p className="ml-[10px]">First registration</p>
          <span className="text-gray-500 ml-auto">{year}</span>
        </div>
        <div className="flex items-center my-[15px] mx-0">
          <Road />
          <p className="ml-[10px]">kms driven</p>
          <span className="text-gray-500 ml-auto">{distance}</span>
        </div>
      </div>
      <div className="w-full shadow-[0_8px_24px_rgba(149,157,165,0.2)] py-[10px] px-5 my-[15px] mx-0">
        <div className="flex items-center my-[15px] mx-0">
          <Location />
          <p className="ml-[10px]">Location</p>
          <span className="text-gray-500 ml-auto">{location}</span>
        </div>
      </div>
      <div className="w-full shadow-[0_8px_24px_rgba(149,157,165,0.2)] py-[10px] px-5 my-[15px] mx-0">
        <p className="my-[15px] mx-0 text-2 font-semibold">Extra Information</p>
        <p className="text-gray-500 mb-[10px] text-justify">{description}</p>
      </div>
      <div className="w-full shadow-[0_8px_24px_rgba(149,157,165,0.2)] py-[10px] px-5 my-[15px] mx-0">
        <div className="flex items-center my-[15px] mx-0">
          <Money />
          <p className="ml-[10px] text-2 ">Price:</p>
          <span className="text-gray-500 ml-auto text-2 ">$ {price}</span>
        </div>
      </div>

      <button className="bg-white border-black border-2 max-sm:w-fit w-full max-sm:px-[30px] mx-auto text-2xl p-[10px] rounded-[5px] my-[50px] cursor-pointer">
        Buy
      </button>
    </div>
  );
}

export default CarDetails;
