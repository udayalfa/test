import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { links } from "../utils/navLinks";

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
        <img
          src="/img/logo.svg"
          alt="Logo"
          className="w-[40vw] cursor-pointer"
          onClick={() => navigate("/")}
        />
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
        className={`fixed top-0 left-0 h-full w-[75%] max-w-xs bg-white z-50
  transform transition-transform duration-300
  ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <img
            src="/img/logo.svg"
            alt="Logo"
            className="w-32 cursor-pointer"
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
          />
          <button onClick={() => setOpen(false)} className="text-2xl cursor-pointer">
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
              className="group relative w-fit"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
