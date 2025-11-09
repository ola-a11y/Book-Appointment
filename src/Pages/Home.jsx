import React from "react"
import HeroSection from "../Components/Hero"
import Speciality from "../Components/Speciality"
import TopDoctors from '../Components/TopDoctors'
import Banner from "../Components/Banner";
const Home = () => { 
  return (
    <div className="text-black">
     <HeroSection/>
     <Speciality />
     <TopDoctors />
     <Banner />
    </div>
  )
}
export default Home
