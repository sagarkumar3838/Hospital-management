'use client';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const pathArr = [
    'M55.7447 0H15.3191L0 45.5836H18.2979L4.25532 81.7065H16.5957L5.95745 126L34.4681 82.9966L45.9574 126H120V0H104.681L104.255 110.519H58.2979L45.9574 64.5051H28.0851L42.9787 39.1331L61.7021 106.648H99.5745V0H80V94.6075H76.1702L55.7447 0Z',
    
    // ✅ Adding "MediCare" as a path
    'M 10 80 L 20 80 L 20 50 L 10 50 Z' // Example for "MediCare" path (replace with real path)
  ];
  

const Footer = () => {
  const container = useRef(null);
  const [openPopup, setOpenPopUp] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants = {
    visible: (i) => ({
      translateY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.03,
      },
    }),
    hidden: { translateY: 200 },
  };

  const handleNewsLetterData = (e) => {
    e.preventDefault();
    const target = e.target;
    const formData = new FormData(target);
    const clientEmail = formData.get('newsletter_email');
    setOpenPopUp(true);
    target.reset();
    setTimeout(() => {
      setOpenPopUp(false);
    }, 2000);
  };

  return (
    <div className="relative h-full sm:pt-14 pt-8 bg-[#f7f7f7] text-black" ref={container}>
      <div className="sm:container px-4 mx-auto">
        <div className="md:flex justify-between w-full">
          <div>
            <h1 className="md:text-4xl text-2xl font-semibold">Let&lsquo;s do great work together</h1>
            <div className="pt -2 pb-6 md:w-99">
              <p className="md:text-2xl text-xl py-4">Sign up for our newsletter*</p>
              <div className="hover-button relative bg-black flex justify-between items-center border-2 overflow-hidden border-black rounded-full text-white hover:text-black md:text-2xl">
                <form onSubmit={handleNewsLetterData} className="relative z-2 grid grid-cols-6 w-full h-full">
                  <input
                    type="email"
                    name="newsletter_email"
                    className="border-none bg-transparent py-3 px-6 col-span-5"
                    placeholder="Your Email * "
                  />
                  <button
                    type="submit"
                    className="cursor-pointer w-full hover:bg-primaryColor bg-white text-white h-full col-span-1">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      className="w-full h-[80%]"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="#000"
                        fillRule="evenodd"
                        clipRule="evenodd"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <ul>
              <li className="text-2xl pb-2 text-black font-semibold">SITEMAP</li>
              <li className="text-xl font-medium"><Link href="/">Home</Link></li>
              <li className="text-xl font-medium"><Link href="/about">About us</Link></li>
              <li className="text-xl font-medium"><Link href="/services">Our Services</Link></li>
              <li className="text-xl font-medium"><Link href="/projects">Projects</Link></li>
              <li className="text-xl font-medium"><Link href="/blogs">Blogs</Link></li>
              <li className="text-xl font-medium"><Link href="/contact-us">Contact</Link></li>
            </ul>
            <ul className='space-y-2'>
              <li className="text-2xl pb-2  text-black font-semibold">SOCIAL</li>
              <li className="text-xl font-medium"><a href="https://www.linkedin.com/company/next-codez/" target="_blank" className="underline">
              <FaLinkedin color="#0077B5" size={30} /></a></li>
              <li className="text-xl font-medium"><a href="https://twitter.com" target="_blank" className="underline"><FaTwitter color="#1DA1F2" size={30} /></a></li>
              <li className="text-xl font-medium"><a href="https://www.instagram.com" target="_blank" className="underline"><FaInstagram color="#E1306C" size={30} /></a></li>
              <li className="text-xl font-medium"><a href="https://www.facebook.com" target="_blank" className="underline"><FaFacebook color="#1877F2" size={30} /></a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex md:flex-row flex-col-reverse gap-3 justify-between py-2">
        <span className="font-medium">
  &copy; {new Date().getFullYear()} MediCare. All Rights Reserved.
</span>

          <a href="#" className="font-semibold">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;