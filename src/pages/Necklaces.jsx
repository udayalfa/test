import React, { useEffect, useState } from "react";
import JewelryCard from "../components/JewellaryCard";
import { getJewellaryByCategory } from "../api/jewellaryApi";
import useJewelleryByCategory from "../hooks/useJewelleryByCategory";

function Necklaces() {
  const { jewellaries, error } = useJewelleryByCategory("Necklace");
  if (error) return <p>{error}</p>;

  return (
    <div className="w-full">
      {/* Heading */}
      <h1
        className="
      text-center
      pt-6 sm:pt-8 lg:pt-10
      px-4
      text-2xl
      sm:text-3xl
      md:text-3xl
      lg:text-4xl
      font-light
      leading-tight
      max-w-5xl
      mx-auto
    "
      >
        Adorn Your Elegance — Necklaces That Tell a Story of Grace & Glow ✨
      </h1>

      {/* Grid Wrapper */}
      <div className="max-w-[1600px] mx-auto">
        <div
          className="
          opacity-0 animate-slide-up delay-200
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-3
      xl:grid-cols-4
      gap-6
      lg:gap-8
      p-6
    "
        >
          {jewellaries.map((jewellary) => (
            <JewelryCard key={jewellary._id} jewellary={jewellary} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Necklaces;
