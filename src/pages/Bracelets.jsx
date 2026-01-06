import React, { useEffect, useState } from "react";
import JewelryCard from "../components/JewellaryCard";
import useJewelleryByCategory from "../hooks/useJewelleryByCategory";
import Filters from "../components/UIElement/Filters";
import { FiFilter } from "react-icons/fi";

function Bracelets() {
  const { jewellaries, error } = useJewelleryByCategory("Bracelet");
  const [filteredJewellaries, setFilteredJewellaries] = useState([]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [filters, setFilters] = useState({
    gender: "",
    metalType: "",
    purity: "",
    stoneType: "",
  });

  useEffect(() => {
    setFilteredJewellaries(jewellaries);
  }, [jewellaries]);

  // Apply filters
  useEffect(() => {
    let filtered = jewellaries;
    console.log(filtered, filters);
    if (filters.gender)
      filtered = filtered.filter((j) => j.gender === filters.gender);
    if (filters.metalType)
      filtered = filtered.filter((j) => j.metalType === filters.metalType);
    if (filters.purity)
      filtered = filtered.filter((j) => j.purity === filters.purity);
    if (filters.stoneType)
      filtered = filtered.filter((j) => j.stoneType === filters.stoneType);

    setFilteredJewellaries(filtered);
  }, [filters, jewellaries]);
  if (error) return <p>{error}</p>;
  return (
    <div className="w-full relative">
      {/* Heading */}
      <h1 className="text-center pt-6 sm:pt-8 lg:pt-10 px-4 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light leading-tight max-w-5xl mx-auto">
        Wrap Your Wrist in Wonder — Crafted to Sparkle, Designed to Last ✨
      </h1>

      {/* Filter Button */}
      <div className="flex justify-end max-w-5xl lg:max-w-full mx-auto px-4 mt-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex cursor-pointer items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          <FiFilter /> Filters
        </button>
      </div>

      {/* Grid Wrapper */}
      <div className="max-w-[1600px] mx-auto my-6 px-4">
        <div className="opacity-0 animate-slide-up delay-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredJewellaries.length > 0 ? (
            filteredJewellaries.map((jewellary) => (
              <JewelryCard key={jewellary._id} jewellary={jewellary} />
            ))
          ) : (
            <p className="text-center text-3xl col-span-full text-gray-500 mt-30 mb-50">
              No bracelets match the selected filters.
            </p>
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <Filters
        filters={filters}
        setFilters={setFilters}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out
"
        ></div>
      )}
    </div>
  );
}

export default Bracelets;
