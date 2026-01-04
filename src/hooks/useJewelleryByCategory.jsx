import { useEffect, useState } from "react";
import { useLoader } from "../context/LoaderContext";
import { getJewellaryByCategory } from "../api/jewellaryApi";

const useJewelleryByCategory = (category) => {
  const { show, hide } = useLoader();
  const [jewellaries, setJewellaries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;

    const fetchJewellery = async () => { 
      try {
        show();
        const { data } = await getJewellaryByCategory(category);
        setJewellaries(data.jewellery || data);
      } catch (err) {
        setError("Failed to load jewellery");
      } finally {
        hide();
      }
    };

    fetchJewellery();
  }, [category]);

  return { jewellaries, error };
};

export default useJewelleryByCategory;
