import { Link, useNavigate, useLocation } from "react-router-dom";
import { links } from "../utils/navLinks";
import { GiDiamondRing, GiTrophy } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="
        sticky top-0 z-30
        hidden md:flex
         items-baseline-last justify-between
        px-6 lg:px-8
        py-4
        bg-white
        transition-shadow duration-300
        whitespace-nowrap
      "
    >
      {/* LEFT LINKS */}
      <div
        className="
          flex-1
          flex
          justify-start
          items-baseline
          gap-[clamp(14px,1.7vw,36px)]
          text-gray-900
          text-[clamp(14px,1.15vw,19px)]
          max-w-[42%]
        "
      >
        {links.slice(0, 8).map((link, index) => {
          const active = isActive(link.path);

          return (
            <Link
              key={index}
              to={link.path}
              className={`group relative transition-colors duration-300 ${
                active ? "text-black" : "hover:text-black"
              }`}
            >
              {link.name}
              <span
                className={`
                  absolute left-0 -bottom-1 w-full h-0.5 bg-black
                  transition-transform duration-300 origin-left
                  ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }
                `}
              />
            </Link>
          );
        })}
      </div>

      {/* LOGO */}
      <div
        onClick={() => navigate("/")}
        className="
          cursor-pointer
          flex items-center gap-3
          select-none
        "
      >
        <IoDiamond   className="w-9 h-9 text-[#B9F2FF]" />
        <h1 className="text-3xl font-serif tracking-[0.25em] text-gray-900">
          ABNASH
          <span className="block text-sm tracking-widest text-gray-600 text-center">
            JEWELLERS
          </span>
        </h1>
      </div>

      {/* RIGHT LINKS */}
      <div
        className="
          flex-1
          flex
          justify-end
          items-baseline
          gap-[clamp(14px,1.7vw,36px)]
          text-gray-900
          text-[clamp(14px,1.15vw,19px)]
          max-w-[42%]
        "
      >
        {links.slice(8).map((link, index) => {
          const active = isActive(link.path);

          return (
            <Link
              key={index + 5}
              to={link.path}
              className={`group relative transition-colors duration-300 ${
                active ? "text-black" : "hover:text-black"
              }`}
            >
              {link.name}
              <span
                className={`
                  absolute left-0 -bottom-1 w-full h-0.5 bg-black
                  transition-transform duration-300 origin-left
                  ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }
                `}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
