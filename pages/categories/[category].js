import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function Categories() {
  const router = useRouter();

  const { category } = router.query;
  const categoryCars = carsData.filter((car) => car.category === category);

  return <CarsList data={categoryCars} />;
}

export default Categories;
