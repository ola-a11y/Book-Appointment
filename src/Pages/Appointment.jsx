import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets_frontend/assets"
import RelatedDoctors from "../Components/RelatedDoctors";
const Appointments = () => {
  const navigate = useNavigate();
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [ docInfo, setDocInfo] = useState(null);
  //Booking slots
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  
  const fetchDocInfo =  async() => {
      const docInfo = doctors.find(doc => doc._id === docId)
      setDocInfo(docInfo)
      console.log(docInfo)
  }
  //Booking slots
  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

  
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i); 

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); 

      if (i === 0) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(
          currentDate.getMinutes() > 30 ? 30 : 0
        );
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);
  //Booking slots
useEffect(() => {
    getAvailableSlots();
  }, []);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return docInfo && (
    <div>
    <div className="flex flex-col md:flex-row gap-4">
      <div className="bg-primary w-full md:max-w-72 rounded-lg">
         <img src={docInfo.image} alt={docInfo.name} />
      </div>
    <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] md:mt-0">       
         <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
           {docInfo.name}
           <img src={assets.verified_icon} alt="Verified" className="w-5"/>
         </p>
      <div className="">
        <p className="flex items-center gap-2 text-sm mt-1 text-gray-600">
          {docInfo.degree} - {docInfo.speciality}
          <button className="py-0.5 px-2 border text-xs rounded-full ">{docInfo.experience}</button>
        </p>
      </div>
      <div className="gap-1 text-sm font-medium text-gray-900 mt-3">
          <p className="flex items-center gap-1">About <img src={assets.info_icon} alt="" className="w-3" /></p>
          <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
      </div>
          <p className="text-gray-500 font-medium mt-4">Appointment fee: <span className="text-gray-800">${docInfo.fees}</span> </p>
    </div> 
    </div>
    {/* Booking slots  */}
    <div className="md:ml-72 md:pl-4 mt-4 font-medium text-gray-700">
      <p>Booking Slots</p>
    <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
      {docSlots.length > 0 &&
        docSlots.map((daySlots, index) => (
          <div
            className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
              slotIndex === index
                ? "text-white bg-primary"
                : "border border-gray-200"
            }`}
            key={index}
            onClick={() => setSlotIndex(index)}
          >
            <p>{daysOfWeek[daySlots[0]?.datetime.getDay()]}</p>
            <p>{daySlots[0]?.datetime.getDate()}</p>
          </div>
        ))}
    </div>
     <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
       {docSlots.length > 0 && docSlots[slotIndex].map((item, index) => (
        <p 
          className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
          item.time === slotTime 
          ? 'text-white bg-primary'
          : 'border border-gray-200' 
        }`}
        key={index}
        onClick={() => setSlotTime(item.time)}>
        
           {item.time.toLowerCase()}
        </p>
       ))
        
       }
    </div>
       <button className="bg-primary text-white text-xs font-light px-14 py-3 rounded-full my-6"  onClick={()=>{navigate("/Login")}}>Book an appointment</button>
    </div>

    <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}
export default Appointments