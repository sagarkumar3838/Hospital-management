import React from 'react';
import { FaUserDoctor, FaFlask, FaAward } from 'react-icons/fa6';
import { FaHospital } from 'react-icons/fa';
import Card from '../components/About/Card';
import CardList from '../components/About/Card';
import { MarqueeDemo } from "../components/About/MarqueeDemo";
import { Marquee } from '../components/About/Marquee.jsx';



const About = () => {
  return (
    <>
      {/* Features Section */}
      <section className="features section py-16 bg-gray-50">
        <div className="container mx-auto mt-[5rem]">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              We Are Always Ready to Help You & Your Family
            </h2>
            <img
              src="/images/section-img.png"
              alt="Section"
              className="mx-auto mb-4"
            />
            <p className="text-gray-600">
              At <span className="font-semibold text-blue-500">MediCare</span>, we provide top-notch healthcare solutions to ensure your family receives the best care possible. Our advanced medical services are designed to cater to your every need.
            </p>
          </div>

          {/* Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="single-feature flex flex-col items-center text-center p-6 border rounded-lg shadow-md bg-white">
              <div className="single-icon text-4xl text-blue-500 mb-4">
                <i className="icofont-ambulance-cross"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Help</h3>
              <p className="text-gray-600">
                MediCare provides 24/7 emergency support with quick response teams and specialized care units to handle any critical situation.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="single-feature flex flex-col items-center text-center p-6 border rounded-lg shadow-md bg-white">
              <div className="single-icon text-4xl text-green-500 mb-4">
                <i className="icofont-medical-sign-alt"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enriched Pharmacy</h3>
              <p className="text-gray-600">
                Our pharmacy is stocked with a wide range of medications and medical supplies, ensuring timely availability of essential medicines.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="single-feature flex flex-col items-center text-center p-6 border rounded-lg shadow-md bg-white">
              <div className="single-icon text-4xl text-red-500 mb-4">
                <i className="icofont-stethoscope"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Medical Treatment</h3>
              <p className="text-gray-600">
                MediCare offers comprehensive treatment plans designed by top specialists to provide the best healthcare experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image and Video Link */}
            <div className="relative">
              <img
                src="/images/video-bg.jpg"
                alt="About"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-red-600 transition duration-300"
              >
                ▶
              </a>
            </div>

            {/* Right Side - Content */}
            <div className="content">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">About MediCare</h3>
              <p className="text-gray-600 mb-6">
                At <span className="font-semibold text-blue-500">MediCare</span>, we are committed to providing world-class healthcare solutions. Our advanced hospital management software streamlines operations, improves patient care, and enhances overall efficiency. We believe in delivering reliable and efficient medical services for every individual.
              </p>
              <ul className="space-y-6">
                {/* Item 1 */}
                <li className="flex items-start gap-4">
                  <i className="fa-solid fa-vial-circle-check text-blue-500 text-3xl"></i>
                  <div>
                    <h5 className="text-xl font-semibold text-gray-800">
                      Efficient Patient Management
                    </h5>
                    <p className="text-gray-600">
                      Our system ensures quick patient registration, real-time status updates, and smooth scheduling of medical services.
                    </p>
                  </div>
                </li>

                {/* Item 2 */}
                <li className="flex items-start gap-4">
                  <i className="fa-solid fa-pump-medical text-green-500 text-3xl"></i>
                  <div>
                    <h5 className="text-xl font-semibold text-gray-800">
                      Integrated Pharmacy & Lab
                    </h5>
                    <p className="text-gray-600">
                      MediCare offers a seamless connection between pharmacy and lab, enabling faster diagnosis and effective treatment plans.
                    </p>
                  </div>
                </li>

                {/* Item 3 */}
                <li className="flex items-start gap-4">
                  <i className="fa-solid fa-heart-circle-xmark text-red-500 text-3xl"></i>
                  <div>
                    <h5 className="text-xl font-semibold text-gray-800">
                      Advanced EMR (Electronic Medical Records)
                    </h5>
                    <p className="text-gray-600">
                      Our state-of-the-art EMR system stores and manages patient data securely, providing instant access to medical history for better clinical decisions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="stats section bg-gray-100 py-16 w-full mb-4">
      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Doctors */}
          <div className="flex flex-col items-center">
            <FaUserDoctor className="text-5xl text-blue-500 mb-4" />
            <div className="stats-item text-center">
              <span className="text-4xl font-bold text-gray-800">85</span>
              <p className="text-gray-600">Doctors</p>
            </div>
          </div>

          {/* Departments */}
          <div className="flex flex-col items-center">
            <FaHospital className="text-5xl text-green-500 mb-4" />
            <div className="stats-item text-center">
              <span className="text-4xl font-bold text-gray-800">18</span>
              <p className="text-gray-600">Departments</p>
            </div>
          </div>

          {/* Research Labs */}
          <div className="flex flex-col items-center">
            <FaFlask className="text-5xl text-purple-500 mb-4" />
            <div className="stats-item text-center">
              <span className="text-4xl font-bold text-gray-800">12</span>
              <p className="text-gray-600">Research Labs</p>
            </div>
          </div>

          {/* Awards */}
          <div className="flex flex-col items-center">
            <FaAward className="text-5xl text-yellow-500 mb-4" />
            <div className="stats-item text-center">
              <span className="text-4xl font-bold text-gray-800">150</span>
              <p className="text-gray-600">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h1 className='font-bold text-4xl text-center text-blue-500 mb-8'>Latest Blog</h1>
      <div>
        <div className='flex gap-12 justify-center mb-8'>
          <div><CardList/></div>
          
        </div>
        <div>
        <h1 className='font-bold text-4xl text-center text-blue-500 mb-8 capitalize'>read what our customers say</h1>
         <div><MarqueeDemo/></div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
