import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

const CarList = () => {
  const carlist =[
    {
      img: "/image/Card1.png",
      name: "Toyota Corolla 2023",
      date: "Oct 8 – 13",
      price: "$278 Birr",
    },
    {
      img: "/image/Card1.png",
      name: "Toyota Corolla 2023",
      date: "Oct 8 – 13",
      price: "$278 Birr",
    },
    {
      img: "/image/Card1.png",
      name: "Toyota Corolla 2023",
      date: "Oct 8 – 13",
      price: "$278 Birr",
    },
    {
      img: "/image/Card1.png",
      name: "Toyota Corolla 2023",
      date: "Oct 8 – 13",
      price: "$278 Birr",
    },
    {
      img: "/image/Card1.png",
      name: "Toyota Corolla 2023",
      date: "Oct 8 – 13",
      price: "$278 Birr",
    },
  ]
  return (
    <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-5 w-full md:w-fit p-4">
      {carlist.map((item) => (
        <Card key={item} className="dark:bg-gray-800 p-2 mb-4 md:mr-4">
          <img
            src={item.img}
            alt={item.name}
            className=" w-full h-56 md:w-56 md:h-44 flex-shrink-0 "
          />
          <div className="mt-4">
            <p className="text-sm font-bold">{item.name}</p>
            <p className="text-xs font-semibold">{item.date}</p>
            <div className="flex flex-row justify-between">
              <p className="text-sm font-bold mt-2">{item.price}</p>
              <Button className="bg-blue-500 dark:bg-gray-950 dark:text-white">Detail </Button>
            </div>
          </div>
        </Card>
      ))}
      
    </div>
    </div>
  );
};

export default CarList;
