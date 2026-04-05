import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { links } from "../utils/navLinks";
import { IoDiamond } from "react-icons/io5";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <nav className="sticky top-0 z-30 flex items-center justify-between px-4 py-4 bg-white shadow-sm md:hidden">
        {/* Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="text-2xl font-bold cursor-pointer"
        >
          ☰
        </button>

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="
                  cursor-pointer
                  flex items-center gap-3
                  select-none
                "
        >
          <IoDiamond className="w-9 h-9 text-[#B9F2FF]" />
          <h1 className="text-3xl font-serif tracking-[0.25em] text-gray-900">
            ABNASH
            <span className="block text-sm tracking-widest text-gray-600 text-center">
              JEWELLERS
            </span>
          </h1>
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
        className={`fixed top-0 left-0 h-full w-[65%] max-w-xs bg-white z-50
  transform transition-transform duration-300
  ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center gap-2">
          <IoDiamond className="w-8 h-8 lg:w-9 lg:h-9 text-[#B9F2FF]" />
        <h1 className="text-xl lg:text-3xl font-serif tracking-[0.2em] text-gray-900">
          ABNASH
          <span className="block text-xs lg:text-sm tracking-widest text-gray-600 text-center">
            JEWELLERS
          </span>
        </h1>
          </div>
          
          
          <button
            onClick={() => setOpen(false)}
            className="text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col px-6 py-6 space-y-6 text-[18px] text-gray-900">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setOpen(false)}
              className="group relative w-full"
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
