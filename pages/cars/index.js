import Categories from "@/components/modules/Categories";
import SearchBox from "@/components/modules/SearchBox";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";

function Cars() {
  return (
    <>
      <Categories />
      <SearchBox />
      <CarsPage data={carsData} />
    </>
  );
}

export default Cars;
