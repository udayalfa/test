import { useState } from "react";

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
  "Necklace", "Ring", "Earring", "Bracelet",
  "Anklet", "Pendant", "Chain", "Other"
];

export default function JewelleryAdminPanel() {
  const [inventory, setInventory] = useState(initialInventory);
  const [selectedCat, setSelectedCat] = useState("Necklace");
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(getEmptyForm());
  const [loading, setLoading] = useState(false);

  function getEmptyForm() {
    return {
      name: "",
      description: "",
      category: selectedCat,
      gender: "",
      metalType: "",
      purity: "",
      weight: "",
      stoneType: "",
      images: [],
      stock: 1,
    };
  }
  function handleCatChange(e) {
    setSelectedCat(e.target.value);
    setEditingId(null);
    setFormData({ ...getEmptyForm(), category: e.target.value });
  }
  function handleEdit(item) {
    setEditingId(item._id);
    setFormData({ ...item });
  }
  function handleDelete(id) {
    if (window.confirm("Delete this item?")) {
      setInventory(inventory.filter(item => item._id !== id));
      if (editingId === id) {
        setEditingId(null);
        setFormData(getEmptyForm());
      }
    }
  }
  function handleImageChange(e) {
    const files = Array.from(e.target.files);
    const urls = files.map(f => URL.createObjectURL(f));
    setFormData({ ...formData, images: urls });
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (editingId) {
        setInventory(inventory.map(item =>
          item._id === editingId ? { ...formData, _id: editingId } : item
        ));
      } else {
        setInventory([...inventory, { ...formData, _id: Date.now().toString() }]);
      }
      setEditingId(null);
      setFormData(getEmptyForm());
      setLoading(false);
    }, 600);
  }
  function handleCancelEdit() {
    setEditingId(null);
    setFormData(getEmptyForm());
  }

  const filteredInventory = inventory.filter(i => i.category === selectedCat);

  return (
    <div className="min-h-screen bg-custom-yellow flex items-center justify-center py-10 px-2">
      <div className="w-full bg-white flex">
        {/* Inventory Panel */}
        <div className="flex-1 p-6 border-r border-pink-200 bg-white">
          <div className="flex items-center mb-4 gap-2">
            <label className="block font-bold">Category:</label>
            <select value={selectedCat} onChange={handleCatChange}
              className="px-2 py-1 rounded ring-1 focus:ring-2 transition">
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="mb-6 font-bold  text-lg">
            Inventory ({selectedCat})
          </div>
          <div className="space-y-2 h-[600px] overflow-y-auto pr-2 custom-scroll">
            {filteredInventory.length === 0 && (
              <div className="text-gray-400 text-sm p-8 text-center">No items in this category.</div>
            )}
            {filteredInventory.map(item => (
              <div key={item._id} className="flex items-center rounded-xl bg-gradient-to-l from-pink-100 to-yellow-50 p-3 shadow hover:shadow-lg gap-2 transition animate-fade-in">
                <img src={item.images[0]} alt={item.name} className="h-12 w-12 object-cover rounded border-2 border-pink-300"/>
                <div className="flex-1 pl-2">
                  <div className="font-semibold text-pink-700">{item.name}</div>
                  <div className="text-xs text-gray-600">{item.metalType} ({item.purity}) | Stock: <span className={item.stock < 3 ? 'text-red-500 font-bold' : ''}>{item.stock}</span></div>
                  <div className="text-xs text-gray-500">{item.gender ? item.gender : ''}</div>
                </div>
                <button
                  className="text-xs bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-2 py-1 rounded transition shadow font-bold"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="text-xs bg-pink-100 hover:bg-pink-300 text-pink-700 px-2 py-1 rounded transition shadow font-bold"
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
          <form onSubmit={handleSubmit}
            className="w-full space-y-4 animate-fade-in">
            {/* All schema fields */}
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input name="name" value={formData.name} onChange={handleChange} required type="text"
                className="w-full px-3 py-2 rounded-lg border transition"/>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required
                className="w-full px-3 py-2 rounded-lg border transition"/>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-semibold mb-1">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required
                  className="w-full px-3 py-2 rounded-lg border transition">
                  <option value="">Select</option>
                  <option>Women</option>
                  <option>Men</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Metal</label>
                <select name="metalType" value={formData.metalType} onChange={handleChange} required
                  className="w-full px-3 py-2 rounded-lg border transition">
                  <option value="">Select</option>
                  <option>Gold</option>
                  <option>Silver</option>
                  <option>Platinum</option>
                  <option>Diamond</option>
                  <option>Artificial</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-semibold mb-1">Purity</label>
                <input name="purity" value={formData.purity} onChange={handleChange} required type="text"
                  placeholder="e.g. 22K, 925" className="w-full px-3 py-2 rounded-lg border focus:ring ring-pink-300 transition"/>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Weight</label>
                <input name="weight" value={formData.weight} onChange={handleChange} type="text"
                  placeholder="e.g. 13g" className="w-full px-3 py-2 rounded-lg border focus:ring ring-pink-300 transition"/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Stone Type</label>
              <input name="stoneType" value={formData.stoneType} onChange={handleChange} type="text"
                placeholder="e.g. Diamond" className="w-full px-3 py-2 rounded-lg border focus:ring ring-pink-300 transition"/>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Images</label>
              <input name="images" type="file" multiple accept="image/*" onChange={handleImageChange}
                className="w-full px-3 py-2 rounded-lg border focus:ring ring-pink-300 transition"/>
              <div className="flex gap-2 mt-1">
                {formData.images.map((src, idx) => (
                  <img key={idx} src={src} alt={`Preview ${idx}`}
                    className="h-8 w-8 object-cover rounded ring-2 ring-yellow-400"/>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Stock</label>
              <input name="stock" value={formData.stock} onChange={handleChange} type="number" min={1}
                className="w-full px-3 py-2 rounded-lg border focus:ring transition"/>
            </div>
            <div className="flex gap-3 mt-4 items-center">
              <button type="submit"
                disabled={loading}
                className="py-2 px-4 border font-bold rounded-lg transition shadow-lg">
                {editingId ? "Update" : "Add"}
              </button>
              {editingId && (
                <button type="button" onClick={handleCancelEdit}
                  className="py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-lg transition">
                  Cancel
                </button>
              )}
            </div>
            {loading && <div className="mt-2 text-center font-bold animate-pulse">Saving...</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
