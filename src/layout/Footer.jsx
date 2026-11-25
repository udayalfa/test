import React from "react";
import { links } from "../utils/navLinks";
import { Link, useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-custom-yellow text-gray-900">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* About */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 relative after:block after:w-12 after:h-1 after:bg-black after:mt-2">
            About Us
          </h3>
          <p className="text-base leading-relaxed text-gray-800">
            At <span className="font-semibold">Jagdish</span>, every creation is
            crafted with pride and purpose. Our skilled craftsmen and designers
            bring precision, passion, and attention to detail into every trophy,
            award, medal, and memento.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 relative after:block after:w-12 after:h-1 after:bg-black after:mt-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-base">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:translate-x-1 inline-block transition-all duration-200 hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 relative after:block after:w-12 after:h-1 after:bg-black after:mt-2">
            Contact Us
          </h3>

          <p className="text-base text-gray-700 mb-4">
            Have a question or a custom trophy idea?  
            Our team usually responds within 24 hours.
          </p>

          <div className="space-y-3 text-base">
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <a
                href="tel:+918360669121"
                className="hover:underline font-medium"
              >
                +91 83606 69121
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <a
                href="tel:+919814772525"
                className="hover:underline font-medium"
              >
                +91 98147 72525
              </a>
            </div>
            

            <div className="flex items-center gap-3">
              <MdEmail />
              <a
                href="mailto:Karankathuriaedu91@gmail.com"
                className="hover:underline font-medium break-all"
              >
                Karankathuriaedu91@gmail.com
              </a>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="border cursor-pointer border-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate("/contact#find-us")}
              className="border cursor-pointer border-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition"
            >
              Find a Store
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black/20" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Social Icons */}
        <div className="flex gap-5">
          <img src="/img/instagram.svg" className="w-6 hover:scale-110 transition cursor-pointer" alt="Instagram" />
          <img src="/img/whatsapp.svg" className="w-6 hover:scale-110 transition cursor-pointer" alt="WhatsApp" />
          <img src="/img/facebook.svg" className="w-6 hover:scale-110 transition cursor-pointer" alt="Facebook" />
          <img src="/img/twitter.svg" className="w-5 hover:scale-110 transition cursor-pointer" alt="Twitter" />
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-700 text-center">
          © 2025 Jagdish Industries. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
