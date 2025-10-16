import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import SocialLinks from "../components/Sociallinks";
import { fadeIn } from "../../variants";

const Introduction = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ["MERN Stack Developer "],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="mt-20 lg:mt-[210px] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-80">
          
          {/* Designation and Introduction Text */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            className="justify-start"
          >
            <motion.h2
              className="text-3xl font-semibold text-gray-800 mb-4 lg:mt-12"
              variants={fadeIn("left", 0.4)}
            >
            </motion.h2>

            <motion.p
              className="font-bold text-gray-200 text-4xl mb-4 lg:mt-6"
              variants={fadeIn("up", 0.6)}
            >
              <span className=" text-xl">Hello!</span>
              <br />
               I'm Jahid Hasan Rifat <br />
              <span className="text-blue-600 text-2xl font-bold">
                <span ref={typedTextRef}></span>
              </span>
            </motion.p>

            <motion.a
              href="/resume_of_rifat.pdf"
              download="Jahid_Hasan_Rifat_Resume.pdf"
              variants={fadeIn("up", 0.8)}
            >
              <button className="w-[200px] bg-yellow-500 text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 hover:text-white transition duration-300">
                Download Resume
              </button>
            </motion.a>

            <motion.div variants={fadeIn("up", 1)}>
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            className="flex justify-center md:justify-end "
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
          >
            <motion.img
              className="w-[300px] h-[300px] mt-14  rounded-full shadow-lg mb-[110px]"
              src="/1000129958.jpg"
              alt="Jahid Hasan Rifat"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
