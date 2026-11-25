import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { links } from "../utils/navLinks";
import { GiTrophy } from "react-icons/gi";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Top Bar */}
      <nav className="sticky top-0 z-40 flex items-center justify-between px-5 py-4 bg-white/90 backdrop-blur border-b border-gray-200 md:hidden">
        {/* Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="text-2xl font-medium text-gray-900"
        >
          ☰
        </button>

        {/* Text Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <GiTrophy className="w-6 h-6 text-yellow-600" />
          <span className="text-lg font-semibold tracking-[0.3em] text-gray-900">
            JAGDISH
          </span>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[75%] max-w-sm bg-white z-50
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <div
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <GiTrophy className="w-7 h-7 text-yellow-600" />
            <div className="leading-tight text-center">
              <p className="text-lg font-semibold tracking-[0.3em] text-gray-900">
                JAGDISH
              </p>
              <p className="text-[11px] font-medium tracking-[0.4em] text-gray-500 mt-1">
                INDUSTRIES
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-2xl text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col px-6 py-8 space-y-6 text-[18px] text-gray-800">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setOpen(false)}
              className="
                font-medium tracking-wide
                transition-colors duration-200
                hover:text-yellow-600
              "
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
