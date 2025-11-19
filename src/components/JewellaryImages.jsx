import React, { useState } from "react";
import ImageModal from "./ImageModal";

function JewellaryImages({ product, current, setCurrent, handleThumbnailClick }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-[60%]">
      <div className="relative h-[400px] overflow-hidden rounded-xl mb-4">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={product.name}
              className="w-full h-[400px] object-cover flex-shrink-0 rounded-xl cursor-pointer"
              onClick={() => setShowModal(true)} // open modal on click
            />
          ))}
        </div>

        {/* Previous and Next buttons */}
        <button
          onClick={() =>
            setCurrent((prev) =>
              prev === 0 ? product.images.length - 1 : prev - 1
            )
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-3 cursor-pointer rounded-full shadow"
        >
          ❮
        </button>
        <button
          onClick={() =>
            setCurrent((prev) => (prev + 1) % product.images.length)
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-3 cursor-pointer rounded-full shadow"
        >
          ❯
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex bg-white p-4 justify-around gap-2">
        {product.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            className={`w-[8vw] h-[8vw] object-cover rounded cursor-pointer border-2 transition-all duration-200 hover:scale-105 ${
              idx === current ? "border-yellow-400" : "border-gray-200"
            }`}
            onClick={() => handleThumbnailClick(idx)}
          />
        ))}
      </div>

      {/* Fullscreen Modal */}
      {showModal && (
        <ImageModal
          src={product.images[current]}
          alt={product.name}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default JewellaryImages;
