import React from "react";
import { links } from "../utils/navLinks";

const Footer = () => (
  <footer className="bg-custom-yellow py-12 px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
      {/* About Us */}
      <div>
        <h3 className="text-3xl mb-4 ">About Us</h3>
        <p className="text-xl text-gray-800">
          ABNASH isn’t just crystals, it’s passion poured into every ornament.
          Our dedicated team of over 108 full-time experts, designers, and
          stylists collaborate meticulously to deliver unparalleled quality and
          unmatched customer satisfaction.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-3xl">Quick Links</h3>
        <ul className="text-xl space-y-2 mt-5 cursor-pointer">
          {links.map((link) => (
            <li key={link.name} className="hover:underline">
              {link.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-3xl">Contact Us</h1>
        <div className="text-xl space-y-2 mt-5">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="mt-4 flex justify-around">
           <button className="border rounded-md px-8 py-3 font-semibold hover:bg-gray-900 hover:text-white cursor-pointer transition">
          Contact Us
        </button>
         <button className="border rounded-md px-8 py-3 font-semibold hover:bg-gray-900 hover:text-white cursor-pointer transition">
          Find a Store
        </button>
        </div>
      </div>
    </div>

    {/* Social Icons & Copyright */}
    <div className="mt-12 flex justify-center items-center space-x-4 text-black text-xl select-auto">
      {/* You can replace these with icons from react-icons or heroicons */}
      <img src="/img/instagram.svg" className="w-7 h-7 cursor-pointer" alt="" />
      <img src="/img/whatsapp.svg" className="w-6 h-6 cursor-pointer" alt="" />
      <img src="/img/facebook.svg" className="w-6 h-6 cursor-pointer" alt="" />
      <img src="/img/twitter.svg" className="w-5 h-5 cursor-pointer" alt="" />
    </div>

    <p className="text-center text-xs text-gray-600 mt-6 select-none">
      Copyright © 2025 Abnash Jewellers. All rights reserved.
    </p>
  </footer>
);

export default Footer;
