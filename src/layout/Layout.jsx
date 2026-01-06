import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";


function Layout() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Mobile */}
      <MobileNavbar />
    </>
  );
}

export default Layout;
