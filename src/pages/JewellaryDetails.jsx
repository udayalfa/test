import { useEffect, useRef, useState } from "react";
import FeatureSection from "../components/FeatureSection";
import JewellaryData from "../components/JewellaryData";
import JewellaryImages from "../components/JewellaryImages";

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const next = () => {
      setCurrent((prev) => (prev + 1) % product.images.length);
    };
    timeoutRef.current = setInterval(next, 3000);
    return () => clearInterval(timeoutRef.current);
  }, [product.images.length]);

  const incrementQty = () => setQuantity((q) => Math.min(q + 1, product.stock));
  const decrementQty = () => setQuantity((q) => Math.max(q - 1, 1));

  // Manual thumbnail click resets timer
  const handleThumbnailClick = (idx) => {
    setCurrent(idx);
    clearInterval(timeoutRef.current);
  };

  return (
    <div className="">
      <div className="p-6 flex flex-col md:flex-row gap-10">
        <JewellaryImages
          product={product}
          current={current}
          setCurrent={setCurrent}
          handleThumbnailClick={handleThumbnailClick}
        />

        <JewellaryData
          product={product}
          quantity={quantity}
          incrementQty={incrementQty}
          decrementQty={decrementQty}
        />
      </div>
      {/* Image section */}

      <FeatureSection />
    </div>
  );
};

// Example usage with sample data
const sampleProduct = {
  name: "Abnash Jewellers Anti-Tarnish Trillion Crystal Cocktail Ring (Adjustable Size)",
  description: `This exquisite necklace captures the essence of timeless elegance,
        crafted to adorn your neckline with a gentle radiance that speaks of
        grace and sophistication. Each delicate link is meticulously
        handcrafted, weaving together the warmth of pure gold with the
        brilliance of finely cut stones that dance with every glimmer of light.`,
  images: [
    "/img/image1.jpg",
    "/img/image1.jpg",
    "/img/image1.jpg",
    "/img/image1.jpg",
    "/img/image1.jpg",
    // "/img/image1.jpg",
    // more image URLs
  ],
  weight: 149,
  rating: 2,
  deliveryDays: 3,
  stock: 4,
};

export default function ProductPage() {
  return <ProductDetail product={sampleProduct} />;
}
