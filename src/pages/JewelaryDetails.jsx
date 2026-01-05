import { useEffect, useRef, useState } from "react";
import FeatureSection from "../components/FeatureSection";
import JewellaryData from "../components/JewellaryData";
import JewellaryImages from "../components/JewellaryImages";
import { useLocation, useParams } from "react-router-dom";
import { getJewellaryById } from "../api/jewellaryApi";
import { useLoader } from "../context/LoaderContext";

const JewellaryDetail = () => {
  const { id } = useParams();
  const [jewellary, setJewellary] = useState(null);
  const { show, hide } = useLoader();
  useEffect(() => {
    const api = async () => {
      try {
        show()
        const { data } = await getJewellaryById(id);
        setJewellary(data);
      } catch (e) {
        console.log(e)
      }finally{
        hide()
      }
    };
    api();
  }, [id]);

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  
  // Auto-slide every 3 seconds
  useEffect(() => {
    const next = () => {
      setCurrent((prev) => (prev + 1) % jewellary?.images.length);
    };
    timeoutRef.current = setInterval(next, 3000);
    return () => clearInterval(timeoutRef.current);
  }, [jewellary?.images.length]);
  
 

  // Manual thumbnail click resets timer
  const handleThumbnailClick = (idx) => {
    setCurrent(idx);
    clearInterval(timeoutRef.current);
  };

  return (
    <div className="">
      <div className="p-6 flex flex-col md:flex-row gap-10">
        <JewellaryImages
          product={jewellary}
          current={current}
          setCurrent={setCurrent}
          handleThumbnailClick={handleThumbnailClick}
        />

        <JewellaryData
          product={jewellary}
        />
      </div>
      {/* Image section */}

      <FeatureSection />
    </div>
  );
};

export default JewellaryDetail;
