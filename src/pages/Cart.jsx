import React, { useEffect, useState } from "react";
import { BiCross } from "react-icons/bi";
import { PiCross } from "react-icons/pi";
import { RxCrossCircled } from "react-icons/rx";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  console.log(cartProducts);
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setCartProducts(storedProducts);
  }, []);
  const removeProduct = (id) => {
    const updatedCart = cartProducts.filter((item) => item.product._id !== id);
    setCartProducts(updatedCart);
    localStorage.setItem("products", JSON.stringify(updatedCart));
  };
  if (cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">No items in your cart</h2>
        <a
          href="/"
          className="px-6 py-2 bg-black text-white rounded-md"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className=" p-6">
      <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left: Cart Items */}
        <div className="md:col-span-2 space-y-4 h-[540px] overflow-y-auto custom-scrollbar">
          {cartProducts.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white shadow p-4 rounded-md"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-medium">{item.product.name}</h3>
                  <h3 className="text-gray-500 text-sm">
                    ProductID - {item.product._id}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    No of Items - {item.totalItems}
                  </p>
                </div>
              </div>
              <RxCrossCircled
                className="cursor-pointer text-gray-800 w-6 h-6 transform transition duration-300 hover:rotate-90 hover:scale-110"
                onClick={() => removeProduct(item.product._id)}
              />
            </div>
          ))}
        </div>
        {/* Right: Customer Details Form */}
        <div className="bg-white shadow-md p-6 rounded-md h-fit">
          <h2 className="text-xl font-semibold mb-2 text-center text-gray-800">
            Customer Details
          </h2>

          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Delivery Address
              </label>
              <textarea
                rows="3"
                placeholder="Enter full address"
                className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 bg-black cursor-pointer text-white py-3 rounded-md font-medium transition"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
