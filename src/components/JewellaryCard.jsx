import React from "react";
import { useNavigate } from "react-router-dom";

function JewelryCard ({jewellary}) {
  const navigate = useNavigate()
  return (
  <div onClick={() => navigate(`/${jewellary._id}`)}  className="bg-white group cursor-pointer transition-shadow duration-500 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
    <div className="overflow-hidden">
      <img
        src={jewellary?.images[0]}
        // alt={title}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-140 group-hover:shadow-lg"
      />
    </div>
    <div className="px-4 py-3">
      <h2 className="text-lg font-semibold text-gray-900 mb-1 sm:text-xl md:text-2xl">{jewellary?.name}</h2>
      <p className="text-sm text-gray-600 mb-2 sm:text-base md:text-lg">{jewellary?.shortDescription}</p>
      <span className="text-base sm:text-lg md:text-xl  font-bold">{jewellary?.weight}g</span>
    </div>
  </div>
);
}

export default JewelryCard;
