import { useState } from "react";
import { buildYourOwn } from "../api/contactApi";
import { useLoader } from "../context/LoaderContext";
import toast from "react-hot-toast";
import { error, success } from "../components/UIElement/toastsObj";

const BuildYourOwn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jewelryType: "",
    description: "",
    image: null,
  });
  const { show, hide } = useLoader();
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const MAX_FILE_SIZE = 1.5 * 1024 * 1024; // 1.5MB
  const MAX_DIMENSION = 2000; // 2000px

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    console.log(file.size / 1024);
    if (file.size > MAX_FILE_SIZE) {
      error("Image size must be less than 1.5MB");
      e.target.value = "";
      return;
    }

    if (!file.type.startsWith("image/")) {
      error("Only image files are allowed");
      e.target.value = "";
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const { width, height } = img;

      if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
        error("Image dimensions must not exceed 2000×2000px");
        e.target.value = "";
        URL.revokeObjectURL(img.src);
        return;
      }

      // ✅ Accept image
      setFormData((prev) => ({ ...prev, image: file }));

      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);

      URL.revokeObjectURL(img.src);
    };
  };

  const handleSubmit = async () => {
    show();
    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) formDataObj.append(key, value);
    });
    try {
      const response = await buildYourOwn(formDataObj);
      success("Form Submitted Successfully");
      console.log(response);
    } catch (e) {
      error("Something went wrong");
      console.log(e);
    } finally {
      hide();
    }
  };

  return (
    <div
      className="min-h-screen relative bg-fixed bg-center bg-cover flex flex-col items-center justify-start py-20 px-6 text-gray-800 overflow-auto"
      style={{
        backgroundImage: "url('/img/image1.jpg')", // Replace with your jewelry background image path
      }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>

      {/* Content - form container */}
      <div className="relative z-10 max-w-4xl w-full bg-white/50 bg-opacity-90 rounded-3xl shadow-2xl p-10 animate-fade-in-up">
        <header className="text-center mb-8 sm:mb-10 lg:mb-14 px-4">
          <h1
            className="
      font-light
      tracking-tight
      mb-3
      text-2xl
      sm:text-3xl
      md:text-5xl
      lg:text-5xl
      xl:text-6xl
    "
          >
            Build Your Own Jewelry
          </h1>

          <p
            className="
      mx-auto
      max-w-xl
      sm:max-w-2xl
      lg:max-w-4xl
      text-sm
      sm:text-base
      md:text-lg
      lg:text-xl
      text-gray-700
      leading-relaxed
    "
          >
            Share your vision! Upload an image or describe the jewelry you want
            to create, and our artisans will bring it to life.
          </p>
        </header>

        <div autoComplete="off" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:border-custom-yellow focus:ring-2 focus:ring-custom-yellow outline-none transition duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:border-custom-yellow focus:ring-2 focus:ring-custom-yellow outline-none transition duration-300"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:border-custom-yellow focus:ring-2 focus:ring-custom-yellow outline-none transition duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Type of Jewelry</label>
              <select
                name="jewelryType"
                required
                value={formData.jewelryType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:border-custom-yellow focus:ring-2 focus:ring-custom-yellow outline-none transition duration-300"
              >
                <option value="">Select type</option>
                <option value="Ring">Ring</option>
                <option value="Necklace">Necklace</option>
                <option value="Bracelet">Bracelet</option>
                <option value="Earrings">Earrings</option>
                <option value="Custom">Custom</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Describe your idea</label>
            <textarea
              name="description"
              required
              rows="5"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about the design, materials, style, or details..."
              className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:border-custom-yellow focus:ring-2 focus:ring-custom-yellow outline-none resize-none transition duration-300"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Upload an image (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-gray-700 file:rounded-lg file:border file:border-gray-600 file:px-4 file:py-2  transition duration-300 cursor-pointer"
            />
            <p className="text-xs text-gray-500 mt-1">
              Max 1.5MB • 2000×2000px • JPG / PNG
            </p>

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-4 rounded-xl max-h-64 object-contain mx-auto shadow-lg"
              />
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 text-lg rounded-lg bg-black cursor-pointer text-white"
          >
            Submit Your Design
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuildYourOwn;
