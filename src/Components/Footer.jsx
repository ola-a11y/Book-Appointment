import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <div className="md:mx-10 ">
      {/* Grid Section */}
      <div className="px-6 py-12 mt-20">
        <div className="grid sm:grid-cols-[2fr_1fr_1fr] gap-10">
          {/* Logo & Description */}
          <div>
            <img
              className="mb-5 w-40"
              src={assets.logo}
              alt="logo" 
            />
            <p className="max-w-md text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
          </div>

          {/* Company Links */}
          <div>
    
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Company</h2>
            
            <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer">
              <li className="hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 w-fit">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 w-fit">
                <Link to="/About">About Us</Link>
              </li>
              <li className="hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 w-fit">
                <Link to="/Contact">Contact Us</Link>
              </li>
              <li className="hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 w-fit">
                {/* (افترضت إن دي صفحة برضه) */}
                <Link to="/privacy-policy">Privacy Policy</Link> 
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>

            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <a href="tel:+0000000000" className="hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">
                  +0-000-000-000
                </a>
              </li>
              <li>
                <a href="mailto:prescripto@gmail.com" className="hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">
                  prescripto@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-200 text-center py-5">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} .dev 
        </p>
      </div>
    </div>
  );
};

export default Footer;
