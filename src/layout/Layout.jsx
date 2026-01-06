import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar className="hidden md:flex" />
      <MobileNavbar className="md:hidden" />
    </>
  );
}

export default Layout;
