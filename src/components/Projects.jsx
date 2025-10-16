import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      id: 1,
      name: "Restaurant Management",
      image: "https://i.ibb.co/62Qbh1r/Screenshot-2025-02-07-193107.png",
      description: "This project is a full-stack Restaurant Management website aimed at enhancing the restaurant's online presence, improving customer interaction, and streamlining internal management processes. It is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to ensure a modern, robust, and user-friendly experience.",
      techStack: "React, Node.js, MongoDB, Firebase, Tailwind",
      liveLink: "https://assignment-11-soution.web.app/",
      clientGithubLink: "https://github.com/jahidhasanri/Resturent-Management",
      serverGithubLink: "https://github.com/jahidhasanri/resturent-menagement-server",
    },
    {
      id: 2,
      name: "EquiSports",
      image: "https://i.ibb.co/LzwNBYQq/Screenshot-2025-02-07-193154.png",
      description: "EquiSports is a modern, responsive e-commerce platform for purchasing and managing sports equipment. Designed with simplicity and user experience in mind, it caters to sports enthusiasts looking for a seamless online shopping experience.",
      techStack: "React, Node.js, MongoDB, Firebase, Tailwind",
      liveLink: "https://assignment-10-solution.web.app/",
      clientGithubLink: "https://github.com/jahidhasanri/assignment-10-solution-client",
      serverGithubLink: "https://github.com/jahidhasanri/assignment-10-server",
    },
    {
      id: 3,
      name: "Career Counseling",
      image: "https://i.ibb.co/W1WsW2q/Screenshot-2025-02-07-193223.png",
      description: "This project is a Career Counseling website designed to provide personalized career advice, guidance, and resources to users. It offers a user-friendly platform where individuals can access various counseling services to make informed decisions about their career paths.",
      techStack: "React, Firebase, Tailwind, CSS",
      liveLink: "https://fluffy-manatee-71fb16.netlify.app/",
      clientGithubLink: "https://github.com/programming-hero-web-course1/b10-a9-authentication-jahidhasanri",
      serverGithubLink: "",
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-semibold text-purple-300 text-center mb-8">
          Projects
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 border rounded-lg shadow-lg overflow-hidden bg-gray-800 lg:flex lg:items-start gap-8"
              data-aos="fade-up"
            >
              {/* Image Section */}
              <div className="w-full lg:w-[500px] h-auto flex items-center justify-center bg-gray-900 rounded-lg overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-auto object-cover" />
              </div>

              {/* Content Section */}
              <div className="w-full lg:flex-1 text-center lg:text-left">
                <h2 className="text-pink-500 text-2xl sm:text-3xl font-semibold">{project.name}</h2>
                <p className="text-gray-300 mt-3 text-lg">{project.description}</p>

                {/* Links */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
                  <Link to={project.clientGithubLink} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                    Client Code
                  </Link>
                  {project.serverGithubLink && (
                    <Link to={project.serverGithubLink} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                      Server Code
                    </Link>
                  )}
                  <Link to={project.liveLink} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                    Live Demo
                  </Link>
                </div>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2">
                  {project.techStack.split(", ").map((tec, index) => (
                    <motion.button
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-white rounded-md text-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {tec}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
