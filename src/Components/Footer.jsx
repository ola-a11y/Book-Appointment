import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom"
const Footer = () => {
    const navigate = useNavigate()
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
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-2xl font-semibold text-gray-800 mb-4">Company</p>
            <ul className="flex flex-col gap-2 text-gray-600 hover:[&>li]:text-gray-900 cursor-pointer">
              <li onClick={()=>{navigate("/")}} >Home</li>
              <li onClick={()=>{navigate("/About")}} >About Us</li>
              <li onClick={()=>{navigate("/Contact")}} >Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="hover:text-gray-900">+0-000-000-000</li>
              <li className="hover:text-gray-900">ola@gmail.com</li>
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
