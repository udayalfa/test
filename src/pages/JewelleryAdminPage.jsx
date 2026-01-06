import { useEffect, useState } from "react";
import {
  createJewellary,
  deleteJewellary,
  getFullJewellaryByCategory,
  updateJewellary,
} from "../api/jewellaryApi";
import Loader from "../components/UIElement/Loader";
import { useLoader } from "../context/LoaderContext";
import useJewelleryByCategory from "../hooks/useJewelleryByCategory";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { error, success } from "../components/UIElement/toastsObj";
import Swal from "sweetalert2";

// Example data (replace with your backend/API)
const initialInventory = [
  {
    _id: "1",
    name: "Gold Necklace",
    description: "22K gold with diamonds.",
    category: "Necklace",
    gender: "Women",
    metalType: "Gold",
    purity: "22K",
    weight: "14g",
    stoneType: "Diamond",
    images: ["https://your-cloud-url.com/img1.jpg"],
    stock: 3,
  },
  {
    _id: "2",
    name: "Silver Ring",
    description: "925 Silver ring for men.",
    category: "Ring",
    gender: "Men",
    metalType: "Silver",
    purity: "925",
    weight: "5g",
    stoneType: "",
    images: ["https://your-cloud-url.com/img2.jpg"],
    stock: 10,
  },
  // ...more sample items
];

const categories = [
  "Necklace",
  "Ring",
  "Earring",
  "Bracelet",
  "Anklet",
  "Pendant",
  "Chain",
  "Other",
];

const metalTypes = [
  "Gold",
  "Silver",
  "Platinum",
  "Diamond",
  "Artificial",
  "Other",
];

const purity = ["22K", "18K", "925 Silver"];
const stoneType = ["Diamond", "Ruby", "Emerald", "Kundan", "Others"];

