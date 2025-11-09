import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {

  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsDate = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
      setRelDoc(doctorsDate);
    }
  }, [doctors, speciality, docId]);

  
  if (relDoc.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      
      <h2 className="text-3xl font-medium">Related Doctors</h2>
      <p className="sm:w-1/3 text-center text-sm">
        You may also be interested in these specialists.
      </p>

      <div className="w-full grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
          
          <Link
            to={`/Appointment/${item._id}`}
            onClick={() => { scrollTo(0, 0) }} 
            className="border border-blue-200 rounded-xl overflow-hidden 
                       hover:translate-y-[-10px] transition-all duration-500
                       focus:outline-none focus:ring-2 focus:ring-blue-500" 
            key={index}
          >
      
            <div className="bg-blue-50">
              
              <img src={item.image} alt={item.name} />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </Link>
        ))}
      </div>

      <Link 
        to="/doctors"
        onClick={() => { scrollTo(0, 0) }}
        className="bg-blue-100 text-gray-600 px-12 py-3 rounded-full mt-10
                   focus:outline-none focus:ring-2 focus:ring-blue-500" 
      >
        More
      </Link>
    </div>
  );
};

export default RelatedDoctors;
