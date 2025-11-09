import { NavLink, useNavigate } from "react-router-dom"
import { assets } from "../assets/assets_frontend/assets"
import { useState } from "react";
const Navbar = () => {
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/doctors", label: "ALL DOCTORS" },
  { to: "/About", label: "ABOUT" },
  { to: "/Contact", label: "CONTACT" },
  { to: "/AdminLogin", label: "AdminLogin"}
];
const navigate = useNavigate()
const [menu, setMenu] = useState(false)
const [token, setToken] = useState(true)
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
        <img src= {assets.logo} alt="logo" className="w-44 cursor-pointer" onClick={()=>{navigate("/")}}/>
        <div>
        <ul className="hidden md-lg:flex items-start gap-5 font-medium">
      {navLinks.map(({ to, label }) => (
        <NavLink key={to} to={to} className="text-center">
          {({ isActive }) => (
            <>
              <li className="py-1">{label}</li>
              {isActive && (
                <hr className="border-none outline-none h-[2px] bg-primary w-3/5 m-auto" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </ul>
        </div>
        <div className="flex gap-2">
         {
            token?   
            <div className="flex items-center gap-2 cursor-pointer group relative:">
                <img src={assets.profile_pic} alt="" className="w-8 rounded-full" />
                <img src={assets.dropdown_icon} alt="" className="w-2.5 " />
                 <div className="absolute right-10 top-6 md:right-36 pt-14 text-base font-medium text-gray-600 z-20 group-hover:block hidden">
                    <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 duration-200">
                        <p onClick={()=>{navigate("/MyProfile")}} className="hover:text-black cursor-pointer">MyProfile</p>
                        <p onClick={()=>{navigate("/MyAppointments")}} className="hover:text-black cursor-pointer">MyAppointments</p>
                        <p onClick={()=>{setToken(false)}} className="hover:text-black cursor-pointer">Logout</p>
                    </div>
                 </div>  
            </div> 
              
        :<button onClick={()=>{navigate("/Login")}} className="bg-primary text-white py-3 px-8 rounded-full font-light hidden md-lg:block">Create Account</button>
        }   
         <img onClick={() => setMenu(true)}  className="w-6 md-lg:hidden" src={assets.menu_icon} alt="menu_icon" />
          {/* mobile Menu */}
          <div className={`md-lg:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all ${menu ? 'fixed w-full': 'h-0 w-0'}`} >
            <div className="flex items-center justify-between px-5 py-6">
              <img className="w-36" src={assets.logo} alt="logo"/>
              <img className="w-7" onClick={() => setMenu(false)} src={assets.cross_icon} alt="cross_icon" />
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
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
export default Navbar