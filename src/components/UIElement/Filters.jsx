import { RxCrossCircled } from "react-icons/rx";

export default function Filters({
  filters,
  setFilters,
  sidebarOpen,
  setSidebarOpen,
}) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Filters</h2>
        <RxCrossCircled
          onClick={() => setSidebarOpen(false)}
          className=" self-end sm:self-auto cursor-pointer w-6 h-6 text-gray-700 transition hover:rotate-90 hover:scale-110"
        />
      </div>

      {/* Filter Options */}
      <div className="p-4 space-y-4">
        {/* Gender */}
        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select
            name="gender"
            value={filters.gender}
            onChange={handleFilterChange}
            className="w-full border rounded-md p-2"
          >
            <option value="">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>

        {/* Metal Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Metal Type</label>
          <select
            name="metalType"
            value={filters.metalType}
            onChange={handleFilterChange}
            className="w-full border rounded-md p-2"
          >
            <option value="">All</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
            <option value="Platinum">Platinum</option>
            <option value="Diamond">Diamond</option>
            <option value="Artificial">Artificial</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Purity */}
        <div>
          <label className="block text-sm font-medium mb-1">Purity</label>
          <select
            name="purity"
            value={filters.purity}
            onChange={handleFilterChange}
            className="w-full border rounded-md p-2"
          >
            <option value="">All</option>
            <option value="22K">22K</option>
            <option value="18K">18K</option>
            <option value="925 Silver">925 Silver</option>
          </select>
        </div>

        {/* Stone Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Stone Type</label>
          <select
            name="stoneType"
            value={filters.stoneType}
            onChange={handleFilterChange}
            className="w-full border rounded-md p-2"
          >
            <option value="">All</option>
            <option value="Diamond">Diamond</option>
            <option value="Ruby">Ruby</option>
            <option value="Emerald">Emerald</option>
            <option value="Kundan">Kundan</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={() =>
            setFilters({
              gender: "",
              metalType: "",
              purity: "",
              stoneType: "",
            })
          }
          className="w-full cursor-pointer mt-4 bg-gray-100 hover:bg-gray-200 py-2 rounded-md text-center font-medium transition"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}
