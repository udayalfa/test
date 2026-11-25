import { useEffect, useRef, useState } from "react";
import FeatureSection from "../components/FeatureSection";
import JewellaryData from "../components/JewellaryData";
import JewellaryImages from "../components/JewellaryImages";
import { useParams } from "react-router-dom";
import { useLoader } from "../context/LoaderContext";
import { getTrophyById } from "../api/jewellaryApi";
import TrophyImages from "../components/JewellaryImages";
import TrophyData from "../components/JewellaryData";

const TrophyDetails = () => {
  const { id } = useParams();
  const [trophy, setTrophy] = useState(null);
  const { show, hide } = useLoader();

  useEffect(() => {
    const api = async () => {
      try {
        show();
        const { data } = await getTrophyById(id);
        setTrophy(data);
      } catch (e) {
        console.log(e);
      } finally {
        hide();
      }
    };
    api();
  }, [id]);

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (!trophy?.images) return;
    const next = () => {
      setCurrent((prev) => (prev + 1) % trophy?.images.length);
    };
    timeoutRef.current = setInterval(next, 3000);
    return () => clearInterval(timeoutRef.current);
  }, [trophy?.images]);

  const handleThumbnailClick = (idx) => {
    setCurrent(idx);
    clearInterval(timeoutRef.current);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-6">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        <TrophyImages
          product={trophy}
          current={current}
          setCurrent={setCurrent}
          handleThumbnailClick={handleThumbnailClick}
        />

        <TrophyData product={trophy} />
      </div>
      <FeatureSection />
    </div>
  );
};

export default TrophyDetails;
