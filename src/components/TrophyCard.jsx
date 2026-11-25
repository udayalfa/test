import React from "react";
import { useNavigate } from "react-router-dom";

function TrophyCard({ trophy }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${trophy._id}`)}
      className="
    bg-white
    group
    cursor-pointer
    w-full
    transition-shadow
    duration-500
    hover:shadow-xl
  "
    >
      {/* Image */}
      <div className="overflow-hidden rounded-md">
        <img
          src={trophy?.images[0]}
          alt={trophy?.name}
          className="
        w-full
        aspect-[5/4]
        object-cover
        transition-transform
        duration-500
        group-hover:scale-110
      "
        />
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-1">
          {trophy?.name}
        </h2>

        <p className="text-sm md:text-base text-gray-600 line-clamp-2 mb-2">
          {trophy?.shortDescription}
        </p>

        <span className="text-base md:text-lg lg:text-xl font-bold">
          {trophy?.height} inches
        </span>
      </div>
    </div>
  );
}

export default TrophyCard;
