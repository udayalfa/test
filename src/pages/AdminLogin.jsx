import { useState } from "react";
import { loginUser } from "../api/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../context/LoaderContext";

export default function AdminLogin({ setIsAuthenticated, setUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { show, hide } = useLoader();
  const [error, setError] = useState("");
  async function handleSubmit() {
    try {
      show();
      const data = await loginUser(formData);
      setUser(data.user);
      setIsAuthenticated(true);
    } catch (e) {
      toast.error("Invalid Credentials");
    } finally {
      hide();
    }
  }

  return (
    <div
      className="min-h-screen relative bg-fixed bg-center bg-cover flex flex-col items-center justify-start py-20 px-6 text-gray-800 overflow-auto"
      style={{
        backgroundImage: "url('/img/image1.jpg')", // Replace with your jewelry background image path
      }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
      <div className="w-full max-w-md mx-auto p-8 bg-white bg-opacity-95 shadow-2xl rounded-2xl border border-pink-100 flex flex-col items-center z-10">
        <div className="text-3xl font-extrabold  mb-2 text-center">
          Jewellery Store Admin
        </div>
        <div className="mb-6 text-gray-500 text-center text-lg font-semibold">
          Elegance Meets Management
        </div>
        <div className="w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border text-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border text-lg"
            required
          />
          {error && (
            <div className="text-red-500 text-center font-semibold">
              {error}
            </div>
          )}
          <button
            onClick={handleSubmit}
            className="w-full cursor-pointer bg-black mt-2 bg-gradient-to-r text-white font-bold py-3 rounded-lg shadow"
          >
            Login
          </button>
          <div className=" text-gray-400 text-center pt-2">
            Admin access only
          </div>
        </div>
      </div>
    </div>
  );
}
