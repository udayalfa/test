import { useEffect, useState } from "react";
import JewelryCard from "../components/JewellaryCard";
import { getHomeJewellery } from "../api/jewellaryApi";
import { useLoader } from "../context/LoaderContext";
import { error } from "../components/UIElement/toastsObj";

function Home() {
  const [jewellaries, setJewellaries] = useState([]);
  const { show, hide } = useLoader();

  useEffect(() => {
    const api = async () => {
      try {
        show();
        const { data } = await getHomeJewellery();
        setJewellaries(data);
      } catch (e) {
        error("Something went wrong");
      } finally {
        hide();
      }
    };
    api();
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-[#fffaf5] via-white to-[#fffaf5] overflow-hidden">
      {/* ===== TOP AUTO SCROLL STRIP ===== */}
      <div className="relative w-full overflow-hidden py-6 bg-white/60 backdrop-blur">
        <div className="flex gap-6 animate-marquee">
          {[...jewellaries, ...jewellaries].map((j, i) => (
            <img
              key={i}
              src={j.images[0]}
              alt=""
              className="h-24 w-24 object-cover rounded-xl shadow-sm"
            />
          ))}
        </div>
      </div>

      {/* HERO */}
      <div className="text-center pt-16 pb-12 px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide animate-fade-in">
          Crafted to Shine ✨
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base animate-fade-in delay-200">
          Discover a refined selection of fine jewelry, thoughtfully refreshed just for you.
        </p>
      </div>

      {/* DIVIDER */}
      <div className="flex justify-center mb-12">
        <span className="w-24 h-px bg-gray-300"></span>
      </div>

      {/* GRID WRAPPER */}
      <div className="max-w-[1600px] mx-auto px-6 pb-24">
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-sm p-6 lg:p-10">
          <p className="text-center uppercase tracking-widest text-xs text-gray-500 mb-10">
            Curated For You
          </p>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              xl:grid-cols-4
              gap-6
              lg:gap-8
            "
          >
            {jewellaries.map((jewellary, index) => (
              <div
                key={jewellary._id}
                className="animate-float"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <JewelryCard jewellary={jewellary} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
