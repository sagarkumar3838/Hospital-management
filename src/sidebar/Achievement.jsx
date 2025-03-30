import Achievements from "../components/Achivement/Achievements.jsx";
import { FaUserMd, FaHeartbeat, FaProcedures, FaCalendarCheck } from "react-icons/fa";

const achievements = [
  { icon: <FaUserMd className="text-blue-500 text-4xl" />, label: "Experienced Doctors", value: "150+" },
  { icon: <FaHeartbeat className="text-red-500 text-4xl" />, label: "Patients Treated", value: "50,000+" },
  { icon: <FaProcedures className="text-green-500 text-4xl" />, label: "Successful Surgeries", value: "10,000+" },
  { icon: <FaCalendarCheck className="text-yellow-500 text-4xl" />, label: "Years of Service", value: "25+" }
];

const AchievementCard = ({ icon, label, value }) => (
  <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 w-64 text-center mt-8">
    {icon}
    <h3 className="text-xl font-semibold mt-4">{value}</h3>
    <p className="text-gray-600 text-sm">{label}</p>
  </div>
);

const Achievement = () => {
  return (
    <>
    <div className="py-16 bg-gray-100 flex flex-col items-center mt-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {achievements.map((item, index) => (
          <AchievementCard key={index} {...item} />
        ))}
      </div>
    </div>
    <div>
      <Achievements/>
    </div>
    </>
  );
};

export default Achievement;
