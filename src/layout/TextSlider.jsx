import React, { useState, useEffect } from "react";
import { BsBag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const TextSlider = () => {
  const texts = [
    "Proudly made in India 🇮🇳✨",
    "100% customer satisfaction✨",
    "All India and Canada Support 9888471818",
    "FREE Shipping On Gold✨",
    "ISO Certified Premium Quality✨",
  ];
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setSlide(false);
      }, 200); // Smooth reset transition
    }, 3500);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative flex items-center justify-between gap-3 px-3 sm:px-5 py-2 bg-custom-yellow overflow-hidden">
      <h1
        className={`flex-1 text-center text-sm sm:text-base md:text-xl font-medium
    transition-all duration-700 ease-in-out
    ${slide ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}
      >
        {texts[index]}
      </h1>

      <button
        onClick={() => navigate("/cart")}
        className="flex-shrink-0 p-2 rounded-full hover:bg-black/10 active:scale-95 transition"
        aria-label="Go to cart"
      >
        <BsBag className="text-lg sm:text-xl md:text-2xl cursor-pointer" />
      </button>
    </div>
  );
};

export default TextSlider;
