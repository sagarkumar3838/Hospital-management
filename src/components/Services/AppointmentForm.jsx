

import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    doctor: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus({ loading: false, success: true, error: false });
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        department: '',
        doctor: '',
        message: '',
      });
    } catch (error) {
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <section id="appointment" className="appointment section py-16 bg-gray-100">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Book an Appointment</h2>
        <p className="text-gray-600">
          Schedule an appointment with our expert doctors — now accepting Medicare patients!
        </p>
      </div>

      {/* Appointment Form */}
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Medicare Support">Medicare Support</option>
            </select>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Doctor</option>
              <option value="Dr. John Smith">Dr. John Smith</option>
              <option value="Dr. Emma Watson">Dr. Emma Watson</option>
              <option value="Dr. David Lee">Dr. David Lee</option>
              <option value="Dr. Sarah Connor (Medicare Specialist)">
                Dr. Sarah Connor (Medicare Specialist)
              </option>
            </select>
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Additional Message (Optional)"
            className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Submission Status */}
          <div className="mt-3">
            {status.loading && <div className="text-blue-500">Loading...</div>}
            {status.success && (
              <div className="text-green-500">
                Your appointment request has been sent successfully. Thank you!
              </div>
            )}
            {status.error && (
              <div className="text-red-500">Failed to send the request. Please try again.</div>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              {status.loading ? 'Submitting...' : 'Make an Appointment'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
