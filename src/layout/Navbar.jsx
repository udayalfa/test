import { Link, useNavigate, useLocation } from "react-router-dom";
import { links } from "../utils/navLinks";
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

        flex-col lg:flex-row

        items-center
        px-6 lg:px-8
        py-4
        bg-white
        whitespace-nowrap

        gap-4 lg:gap-0

        relative   /* ✅ REQUIRED */
      "
    >
      {/* LOGO */}
      <div
        onClick={() => navigate("/")}
        className="
          cursor-pointer
          flex items-center gap-2
          select-none
          flex-shrink-0

          order-1 lg:order-none
          
          lg:absolute lg:left-1/2 lg:-translate-x-1/2   /* ✅ CENTER FIX */
        "
      >
        <IoDiamond className="w-8 h-8 lg:w-9 lg:h-9 text-[#B9F2FF]" />
        <h1 className="text-xl lg:text-3xl font-serif tracking-[0.2em] text-gray-900">
          ABNASH
          <span className="block text-xs lg:text-sm tracking-widest text-gray-600 text-center">
            JEWELLERS
          </span>
        </h1>
      </div>

      {/* LINKS ROW */}
      <div
        className="
          w-full
          flex
          justify-between
          items-center

          order-2 lg:order-none
        "
      >
        {/* LEFT LINKS */}
        <div
          className="lg:py-5
            flex items-center
            gap-[clamp(10px,1.2vw,24px)]
            text-gray-900
            text-[clamp(13px,1vw,17px)]
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
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* RIGHT LINKS */}
        <div
          className="
            flex items-center
            gap-[clamp(10px,1.2vw,24px)]
            text-gray-900
            text-[clamp(13px,1vw,17px)]
          "
        >
          {links.slice(8).map((link, index) => {
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
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;