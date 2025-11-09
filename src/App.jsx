import Home from "./Pages/Home"
import Doctors from "./Pages/Doctors"
import Login from "./Pages/Login"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import MyProfile from "./Pages/MyProfile"
import MyAppointments from "./Pages/MyAppointments"
import Appointment from "./Pages/Appointment"
import Navbar from "./Components/Navbar"
import Footer  from "./Components/Footer"
import AdminLogin from "./admin/Pages/AdminLogin"
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/doctors/:speciality" element={<Doctors/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/MyAppointments" element={<MyAppointments />} />
          <Route path="/Appointment/:docId" element={<Appointment />} />
          <Route path="/AdminLogin" element={<AdminLogin/>}/>
      </Routes>
      <Footer />
    </div>
  )
}
export default App
