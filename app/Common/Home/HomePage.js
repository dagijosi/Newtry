"use client";
import React from "react";
import SearchBar from "./SearchBar";
import TopBodyCard from "./TopBodyCard";
import { Divider } from "@mui/material";
import { IMAGE_PATHS } from "@/app/Images";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ArrowForwardIos } from "@mui/icons-material";
import CarList from "./CarList";
import CarPopular from "./CarPopular";

const HomePage = () => {
  const { theme } = useTheme();
  console.log(theme);
  const filter = [
    {
      imgdark: IMAGE_PATHS.ANYDARKMODE,
      imglight: IMAGE_PATHS.ANYLIGHTMODE,
      name: "Any",
    },
    {
      imgdark: IMAGE_PATHS.SUVDARKMODE,
      imglight: IMAGE_PATHS.SUVLIGHTMODE,
      name: "Suv",
    },
    {
      imgdark: IMAGE_PATHS.SEDANDARKMODE,
      imglight: IMAGE_PATHS.SEDANLIGHTMODE,
      name: "Sedan",
    },
    {
      imgdark: IMAGE_PATHS.SPORTDARKMODE,
      imglight: IMAGE_PATHS.SPORTLIGHTMODE,
      name: "Sport",
    },
    {
      imgdark: IMAGE_PATHS.TRUCKDARKMODE,
      imglight: IMAGE_PATHS.TRUCKLIGHTMODE,
      name: "Truck",
    },
    {
      imgdark: IMAGE_PATHS.VANDARKMODE,
      imglight: IMAGE_PATHS.VANLIGHTMODE,
      name: "Van",
    },
    {
      imgdark: IMAGE_PATHS.COMPACTDARKMODE,
      imglight: IMAGE_PATHS.COMPACTLIGHTMODE,
      name: "Compact",
    },
    {
      imgdark: IMAGE_PATHS.MINIVANDARKMODE,
      imglight: IMAGE_PATHS.MINIVANLIGHTMODE,
      name: "MiniVan",
    },
    {
      imgdark: IMAGE_PATHS.HEAVYDUTYDARKMODE,
      imglight: IMAGE_PATHS.HEAVYDUTYLIGHTMODE,
      name: "Heavy Duty",
    },
  ];
  return (
    <div>
      <SearchBar />
      <div className="pt-4">
        <TopBodyCard />
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-xl md:text-3xl text-center font-semibold mt-6">
            Browse Our Selection of Cars
          </h1>
          <Divider className=" w-56 md:w-96 bg-black dark:bg-white mt-2" />
        </div>
        <div className="flex flex-col items-center mt-10 mb-4">
          <div className="flex flex-row md:justify-center w-full overflow-y-auto px-6 md:px-0 ">
            {filter.map((item) => (
              <Button
                variant="ghost"
                className="flex flex-col h-fit w-fit mr-4"
                key={item.name}
              >
                <img
                  src={theme === "dark" ? item.imgdark : item.imglight}
                  alt={item.name}
                  className="w-6 h-4"
                />
                <p className="text-center text-xs font-semibold">{item.name}</p>
              </Button>
            ))}
          </div>
          <Divider className=" w-56 md:w-2/4 bg-black dark:bg-white mt-2" />
        </div>
        <CarList/>
        <CarPopular/>
      </div>
    </div>
  );
};

export default HomePage;
