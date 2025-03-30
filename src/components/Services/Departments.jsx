'use client';

import { useState } from 'react';

const departments = [
  {
    id: 'departments-tab-1',
    name: 'Cardiology',
    title: 'Expert Cardiology Care',
    description:
      'We provide expert care for heart-related conditions with state-of-the-art technology and experienced specialists.',
    img: '/images/departments-1.jpg',
  },
  {
    id: 'departments-tab-2',
    name: 'Neurology',
    title: 'Advanced Neurology Treatments',
    description:
      'Our neurology department offers specialized treatments for neurological disorders and brain health.',
    img: '/images/departments-2.jpg',
  },
  {
    id: 'departments-tab-3',
    name: 'Hepatology',
    title: 'Liver Health and Care',
    description:
      'Our hepatology department focuses on diagnosing and treating liver diseases using the latest medical advancements.',
    img: '/images/pf1.jpg',
  },
  {
    id: 'departments-tab-4',
    name: 'Pediatrics',
    title: 'Comprehensive Child Care',
    description:
      'We provide compassionate care for children, ensuring their health and well-being at every stage of growth.',
    img: '/images/departments-4.jpg',
  },
  {
    id: 'departments-tab-5',
    name: 'Eye Care',
    title: 'Vision Care and Surgery',
    description:
      'Our eye care department offers vision correction, treatment for eye diseases, and advanced eye surgery options.',
    img: '/images/departments-5.jpg',
  },
  {
    id: 'departments-tab-6',
    name: 'Medicare',
    title: 'Medicare Support and Assistance',
    description:
      'Our Medicare department helps patients navigate insurance coverage, claim support, and access to affordable treatments.',
    img: '/images/pf2.jpg',
  },
];

const Departments = () => {
  const [activeTab, setActiveTab] = useState(departments[0].id);

  return (
    <section id="departments" className="departments section py-20 bg-gray-50">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Our Departments</h2>
        <p className="text-lg text-gray-600">
          Explore our specialized medical departments and find the care you need.
        </p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-8 pl-8">
        {/* Department Tabs */}
        <div className="w-full md:w-1/6">
          <ul className="space-y-2">
            {departments.map((dept) => (
              <li key={dept.id}>
                <button
                  onClick={() => setActiveTab(dept.id)}
                  className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === dept.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {dept.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Department Content */}
        <div className="w-full md:w-3/4">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className={`p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-500 ${
                activeTab === dept.id ? 'opacity-100 scale-100 block' : 'opacity-0 scale-95 hidden'
              }`}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Text Section */}
                <div className="w-full md:w-2/3">
                  <h3 className="text-3xl font-semibold text-gray-800 mb-3">
                    {dept.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {dept.description}
                  </p>
                </div>
                {/* Image Section */}
                <div className="w-full md:w-1/3">
                  <img
                    src={dept.img}
                    alt={dept.name}
                    className="w-full h-48 object-cover rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