export default function JewelleryAdminPanel() {
  const [inventory, setInventory] = useState(initialInventory);
  const [originalData, setOriginalData] = useState(null);
  const [jewellaries, setJewellaries] = useState([]);
  const [selectedCat, setSelectedCat] = useState("Necklace");
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(getEmptyForm());
  const [previews, setPreviews] = useState([]);
  const { show, hide } = useLoader();

  useEffect(() => {
    fetchJewellery();
  }, [selectedCat]);

  const fetchJewellery = async () => {
    try {
      show();
      const { data } = await getFullJewellaryByCategory(selectedCat);
      setJewellaries(data.jewellery || data);
    } catch (err) {
      console.log(err);
    } finally {
      hide();
    }
  };
  function getEmptyForm() {
    return {
      name: "",
      description: "",
      shortDescription: "",
      gender: "",
      metalType: "",
      category: "",
      purity: "",
      weight: "",
      stoneType: "",
      images: [],
      stock: 1,
    };
  }
  console.log(formData);

  function handleCatChange(e) {
    setSelectedCat(e.target.value);
  }

  function handleEdit(item) {
    setEditingId(item._id);

    setFormData({
      ...item,
      images: [...item.images], // existing URLs only
    });

    setOriginalData({
      ...item,
      updatedImages: [], // EMPTY initially
    });

    setPreviews([...item.images]);
  }

  async function handleDelete(id) {
    try {
      // Show confirmation popup
      const result = await Swal.fire({
        title: "Delete product?",
        text: "This product will be deleted permanently.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#000",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it",
      });

      // If user confirms deletion
      if (result.isConfirmed) {
        try {
          show(); // show loader
          const response = await deleteJewellary(id); // API call
          success("Product deleted successfully"); // success toast
          fetchJewellery(); // refresh cart or list
        } catch (e) {
          console.error(e);
          error("Something went wrong"); // error toast
        } finally {
          hide(); // hide loader
        }
      }
    } catch (e) {
      console.error(e);
      error("Something went wrong");
    }
  }

  const buildUpdatePayload = () => {
    const payload = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "images") return; // skip URLs
      if (formData[key] !== originalData?.[key]) {
        payload.append(key, formData[key]);
      }
    });

    // ✅ ONLY new images go here
    originalData.updatedImages.forEach((file) => {
      payload.append("updatedImages", file);
    });

    return payload;
  };

  const buildCreatePayload = () => {
    const payload = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    formData.images?.forEach((file) => {
      payload.append("images", file);
    });

    return payload;
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    const existingCount = formData.images?.length || 0;
    const updatedCount = originalData?.updatedImages?.length || 0;
    const totalCount = existingCount + updatedCount + files.length;

    if (totalCount > 5) {
      alert("You can upload maximum 5 images");
      return;
    }

    if (editingId) {
      // ✅ ONLY store new files
      setOriginalData((prev) => ({
        ...prev,
        updatedImages: [...prev.updatedImages, ...files],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...files],
      }));
    }

    setPreviews((prev) => [
      ...prev,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);

    e.target.value = "";
  };

  const removeImage = (index) => {
    const existingCount = formData.images.length;

    if (index < existingCount) {
      // remove existing image URL
      setFormData((prev) => ({
        ...prev,
        images: prev.images.filter((_, i) => i !== index),
      }));
    } else {
      // remove newly added image file
      const newIndex = index - existingCount;

      setOriginalData((prev) => ({
        ...prev,
        updatedImages: prev.updatedImages.filter((_, i) => i !== newIndex),
      }));
    }

    // always update previews
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleCancelEdit() {
    setEditingId(null);
    setFormData(getEmptyForm());
  }

  const handleSaveJewellery = async () => {
    try {
      show();
      const payload = editingId ? buildUpdatePayload() : buildCreatePayload();
      if (editingId) {
        await updateJewellary(editingId, payload);
        success("Product updated successfully");
      } else {
        await createJewellary(payload);
        success("Product added successfully");
      }
    } catch (e) {
      const msg =
        e?.response?.data?.errors?.[0] ||
        e?.response?.data?.message ||
        "Something went wrong";

      error(msg);
    } finally {
      hide();
    }
  };

  return (
    <div className="min-h-screen bg-custom-yellow flex items-center justify-center py-10 px-2">
      <div className="w-full bg-white flex">
        {/* Inventory Panel */}
        <div className="flex-1 p-6 border-r border-pink-200 bg-white">
          <div className="flex items-center mb-4 gap-2">
            <label className="block font-bold">Category:</label>
            <select
              value={selectedCat}
              onChange={handleCatChange}
              className="px-2 py-1 rounded ring-1 focus:ring-2 transition"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6 font-bold  text-lg">
            Inventory ({selectedCat})
          </div>
          <div className="space-y-2 h-[600px] overflow-y-auto pr-2 custom-scroll">
            {jewellaries.length === 0 && (
              <div className="text-gray-400 text-sm p-8 text-center">
                No items in this category.
              </div>
            )}
            {jewellaries.map((item) => (
              <div
                key={item._id}
                className="flex items-center rounded-xl bg-gradient-to-l from-pink-100 to-yellow-50 p-3 shadow hover:shadow-lg gap-2 transition animate-fade-in"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="h-12 w-12 object-cover rounded border-2 border-pink-300"
                />
                <div className="flex-1 pl-2">
                  <div className="font-semibold text-pink-700">{item.name}</div>
                  <div className="text-xs text-gray-600">
                    {item.metalType} ({item.purity}) | Stock:{" "}
                    <span
                      className={item.stock < 3 ? "text-red-500 font-bold" : ""}
                    >
                      {item.stock}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {item.gender ? item.gender : ""}
                  </div>
                </div>
                <button
                  className="text-xs bg-yellow-100 cursor-pointer hover:bg-yellow-200 text-yellow-800 px-2 py-1 rounded transition shadow font-bold"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="text-xs bg-pink-100 cursor-pointer hover:bg-pink-300 text-pink-700 px-2 py-1 rounded transition shadow font-bold"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Form Panel */}
        <div className="w-4/12 p-8 flex flex-col gap-4 items-center">
          <h2 className="text-2xl font-extrabold mb-1 text-center">
            {editingId ? "Update Jewellery" : "Add New Jewellery"}
          </h2>
          <div
            // onSubmit={handleSubmit}
            className="w-full space-y-4 animate-fade-in"
          >
            {/* All schema fields */}
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                required
                type="text"
                className="w-full px-3 py-2 rounded-lg border transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Short Description
              </label>
              <textarea
                name="shortDescription"
                placeholder="Add short description of minimum 50-70 characters"
                value={formData.shortDescription}
                onChange={handleChange}
                required
                type="text"
                className="w-full px-3 py-2 rounded-lg border transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Long Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Add description of minimum 300-350 characters"
                className="w-full h-[150px] px-3 py-2 rounded-lg border transition"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border transition"
                >
                  <option value="">Select</option>
                  <option>Women</option>
                  <option>Men</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Metal
                </label>
                <select
                  name="metalType"
                  value={formData.metalType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border transition"
                >
                  <option value="">Select</option>
                  {metalTypes.map((metal) => (
                    <option key={metal} value={metal}>
                      {metal}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Purity
                </label>
                <select
                  name="purity"
                  value={formData.purity}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border transition"
                >
                  <option value="">Select</option>
                  {purity.map((metal) => (
                    <option key={metal} value={metal}>
                      {metal}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Weight
                </label>
                <input
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  type="number"
                  placeholder="e.g. 13g"
                  className="w-full px-3 py-2 rounded-lg border focus:ring ring-pink-300 transition"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Stone Type
                </label>
                <select
                  name="stoneType"
                  value={formData.stoneType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border transition"
                >
                  <option value="">Select</option>
                  {stoneType.map((metal) => (
                    <option key={metal} value={metal}>
                      {metal}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Category
                </label>
                <select
                  name="category"
                  id=""
                  className="w-full px-3 py-2 rounded-lg border transition"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Images (1–5)
              </label>

              <label
                htmlFor="imageUpload"
                className="cursor-pointer inline-block bg-black text-white px-4 py-2 rounded-lg transition"
              >
                Select Images
              </label>

              <input
                id="imageUpload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />

              <p className="text-xs text-gray-500 mt-1">
                {formData.images.length} / 5 selected
              </p>

              <div className="flex gap-2 mt-2 space-x-2 flex-wrap">
                {previews.map((src, idx) => (
                  <div key={idx} className="relative">
                    <img
                      src={src}
                      alt={`Preview ${idx}`}
                      className="h-14 w-14 object-cover rounded ring-2 ring-yellow-400"
                    />

                    {/* ❌ Remove Button */}
                    <button
                      type="button"
                      onClick={() => removeImage(idx)}
                      className="absolute cursor-pointer -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Stock</label>
              <input
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                type="number"
                min={1}
                className="w-full px-3 py-2 rounded-lg border focus:ring transition"
              />
            </div>
            <div className="flex gap-3 mt-4 items-center">
              <button
                type="submit"
                onClick={handleSaveJewellery}
                className="py-2 flex px-4 border cursor-pointer bg-black text-white hover:bg-gray-800 font-bold rounded-lg transition shadow-lg"
              >
                {editingId ? "Update" : "Save"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-lg transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
