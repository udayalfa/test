import React from "react";
import { links } from "../utils/navLinks";
import { Link, useNavigate } from "react-router-dom";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-custom-yellow py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
        {/* About Us */}
        <div>
          <h3 className="text-3xl mb-4 ">About Us</h3>
          <p className="text-xl text-gray-800">
            At ABNASH, every piece of jewelry is a labor of love. From concept
            to creation, our skilled designers and stylists pour passion and
            precision into each ornament, delivering exceptional quality and a
            truly unforgettable experience for every customer.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-3xl">Quick Links</h3>
          <ul className="text-xl space-y-2 mt-5 cursor-pointer">
            {links.map((link) => (
              <div>
                <Link
                  to={link.path}
                  key={link.name}
                  className="hover:underline"
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-3xl">Contact Us</h1>
          <div className="text-xl space-y-3 mt-5 text-gray-700">
            <p>Have a question or a custom jewelry idea?</p>
            <p>We’re here to help with orders, designs, and inquiries.</p>
            <p>Expect a response from our team within 24 hours.</p>

            <div className="pt-3 space-y-2">
              {/* Canada */}
              <div className="flex items-center space-x-2">
                <FaPhoneAlt />
                <span className="text-lg">🇨🇦</span>
                {/* <span>Phone:</span> */}
                <a
                  href="tel:+15069888000"
                  className="font-medium text-black hover:underline"
                >
                  +1 (506) 988-8000
                </a>
              </div>

              {/* India */}
              <div className="flex items-center space-x-2">
                <FaPhoneAlt />
                <span className="text-lg">🇮🇳</span>
                {/* <span>Phone:</span> */}
                <a
                  href="tel:+919888471818"
                  className="font-medium text-black hover:underline"
                >
                  +91 98884 71818
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <MdEmail />
                <span>Email:</span>
                <a
                  href="mailto:Abnashsoni@gmail.com"
                  className="font-medium text-black hover:underline"
                >
                  Abnashsoni@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-around">
            <button
              onClick={() => navigate("/contact")}
              className="border rounded-md px-8 py-3 font-semibold hover:bg-gray-900 hover:text-white cursor-pointer transition"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate("/contact#find-us")}
              className="border rounded-md px-8 py-3 font-semibold hover:bg-gray-900 hover:text-white cursor-pointer transition"
            >
              Find a Store
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons & Copyright */}
      <div className="mt-12 flex justify-center items-center space-x-4 text-black text-xl select-auto">
        {/* You can replace these with icons from react-icons or heroicons */}
        <img
          src="/img/instagram.svg"
          className="w-7 h-7 cursor-pointer"
          alt=""
        />
        <img
          src="/img/whatsapp.svg"
          className="w-6 h-6 cursor-pointer"
          alt=""
        />
        <img
          src="/img/facebook.svg"
          className="w-6 h-6 cursor-pointer"
          alt=""
        />
        <img src="/img/twitter.svg" className="w-5 h-5 cursor-pointer" alt="" />
      </div>

      <p className="text-center text-xs text-gray-600 mt-6 select-none">
        Copyright © 2025 Abnash Jewellers. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
