import { Link, useNavigate } from "react-router-dom";
import { links } from "../utils/navLinks";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={`sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white transition-shadow duration-300`}>
      {/* Left side: navigation items */}
      <div className="flex-1 flex justify-start space-x-8 text-gray-900 text-[19px]">
        {links.slice(0, 7).map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="group hover:text-black relative transition-colors duration-300"
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        ))}
      </div>

      {/* Center: Logo */}
      <div onClick={()=>navigate("/")} className=" cursor-pointer">
        <img src="/img/logo.svg" className="w-[18vw]" alt="" />
      </div>

      {/* Right side: navigation items + cart icon */}
      <div className="flex-1 flex justify-end items-center space-x-8 text-gray-900 text-[19px]">
        {links.slice(7).map((link, index) => (
          <Link
            key={index + 5}
            to={link.path}
            className="group hover:text-black relative transition-colors duration-300"
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        ))}
        {/* <ShoppingBagIcon className="w-5 h-5 text-gray-800 cursor-pointer hover:text-black transition" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
