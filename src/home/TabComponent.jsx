import { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('stats');

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      {/* Dropdown for small screens */}
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select tab
        </label>
        <select
          id="tabs"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="stats">Statistics</option>
          <option value="about">Services</option>
          <option value="faq">FAQ</option>
        </select>
      </div>

      {/* Tabs for larger screens */}
      <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse">
        <li className="w-full">
          <button
            onClick={() => setActiveTab('stats')}
            className={`inline-block w-full p-4 ${
              activeTab === 'stats' ? 'bg-gray-100 dark:bg-gray-600' : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
            } rounded-ss-lg focus:outline-none`}
          >
            Statistics
          </button>
        </li>
        <li className="w-full">
          <button
            onClick={() => setActiveTab('about')}
            className={`inline-block w-full p-4 ${
              activeTab === 'about' ? 'bg-gray-100 dark:bg-gray-600' : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
            } focus:outline-none`}
          >
            Services
          </button>
        </li>
        <li className="w-full">
          <button
            onClick={() => setActiveTab('faq')}
            className={`inline-block w-full p-4 ${
              activeTab === 'faq' ? 'bg-gray-100 dark:bg-gray-600' : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
            } rounded-se-lg focus:outline-none`}
          >
            FAQ
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="border-t border-gray-200 dark:border-gray-600">
        {activeTab === 'stats' && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
              {[
                { label: 'Doctors and growing', value: '3000+' },
                { label: 'Clients(India , Middle East, Africa)', value: '100M+' },
                { label: 'Appointments', value: '5M+' },
                { label: 'Contributors', value: '1B+' },
                { label: 'Top Forbes companies', value: '90+' },
                { label: 'Organizations', value: '4M+' }
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">{item.value}</dt>
                  <dd className="text-gray-500 dark:text-gray-400">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              We invest in the world’s potential
            </h2>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              {[
                'Dynamic reports and dashboards',
                'Templates for everyone',
                'Development workflow',
                'Limitless business automation'
              ].map((item) => (
                <li key={item} className="flex space-x-2 items-center">
                  <svg
                    className="shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="p-4 bg-white rounded-lg dark:bg-gray-800">
            {[
              {
                question: 'What is Flowbite?',
                answer:
                  'Flowbite is an open-source library of interactive components built on top of Tailwind CSS.'
              },
              {
                question: 'Is there a Figma file available?',
                answer:
                  'Yes, Flowbite is designed using Figma, and there is a design equivalent available in the Figma file.'
              },
              {
                question: 'What are the differences between Flowbite and Tailwind UI?',
                answer:
                  'Flowbite is open source under the MIT license, while Tailwind UI is a paid product.'
              }
            ].map((faq, index) => (
              <details key={index} className="border-b border-gray-200 dark:border-gray-700">
                <summary className="py-5 font-medium text-gray-500 dark:text-gray-400 cursor-pointer">
                  {faq.question}
                </summary>
                <div className="py-5 text-gray-500 dark:text-gray-400">{faq.answer}</div>
              </details>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
