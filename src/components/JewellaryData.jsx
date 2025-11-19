import React from "react";

function JewellaryData({ product, quantity, incrementQty, decrementQty }) {
  return (
    <div className="md:w-1/2 flex flex-col shadow bg-white p-4">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <div className="text-2xl font-semibold mb-1 flex items-center gap-2">
        <span>{product.weight} gm</span>
      </div>

      {/* Rating */}
      <div className="flex text-2xl items-center space-x-1 mb-2 text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < Math.floor(product.rating) ? "★" : "☆"}</span>
        ))}
      </div>
      {/* description */}
      <p>
       {product.description}
      </p>
      {/* Shipping and offers */}
      <div className="my-4 space-y-2">
        <p>All India Delivery Within {product.deliveryDays} Days</p>
        <p>FREE Shipping On Gold Products</p>
        <p>ISO 9001:2015 Certified Premium Quality</p>
      </div>

      {/* Stock */}
      <p className="mb-4">
        Hurry! Only <span className="font-bold">{product.stock}</span> left in
        stock
      </p>
      <div className="mb-6 flex items-center space-x-4">
        <div className="flex items-center border w-28 justify-between">
          <button
            onClick={decrementQty}
            className="px-3 py-1 text-2xl font-bold"
            disabled={quantity <= 1}
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            onClick={incrementQty}
            className="px-3 py-1 text-2xl font-bold"
            disabled={quantity >= product.stock}
          >
            +
          </button>
        </div>

        <button className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-900 transition">
          ADD TO CART
        </button>
      </div>

      {/* Payment Methods */}
      <div className="flex items-center space-x-4">
        {["VISA", "Mastercard", "PayPal", "PhonePe", "GPay", "Paytm"].map(
          (method) => (
            <img
              key={method}
              src={`/img/${method.toLowerCase()}.svg`}
              alt={method}
              className="w-[5.5vw] h-[5.5vw]"
              // Replace src with actual payment icon URLs or local image assets
            />
          )
        )}
      </div>
    </div>
  );
}

export default JewellaryData;
