// src/components/AboutMe.jsx

import React, { useRef } from "react";
import { fadeIn } from "../../variants";
import { motion, useInView } from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers once when in view

  return (
    <section id="about-me" className=" py-16 bg-[#432a5117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        
        {/* Animated Heading */}
        <motion.h2
          id="about-me-heading"
          className="text-4xl font-semibold text-blue-200 text-center mb-8"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          About Me
        </motion.h2>

        <div id="about-me-text" className="grid grid-cols-1 gap-6">
          {/* Introduction */}
          <motion.p
            id="about-me-introduction"
            className="text-lg text-gray-300"
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            Hello! I'm Jahid Hasan Rifat, a passionate and dedicated MERN Stack Developer . My journey with programming started in my college days when I first got introduced to HTML and CSS. From then, I became fascinated by the idea of creating beautiful, user-friendly websites and web applications. Over time, my passion grew, and I started diving into JavaScript and React.js to build dynamic and interactive web experiences.
          </motion.p>

          {/* Developer Section */}
          <motion.p
            id="about-me-developer"
            className="text-lg text-gray-300"
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            As a developer, I enjoy the process of solving problems and continuously learning new skills. I love working on projects that challenge me and help me grow. When I’m not coding, I enjoy collaborating with other developers and sharing knowledge through blogs and community discussions.
          </motion.p>

          {/* Hobbies Section */}
          <motion.p
            id="about-me-hobbies"
            className="text-lg text-gray-300"
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            Outside of programming, I have a variety of interests that keep me balanced. I enjoy playing sports, particularly football and cricket. It's a great way for me to relax and stay active. I also have a creative side, and I enjoy cooking and gardening whenever I get the chance. Whether it's a quick doodle or a more detailed piece, it helps me express my thoughts and unwind.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
