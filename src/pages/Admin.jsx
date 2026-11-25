import useAuth from "../hooks/useAuth";
import AdminLogin from "./AdminLogin";
import TrophyAdminPanel from "./TrophyAdminPanel";


export default function Admin() {
  const {isAuthenticated, user , setIsAuthenticated,setUser } = useAuth();
  
  return (
    <>
        <TrophyAdminPanel />
      {/* {isAuthenticated && user?.role == "admin" ? (
      ) : (
        <AdminLogin setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
      )} */}
    </>
  );
}
