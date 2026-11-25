import { useEffect, useState } from "react";
import { useLoader } from "../context/LoaderContext";
import { getTrophyByCategory } from "../api/jewellaryApi";

const useTrophyByCategory = (category) => {
  const { show, hide } = useLoader();
  const [trophies, setTrophies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;

    const fetchTrophies = async () => { 
      try {
        show();
        const { data } = await getTrophyByCategory(category);
        setTrophies(data);
      } catch (err) {
        setError("Failed to load jewellery");
      } finally {
        hide();
      }
    };

    fetchTrophies();
  }, [category]);

  return { trophies, error };
};

export default useTrophyByCategory;
