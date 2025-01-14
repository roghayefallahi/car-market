import Categories from "@/components/modules/Categories";
import SearchBox from "@/components/modules/SearchBox";
import ShowAllBtn from "@/components/modules/ShowAllBtn";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";


function Index() {
  const cars = carsData.slice(0, 3);
  return (
    <>
      <Categories />
      <SearchBox />

      <CarsPage data={cars} />
      <ShowAllBtn />
    </>
  );
}

export default Index;
