import React, { useState, useEffect } from 'react';
import Loader from './Loader'; // Adjust the import path as necessary
import styled from 'styled-components';

const DiamondBox = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="elementor-widget-wrap elementor-element-populated">
      <div className="elementor-element elementor-element-08b9349 elementor-widget elementor-widget-html" data-id="08b9349" data-element_type="widget" data-widget_type="html.default">
        <div className="elementor-widget-container">
          <div className="diamond-box-container mt-[3rem]">
            <CardContainer className='mb-[4rem]'>
              <Card>
                <div className="diamond">
                  {loading ? (
                    <Loader /> // Show loader while loading
                  ) : (
                    <>
                      <img loading="lazy" decoding="async" src="https://docpulse.com/wp-content/uploads/2024/02/7.png" width={60} height={60} alt="Complete Healthcare Solution" />
                      <strong>Complete Healthcare Solution</strong>
                      <p>Fully integrated modular software architecture with seamless data flow between departments for effortless patient data management.</p>
                    </>
                  )}
                </div>
              </Card>
              <Card>
                <div className="diamond">
                  {loading ? (
                    <Loader /> // Show loader while loading
                  ) : (
                    <>
                      <img loading="lazy" decoding="async" src="https://docpulse.com/wp-content/uploads/2024/02/security.png" width={60} height={60} alt="Secure & Reliable" />
                      <strong>Secure & Reliable</strong>
                      <p>Robust security protocols and data privacy policy safeguards customer data, ensuring confidentiality without any data commercialization.</p>
                    </>
                  )}
                </div>
              </Card>
              <Card>
                <div className="diamond">
                  {loading ? (
                    <Loader /> // Show loader while loading
                  ) : (
                    <>
                      <img loading="lazy" decoding="async" src="https://docpulse.com/wp-content/uploads/2024/02/3.png" width={60} height={60} alt="Stable cloud solution" />
                      <strong>Stable cloud solution</strong>
                      <p>Proven &gt;99.99% uptime for more than a decade in service. Mobile apps for doctors and patients.</p>
                    </>
                  )}
                </div>
              </Card>
            </CardContainer>

            <CardContainer>
              <Card>
                <div className="diamond">
                  {loading ? (
                    <Loader /> // Show loader while loading
                  ) : (
                    <>
                      <img loading="lazy" decoding="async" src="https://docpulse.com/wp-content/uploads/2024/02/10.png" width={60} height={60} alt="Patient-Centric Design" />
                      <strong>Patient-Centric Design</strong>
                      <p>24/7 appointment booking, instant notifications, feedback tools, and telemedicine platforms for higher patient engagement.</p>
                    </>
                  )}
                </div>
              </Card>
              <Card>
                <div className="diamond">
                  {loading ? (
                    <Loader /> // Show loader while loading
                  ) : (
                    <>
                      <img loading="lazy" decoding="async" src="https://docpulse.com/wp-content/uploads/2024/02/4.png" width={60} height={60} alt="Affordable" />
                      <strong>Affordable</strong>
                      <p>Transparent, and modular pricing for scalability with a low upfront investment.</p>
                    </>
                  )}
                </div>
              </Card>
              <Card>
                <div className="diamond">
                  {loading ? (
                    <Loader /> // Show loader while loading
                  ) : (
                    <>
                      <img loading="lazy" decoding="async" src="https://docpulse.com/wp-content/uploads/2024/02/8.png" width={60} height={60} alt="Established Trust" />
                      <strong>Established Trust</strong>
                      <p>Established Healthcare solutions provider, trusted by renowned clinics, hospitals, and multi-chain facilities, with a broad customer base spanning India and overseas.</p>
                    </>
                  )}
                </div>
              </Card>
            </CardContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6rem; /* Space between cards */
  justify-content: center; /* Center the cards */
`;

const Card = styled.div`
  background: #fff; /* Card background color */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
  padding: 20px; /* Inner padding */
  text-align: center; /* Center text */
  width: 24rem; /* Fixed width for cards */
  transition: transform 0.2s; /* Smooth hover effect */

  &:hover {
    transform: translateY(-5px); /* Lift effect on hover */
  }

  .diamond {
    margin-bottom: 10px; /* Space below the diamond content */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default DiamondBox;