import React, { useState, useEffect } from "react";
import { BsBag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const TextSlider = () => {
  const texts = [
    "Proudly made in India 🇮🇳✨",
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
        console.log("hey");
        setIndex((prev) => (prev + 1) % texts.length);
        setSlide(false);
      }, 200); // Smooth reset transition
    }, 3500);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="overflow-hidden flex items-center pr-5 relative py-2 bg-custom-yellow">
      <h1
        className={`text-xl transition-transform duration-700 w-full text-center ease-in-out ${
          slide && "translate-x-full opacity-0"
        }`}
      >
        {texts[index]}
      </h1>
      <BsBag
        onClick={() => navigate("/cart")}
        className="text-xl cursor-pointer"
      />
    </div>
  );
};

export default TextSlider;
