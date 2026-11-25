import { Link, useNavigate, useLocation } from "react-router-dom";
import { links } from "../utils/navLinks";
import { GiTrophy } from "react-icons/gi";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="
        sticky top-0 z-40
        hidden md:flex
        h-24
        items-end justify-between
        px-8 lg:px-12
        bg-white/90 backdrop-blur
        border-b border-gray-200
        whitespace-nowrap
      "
    >
      {/* LOGO */}
      <div
        onClick={() => navigate("/")}
        className="
          cursor-pointer
          flex items-center gap-3
          select-none
        "
      >
        <GiTrophy className="w-9 h-9 text-yellow-600" />
        <h1 className="text-3xl font-serif tracking-[0.25em] text-gray-900">
          JAGDISH
          <span className="block text-sm tracking-widest text-gray-600 text-center">
            INDUSTRIES
          </span>
        </h1>
      </div>

      {/* RIGHT LINKS */}
      <div
        className="
          flex-1 flex justify-end items-end
          gap-[clamp(16px,2vw,40px)]
          text-gray-700
          text-[clamp(14px,1.05vw,18px)]
          pb-2
        "
      >
        {links.map((link, index) => {
          const active = isActive(link.path);

          return (
            <Link
              key={index + 7}
              to={link.path}
              className={`
                relative font-medium tracking-wide
                transition-colors duration-300
                ${active ? "text-gray-900" : "hover:text-gray-900"}
              `}
            >
              {link.name}
              <span
                className={`
                  absolute left-1/2 -bottom-1 h-[2px] w-full
                  bg-yellow-600
                  transition-all duration-300
                  ${
                    active
                      ? "scale-x-100 -translate-x-1/2"
                      : "scale-x-0 group-hover:scale-x-100 -translate-x-1/2"
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
