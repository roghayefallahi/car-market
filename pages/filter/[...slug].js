import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function FilteredCards() {
  const router = useRouter();

  const [min, max] = router.query.slug || [];

  const filteredData = carsData.filter(
    (car) => car.price > min && car.price < max
  );

  if (!filteredData.length) return <h3 className="text-center bg-rose-500 mt-10 py-2 w-full font-bold">Not Found!</h3>;

  return <CarsList data={filteredData} />;
}

export default FilteredCards;
