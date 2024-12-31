import CarDetails from "@/components/templates/CarDetails";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;
  const car = carsData.filter((car) => car.id == carId)[0];

  return (
    <div>
      <CarDetails {...car} />
    </div>
  );
}

export default CarDetail;
