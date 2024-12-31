import React from "react";
import Card from "../modules/Card";

function CarsPage({ data }) {
  return (
    <div className="flex flex-wrap justify-center gap-5 mx-auto my-9 " id="more-cars">
      {data.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
}

export default CarsPage;
