import React from "react";
import JewelryCard from "../components/JewellaryCard";
import useJewelleryByCategory from "../hooks/useJewelleryByCategory";

function Anklets() {
  const { jewellaries, error } = useJewelleryByCategory("Anklet");
  
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1 className="text-center pt-4 text-4xl">
        A Dance of Grace — Anklets That Add Rhythm to Every Step 🌸
      </h1>
      <div className="grid opacity-0 animate-slide-up delay-200 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {jewellaries.length > 0 &&
          jewellaries.map((jewellary) => {
            return <JewelryCard jewellary={jewellary} />;
          })}
      </div>
    </div>
  );
}

export default Anklets;
