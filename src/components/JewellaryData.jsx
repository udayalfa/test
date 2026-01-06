import React, { useState } from "react";
import { info, success } from "./UIElement/toastsObj";

function JewellaryData({ product }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const incrementQty = () => setQuantity((q) => Math.min(q + 1, product.stock));
  const decrementQty = () => setQuantity((q) => Math.max(q - 1, 1));

  const cartHandler = () => {
    const existingCart = JSON.parse(localStorage.getItem("products")) || [];
    const index = existingCart.findIndex((p) => p.product._id === product._id);

    if (index !== -1) {
      const prevQuantity = existingCart[index].totalItems;
      if (prevQuantity === quantity) {
        info("Product already in cart");
        return;
      }
      existingCart[index].totalItems = quantity;
      success("Cart updated");
    } else {
      existingCart.push({ product, totalItems: quantity });
      success("Product added to cart");
    }

    localStorage.setItem("products", JSON.stringify(existingCart));
  };

  return (
    <div className="w-full md:w-1/2 flex flex-col shadow bg-white p-4">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
        {product.name} ({product.shortDescription})
      </h1>

      <div className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 flex items-center gap-2">
        <span>{product.weight} gm</span>
      </div>

      {/* Rating */}
      <div className="flex text-lg sm:text-xl md:text-2xl items-center space-x-1 mb-2 text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < 5 ? "★" : "☆"}</span>
        ))}
      </div>

      <p className="text-sm sm:text-base md:text-lg">{product.description}</p>

      <div className="my-4 space-y-2 text-sm sm:text-base">
        <p>All India and Canada Delivery Within {product.deliveryDays} Days</p>
        <p>FREE Shipping On Gold Products</p>
        <p>ISO 9001:2015 Certified Premium Quality</p>
      </div>

      <p className="mb-4 text-sm sm:text-base">
        Hurry! Only <span className="font-bold">{product.stock}</span> left in stock
      </p>

      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center border w-24 sm:w-28 justify-between">
          <button
            onClick={decrementQty}
            className="px-3 py-1 cursor-pointer text-xl sm:text-2xl font-bold"
            disabled={quantity <= 1}
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            onClick={incrementQty}
            className="px-3 py-1 cursor-pointer text-xl sm:text-2xl font-bold"
            disabled={quantity >= product.stock}
          >
            +
          </button>
        </div>

        <button
          onClick={cartHandler}
          className="bg-black cursor-pointer text-white px-6 sm:px-8 py-2 sm:py-3 font-semibold hover:bg-gray-900 transition w-full sm:w-auto"
        >
          ADD TO CART
        </button>
      </div>

      {/* Payment Methods */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        {["VISA", "Mastercard", "PayPal", "PhonePe", "GPay", "Paytm"].map(
          (method) => (
            <img
              key={method}
              src={`/img/${method.toLowerCase()}.svg`}
              alt={method}
              className="w-10 h-10 sm:w-[5.5vw] sm:h-[5.5vw]"
            />
          )
        )}
      </div>
    </div>
  );
}

export default JewellaryData;
