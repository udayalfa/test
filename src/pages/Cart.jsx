import React from "react";

const CartPage = ({ cartItems = [] }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">No items in your cart</h2>
        <a
          href="/shop"
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left: Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white shadow p-4 rounded-md"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-500 text-sm">₹{item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">x{item.quantity}</span>
                <p className="font-semibold">₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Summary */}
        <div className="bg-gray-50 shadow-md p-6 rounded-md h-fit">
          <h2 className="text-xl font-medium mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">₹{total}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium text-green-600">Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
