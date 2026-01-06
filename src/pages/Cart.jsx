import React, { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import Swal from "sweetalert2";
import { order } from "../api/orderApi";
import { useLoader } from "../context/LoaderContext";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { show, hide } = useLoader();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setCartProducts(storedProducts);
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Remove product?",
      text: "This product will be removed from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cartProducts.filter(
          (item) => item.product._id !== id
        );
        setCartProducts(updatedCart);
        localStorage.setItem("products", JSON.stringify(updatedCart));
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const payload = {
      formData,
      cartProducts,
    };
    try {
      show();
      const response = await order(payload);
      Swal.fire({
        icon: "success",
        title: "Order Placed!",
        text: "We will contact you shortly.",
      });
      localStorage.removeItem("products");
      setCartProducts([]);
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again later",
      });
    } finally {
      hide();
    }
  };

  if (cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          No items in your cart
        </h2>
        <a href="/" className="px-6 py-2 bg-black text-white rounded-md">
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="lg:w-[65%] space-y-4 lg:max-h-[520px] lg:overflow-y-auto custom-scrollbar">
          {cartProducts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white shadow p-4 rounded-md"
            >
              <div className="flex items-start sm:items-center gap-4">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-md"
                />
                <div className="space-y-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    {item.product.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Product ID: {item.product._id}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Quantity: {item.totalItems}
                  </p>
                </div>
              </div>

              <RxCrossCircled
                onClick={() => handleDelete(item.product._id)}
                className="self-end sm:self-auto cursor-pointer w-6 h-6 text-gray-700 transition hover:rotate-90 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Customer Details */}
        <div className="lg:w-[35%] bg-white shadow-md p-5 sm:p-6 rounded-md h-fit lg:sticky lg:top-20">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
            Customer Details
          </h2>

          <div className="space-y-4 text-sm sm:text-base">
            <div>
              <label className="block text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">
                Delivery Address
              </label>
              <textarea
                rows="3"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter full address"
                className="w-full px-3 py-2 border rounded-md resize-none focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-black text-white py-3 rounded-md font-medium hover:opacity-90 transition"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
