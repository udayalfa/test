import { useEffect, useState } from "react";
import { verifyUser } from "../api/authApi";
import { useLoader } from "../context/LoaderContext";

const useAuth = () => {
  const { show, hide } = useLoader();
  const [loading,setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const authentication = async () => {
      try {
        // show();
        setLoading(true)
        const response = await verifyUser(); // ✅ await
        if (response.success) {
          setIsAuthenticated(true);
          setUser(response.user);
        }
      } catch (e) {
        setIsAuthenticated(false);
        setError(e);
      } finally {
        setLoading(false)
        // hide();
      }
    };

    authentication();
  }, []);

  return { isAuthenticated,setIsAuthenticated,setUser, user, error,loading };
};

export default useAuth;
