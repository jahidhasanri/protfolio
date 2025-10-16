// src/components/Skills.jsx
import React from "react";
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFigma, SiGithub, SiBootstrap, SiTailwindcss, SiNextdotjs, SiFirebase } from "react-icons/si"; 
import { VscVscode } from "react-icons/vsc";
import { CgCPlusPlus } from "react-icons/cg";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-500" /> },
  { name: "React", level: 75, icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", level: 35, icon: <SiNextdotjs className="text-black" /> }, // Added Next.js
  { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", level: 65, icon: <SiExpress className="text-gray-600" /> },
  { name: "MongoDB", level: 60, icon: <SiMongodb className="text-green-700" /> },
  { name: "C", level: 80, icon: <CgCPlusPlus className="text-blue-600" /> },
  { name: "C++", level: 75, icon: <CgCPlusPlus className="text-blue-600" /> },
  { name: "VS Code", level: 90, icon: <VscVscode className="text-blue-500" /> },
  { name: "GitHub", level: 80, icon: <SiGithub className="text-black" /> },
  { name: "Figma", level: 70, icon: <SiFigma className="text-purple-500" /> },
  { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Bootstrap 5", level: 80, icon: <SiBootstrap className="text-purple-700" /> },
  { name: "Firebase", level: 70, icon: <SiFirebase className="text-yellow-500" /> },
];



const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-r from-purple-500 via-blue-200 to-indigo-300 py-20">
      <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
       <div className=" w-full h-[600px] mb-8  pb-16">
            <Spline scene="https://prod.spline.design/m1JvTU360BPbXdr2/scene.splinecode"  className="h-full md:w-20" />
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-6xl text-center mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-center text-gray-800">{skill.name}</h3>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-4">
                <div className="h-2 rounded-full bg-blue-500" style={{ width: `${skill.level}%` }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
