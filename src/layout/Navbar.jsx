import { Link, useNavigate, useLocation } from "react-router-dom";
import { links } from "../utils/navLinks";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="
        sticky top-0 z-50
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
        {links.slice(0, 7).map((link, index) => {
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
        className="cursor-pointer flex-shrink-0 mx-4"
      >
        <img
          src="/img/logo.svg"
          alt="Logo"
          className="w-[clamp(155px,16vw,240px)] transition-all"
        />
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
        {links.slice(7).map((link, index) => {
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
