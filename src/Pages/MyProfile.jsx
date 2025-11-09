import { useState } from "react"
import { assets } from "../assets/assets_frontend/assets"
const MyProfile = () => {
  const [userDate , setUserDate] = useState({
    name:"mohammed",
    image:assets.profile_pic,
    email:'mohammed@gmail.com',
    phone: '+20 333 333 333',
    address:{
      line1:'Egypt',
      line2:'Cairo'
    },
    gendar:'Male',
    dob:'2001-10-24'
})
  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className="">
<div className="mt-6 max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-6 space-y-8">
  
  <div className="flex flex-col items-center text-center">
    <img
      src={userDate.image}
      alt="Profile"
      className="w-32 h-32 rounded-full object-cover border-4 border-blue-200"
    />
    {isEdit ? (
      <input
        type="text"
        value={userDate.name}
        onChange={(e) => setUserDate((prev) => ({ ...prev, name: e.target.value }))}
        className="mt-3 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
      />
    ) : (
      <p className="mt-3 text-xl font-semibold text-gray-700">{userDate.name}</p>
    )}
  </div>

  
  <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
    <p className="text-lg font-semibold text-blue-600 mb-4">Contact Information</p>

    <p className="text-sm font-medium text-gray-500">Email:</p>
    <p className="mb-3 text-sm text-blue-500">{userDate.email}</p>

    <p className="text-sm font-medium text-gray-500">Phone:</p>
    {isEdit ? (
      <input
        type="text"
        value={userDate.phone}
        onChange={(e) => setUserDate((prev) => ({ ...prev, phone: e.target.value }))}
        className="border border-gray-300 rounded-lg px-3 py-2 mb-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
      />
    ) : (
      <p className="mb-3 text-sm text-blue-500">{userDate.phone}</p>
    )}

    <p className="text-sm font-medium text-gray-500">Address:</p>
    {isEdit ? (
      <div className="space-y-2">
        <input
          type="text"
          value={userDate.address.line1}
          onChange={(e) =>
            setUserDate((prev) => ({
              ...prev,
              address: { ...prev.address, line1: e.target.value },
            }))
          }
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="text"
          value={userDate.address.line2}
          onChange={(e) =>
            setUserDate((prev) => ({
              ...prev,
              address: { ...prev.address, line2: e.target.value },
            }))
          }
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>
    ) : (
      <div>
        <p className="text-sm">{userDate.address.line1}</p>
        <p className="text-sm">{userDate.address.line2}</p>
      </div>
    )}
  </div>

 
  <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
    <p className="text-lg font-semibold text-blue-600 mb-4">Basic Information</p>
    
    <p className="text-sm font-medium text-gray-500">Gender:</p>
    {isEdit ? (
      <select
        onChange={(e) => setUserDate((prev) => ({ ...prev, gendar: e.target.value }))} 
        value={userDate.gendar}
        className="border border-gray-300 rounded-lg px-3 py-2 mb-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    ) : (
      <p className="mb-3 text-sm">{userDate.gendar}</p>
    )}
    
    <p className="text-sm font-medium text-gray-500">Birthday:</p>
    {isEdit ? (
      <input
        type="date"
        value={userDate.dob}
        onChange={(e) => setUserDate((prev) => ({ ...prev, dob: e.target.value }))}
        className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
      />
    ) : (
      <p className="text-sm">{userDate.dob}</p>
    )}
  </div>

  
  <div className="text-center">
    {isEdit ? (
      <button
        onClick={() => setIsEdit(false)}
        className="px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-indigo-500 transition"
      >
        Save Information
      </button>
    ) : (
      <button
        onClick={() => setIsEdit(true)}
        className="px-6 py-2 bg-primary text-white rounded-full shadow hover:bg-indigo-500 transition"
      >
        Edit
      </button>
    )}
  </div>
</div>
</div>
  )
}
export default MyProfile