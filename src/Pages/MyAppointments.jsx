import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="">
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My appointments
      </p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="py-2 border-b
                       grid grid-cols-[1fr_2fr] gap-4
                       lg:flex lg:gap-6"
          >
            <div>
              <img
                src={item.image}
                alt={item.name}
                className="w-32 bg-indigo-50"
              />
            </div>

            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="text-xs mt-1">
                <span className="text-neutral-800 text-sm font-medium">
                  Date & Time:
                </span>{" "}
                23, July, 2025 || 8:30 PM
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2 justify-end">
              <button className="text-sm text-stone-500 text-center min-w-24 sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">
                Pay Online
              </button>
              <button className="text-sm text-stone-500 text-center min-w-40 sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
