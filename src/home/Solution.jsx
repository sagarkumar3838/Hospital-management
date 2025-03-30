import React from 'react';
import Button from './Button';

const Solution = () => {
  return (
    <>
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row gap-4 h-full overflow-hidden w-full justify-center items-center mb-[2rem]">
        {/* Left Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/hospital-software0001.jpg"
            alt="Hospital Software"
            className="w-full max-w-[400px] h-[300px] object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 flex flex-col justify-center items-start h-[300px] w-full max-w-[400px] p-4 border border-gray-200 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Hospital Software</h1>
          <p className="text-gray-700 mb-6">
            MediCare is one of the best digital healthcare solutions for hospitals. Manage appointments, billing, lab, stock and inventory, pharmacy, In-patient department and more. Advanced EMR to manage patient health records and deliver improved patient care.
          </p>
          <Button />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse gap-4 h-full w-full justify-center items-center mt-8">
        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/hospital-software0001.jpg"
            alt="Medical Practice Management Software"
            className="w-full max-w-[400px] h-[300px] object-cover"
          />
        </div>

        {/* Left Side - Content */}
        <div className="flex-1 flex flex-col justify-center items-start h-[350px] w-full max-w-[5 00px] p-4 border border-gray-200 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Medical Practice Management Software</h1>
          <p className="text-gray-700 mb-6">
            One-stop solution to manage all the aspects of OPD starting from patient registration to generating digital prescriptions, bills and revenue analysis. Pharmacy and Lab management is also simplified, enabling doctors to view lab reports in the software. Customisable medical case sheets to create electronic medical records (EMR).
          </p>
          <Button />
        </div>
      </div>
    </>
  );
};

export default Solution;
