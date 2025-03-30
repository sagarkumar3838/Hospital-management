import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "/images/slider.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
];

const texts = [
  {
    title: "We Provide Medical Services That You Can Trust!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.",
    button1: "Get Appointment",
    button2: "Contact Now",
  },
  {
    title: "Expert Doctors at Your Service!",
    description:
      "Our team of experienced professionals is here to provide you with the best healthcare solutions.",
    button1: "Meet Our Team",
    button2: "Book Consultation",
  },
  {
    title: "Your Health, Our Priority!",
    description:
      "We are committed to providing quality care and improving patient outcomes through modern technology.",
    button1: "Explore Services",
    button2: "Get Started",
  },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-neutral-950 h-[42rem]">
      {/* ✅ Carousel */}
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing z-0"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      {/* ✅ Dynamic Text Overlay */}
      <motion.div
        key={imgIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center z-10 px-6"
      >
        <div className="text-center text-gray-600 max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight">
            {texts[imgIndex].title.split(" ").map((word, i) =>
              i % 2 === 1 ? (
                <span key={i} className="text-blue-500">
                  {word}{" "}
                </span>
              ) : (
                `${word} `
              )
            )}
          </h1>
          <p className="mt-4 text-lg text-gray-700">{texts[imgIndex].description}</p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              {texts[imgIndex].button1}
            </a>
            <a
              href="#"
              className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg"
            >
              {texts[imgIndex].button2}
            </a>
          </div>
        </div>
      </motion.div>

      {/* ✅ Dots */}
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />

      {/* ✅ Gradient Edges */}
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            scale: imgIndex === idx ? 0.75 : 0.65,
          }}
          transition={SPRING_OPTIONS}
          className="aspect-[3/2] w-full overflow-hidden shrink-0 rounded-xl bg-neutral-800 object-cover h-[42rem]"
        />
      ))}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
          }`}
        />
      ))}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[5vw] max-w-[50px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[5vw] max-w-[50px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
