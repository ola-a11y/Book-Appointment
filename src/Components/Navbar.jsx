import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const Navbar = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/doctors", label: "ALL DOCTORS" },
    { to: "/About", label: "ABOUT" },
    { to: "/Contact", label: "CONTACT" },
    { to: "/AdminLogin", label: "AdminLogin" }
  ];

  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [token, setToken] = useState(true); 


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); 


  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);


  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 dark:border-b-gray-700">
      
      
      <Link to="/" aria-label="Go to Homepage">
        <img src={assets.logo} alt="Prescripto logo" className="w-44 cursor-pointer" />
      </Link>

      
      <div>
        <ul className="hidden md:flex items-start gap-5 font-medium"> {/* <-- استخدمنا 'md:' */}
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} className="text-center dark:text-gray-300">
              {({ isActive }) => (
                <>
                  <li className={`py-1 ${isActive ? "text-primary" : "hover:text-gray-500"}`}>
                    {label}
                  </li>
                  {isActive && (
                    <hr className="border-none outline-none h-[2px] bg-primary w-3/5 m-auto" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="flex gap-2 items-center">
        {token ? (
         
          <div className="relative" ref={dropdownRef}>
            
          
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
              aria-label="User profile menu"
            >
              <img src={assets.profile_pic} alt="User profile" className="w-8 rounded-full" />
              <img src={assets.dropdown_icon} alt="" className="w-2.5" />
            </button>

        
            {isDropdownOpen && (
              <div className="absolute right-0 top-12 pt-2 text-base font-medium text-gray-600 dark:text-gray-300 z-20">
                <div className="min-w-48 bg-stone-100 dark:bg-gray-800 rounded-lg shadow-lg flex flex-col gap-1 p-2">
                  
                 
                  <Link 
                    to="/MyProfile" 
                    onClick={() => setIsDropdownOpen(false)} 
                    className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    My Profile
                  </Link>
                  <Link 
                    to="/MyAppointments" 
                    onClick={() => setIsDropdownOpen(false)}
                    className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    My Appointments
                  </Link>
                  <button 
                    onClick={() => { setToken(false); setIsDropdownOpen(false); }} 
                    className="hover:bg-gray-200 dark:hover:bg-gray-700 text-red-600 p-2 rounded cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Logout
                  </button>

                </div>
              </div>
            )}
          </div>
        ) : (
          <button 
            onClick={() => { navigate("/Login") }} 
            className="bg-primary text-white py-3 px-8 rounded-full font-light hidden md:block focus:outline-none focus:ring-2 focus:ring-blue-500" // <-- استخدمنا 'md:'
          >
            Create Account
          </button>
        )}

       
        <button 
          onClick={() => setMenu(true)} 
          className="w-6 md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 rounded" // <-- استخدمنا 'md:'
          aria-label="Open menu"
        >
          <img src={assets.menu_icon} alt="" /> 
        </button>

        {/* mobile Menu */}
        <div className={`md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden 
                       bg-white transition-all duration-300 ${menu ? 'fixed w-full opacity-100' : 'h-0 w-0 opacity-0'}`} >
          
          <div className="flex items-center justify-between px-5 py-6">
            <Link to="/" onClick={() => setMenu(false)}>
              <img className="w-36" src={assets.logo} alt="Prescripto logo"/>
            </Link>
            <button 
              onClick={() => setMenu(false)} 
              className="w-7 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="Close menu"
            >
              <img src={assets.cross_icon} alt="" />
            </button>
          </div>
          
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium dark:text-white">
            <NavLink to="/" onClick={() => setMenu(false)} className={({ isActive }) =>`px-4 py-2 rounded inline-block ${isActive ? 'bg-primary text-white' : ''}`}>Home</NavLink>
            <NavLink to="/doctors" onClick={() => setMenu(false)} className={({ isActive }) =>`px-4 py-2 rounded inline-block ${isActive ? 'bg-primary text-white' : ''}`}>ALL DOCTORS</NavLink>
            <NavLink to="/About" onClick={() => setMenu(false)} className={({ isActive }) =>`px-4 py-2 rounded inline-block ${isActive ? 'bg-primary text-white' : ''}`}>ABOUT</NavLink>
            <NavLink to="/Contact" onClick={() => setMenu(false)} className={({ isActive }) =>`px-4 py-2 rounded inline-block ${isActive ? 'bg-primary text-white' : ''}`}>CONTACT</NavLink>
          </ul> 
        </div> 
      </div>
    </div>
  )
}
export default Navbar;