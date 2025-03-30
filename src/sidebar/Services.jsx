import React from 'react';
import {
  FaHeartbeat,
  FaPills,
  FaHospitalUser,
  FaDna,
  FaWheelchair,
  FaNotesMedical,
  FaUserMd,
} from 'react-icons/fa';
import AppointmentForm from '../components/Services/AppointmentForm';
import Departments from '../components/Services/Departments';

const servicesData = [
  {
    id: 1,
    icon: <FaHeartbeat className="text-5xl text-red-500 mb-4" />,
    title: 'Cardiology',
    description:
      'Advanced heart care with experienced cardiologists ensuring your heart health is in safe hands.',
  },
  {
    id: 2,
    icon: <FaPills className="text-5xl text-blue-500 mb-4" />,
    title: 'Pharmacy',
    description:
      '24/7 pharmacy services providing quality medicines and expert advice to meet your healthcare needs.',
  },
  {
    id: 3,
    icon: <FaHospitalUser className="text-5xl text-green-500 mb-4" />,
    title: 'Emergency Care',
    description:
      'Immediate response and expert care for medical emergencies, available round the clock.',
  },
  {
    id: 4,
    icon: <FaDna className="text-5xl text-purple-500 mb-4" />,
    title: 'Genetic Testing',
    description:
      'Cutting-edge genetic analysis to detect hereditary conditions and provide personalized treatment.',
  },
  {
    id: 5,
    icon: <FaWheelchair className="text-5xl text-yellow-500 mb-4" />,
    title: 'Rehabilitation',
    description:
      'Comprehensive rehab programs helping patients regain strength and independence.',
  },
  {
    id: 6,
    icon: <FaNotesMedical className="text-5xl text-teal-500 mb-4" />,
    title: 'Medical Records',
    description:
      'Secure digital records ensuring quick access and better coordination of care.',
  },
  {
    id: 7,
    icon: <FaUserMd className="text-5xl text-indigo-500 mb-4" />,
    title: 'Medicare Services',
    description:
      'Expert guidance and support with Medicare enrollment, benefits, and coverage options.',
  },
];

const Services = () => {
  return (
    <>
    <section id="services" className="services section bg-gray-50 py-16 mt-[4rem]">
      {/* Section Title */}
      <div
        className="container mx-auto text-center mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Healthcare Services</h2>
        <p className="text-gray-600">
          Providing top-notch medical care and expert guidance to ensure your well-being.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="service-item bg-white rounded-lg shadow-md p-6 text-center transition transform hover:-translate-y-2 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={100 * service.id}
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className=''>
      <AppointmentForm/>
    </div>
    <div>
      <Departments/>
    </div>
    </>
  );
};

export default Services;

