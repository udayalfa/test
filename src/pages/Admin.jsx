import useAuth from "../hooks/useAuth";
import AdminLogin from "./AdminLogin";
import JewelleryAdminPanel from "./JewelleryAdminPage";

export default function Admin() {
  const {isAuthenticated, user } = useAuth();
 
  return (
    <>
      {isAuthenticated && user?.role == "admin" ? (
        <JewelleryAdminPanel />
      ) : (
        <AdminLogin />
      )}
    </>
  );
}
