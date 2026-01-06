import { useEffect, useRef, useState } from "react";
import FeatureSection from "../components/FeatureSection";
import JewellaryData from "../components/JewellaryData";
import JewellaryImages from "../components/JewellaryImages";
import { useParams } from "react-router-dom";
import { getJewellaryById } from "../api/jewellaryApi";
import { useLoader } from "../context/LoaderContext";

const JewellaryDetail = () => {
  const { id } = useParams();
  const [jewellary, setJewellary] = useState(null);
  const { show, hide } = useLoader();

  useEffect(() => {
    const api = async () => {
      try {
        show();
        const { data } = await getJewellaryById(id);
        setJewellary(data);
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
    if (!jewellary?.images) return;
    const next = () => {
      setCurrent((prev) => (prev + 1) % jewellary.images.length);
    };
    timeoutRef.current = setInterval(next, 3000);
    return () => clearInterval(timeoutRef.current);
  }, [jewellary?.images]);

  const handleThumbnailClick = (idx) => {
    setCurrent(idx);
    clearInterval(timeoutRef.current);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-6">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        <JewellaryImages
          product={jewellary}
          current={current}
          setCurrent={setCurrent}
          handleThumbnailClick={handleThumbnailClick}
        />

        <JewellaryData product={jewellary} />
      </div>

      <FeatureSection />
    </div>
  );
};

export default JewellaryDetail;
