import { useEffect, useState } from "react";

export default function JewelleryFilterSidebar({ show, onClose, filtersSchema, onApply, initialFilters }) {
  const [localFilters, setLocalFilters] = useState(initialFilters || {});

  useEffect(() => {
    setLocalFilters(initialFilters || {});
  }, [initialFilters]);

  const handleChange = (e) => {
    setLocalFilters({ ...localFilters, [e.target.name]: e.target.value });
  };

  const handleApply = () => {
    onApply(localFilters);
    onClose();
  };

  return (
    <div className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={onClose}>
      <div className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-xl transform transition-transform duration-300 p-5 ${show ? "translate-x-0" : "-translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button onClick={onClose} className="text-gray-500 text-2xl font-bold leading-none">×</button>
        </div>
        {filtersSchema.map(({ label, name, type, options }) => (
          <div key={name} className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">{label}</label>
            {type === "select" && (
              <select name={name} value={localFilters[name] || ""} onChange={handleChange} className="w-full p-2 border rounded-md focus:ring focus:ring-yellow-300">
                {options.map((opt) => (
                  <option key={opt} value={opt === "All" ? "" : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}
            {/* Could extend for checkboxes, range inputs etc */}
          </div>
        ))}

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">Cancel</button>
          <button onClick={handleApply} className="px-4 py-2 rounded-md bg-yellow-400 text-white hover:bg-yellow-500 transition">Apply</button>
        </div>
      </div>
    </div>
  );
}
