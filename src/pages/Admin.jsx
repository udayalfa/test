import useAuth from "../hooks/useAuth";
import AdminLogin from "./AdminLogin";
import JewelleryAdminPanel from "./JewelleryAdminPage";

export default function Admin() {
  const {isAuthenticated, user , setIsAuthenticated,setUser } = useAuth();
  
  return (
    <>
      {isAuthenticated && user?.role == "admin" ? (
        <JewelleryAdminPanel />
      ) : (
        <AdminLogin setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
      )}
    </>
  );
}
