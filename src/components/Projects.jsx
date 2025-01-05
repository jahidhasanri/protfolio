import React, { useState } from 'react';

// Sample data for projects
const projects = [
  {
    id: 1,
    name: "Career Counseling",
    image: "https://i.ibb.co/zhQ7zrp/Screenshot-2025-01-05-142847.png",
    description: "This project is a Career Counseling website designed to provide personalized career advice, guidance, and resources to users. It offers a user-friendly platform where individuals can access various counseling services to make informed decisions about their career paths.",
    techStack: "React, Node.js, MongoDB",
    liveLink: "https://fluffy-manatee-71fb16.netlify.app/",
    clientGithubLink: "https://github.com/programming-hero-web-course1/b10-a9-authentication-jahidhasanri",
    serverGithubLink: '',
    challenges: "Some of the challenges faced in this project include...",
    improvements: "Future improvements I plan to make in this project are..."
  },
  {
    id: 2,
    name: "A Sports Equipment Store",
    image: "https://i.ibb.co/Ns5mnvn/Screenshot-2025-01-05-143619.png",
    description: "EquiSports is a modern, responsive e-commerce platform for purchasing and managing sports equipment. Designed with simplicity and user experience in mind, it caters to sports enthusiasts looking for a seamless online shopping experience.",
    techStack: "HTML, CSS, JavaScript",
    liveLink: "https://assignment-10-solution.web.app/",
    clientGithubLink: "https://github.com/programming-hero-web-course2/b10-a10-client-side-jahidhasanri",
    serverGithubLink: "https://github.com/programming-hero-web-course2/b10-a10-server-side-jahidhasanri",
    challenges: "Challenges faced in project 2...",
    improvements: "Improvement plans for this project..."
  },
  {
    id: 3,
    name: "Restaurant Management",
    image: "https://i.ibb.co/fxCKtNC/Screenshot-2025-01-05-144022.png",
    description: "This project is a full-stack Restaurant Management website aimed at enhancing the restaurant's online presence, improving customer interaction, and streamlining internal management processes. It is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to ensure a modern, robust, and user-friendly experience.",
    techStack: "Vue.js, Firebase",
    liveLink: "https://assignment-11-soution.web.app/",
    clientGithubLink: "https://github.com/programming-hero-web-course2/b10a11-client-side-jahidhasanri?tab=readme-ov-file",
    serverGithubLink: "https://github.com/programming-hero-web-course2/b10a11-server-side-jahidhasanri",
    challenges: "Challenges encountered during development...",
    improvements: "Planned future enhancements for the project..."
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewMore = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="bg-gray-100 py-12" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8" id="projects-heading">Projects</h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} id={`project-${project.id}`} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800" id={`project-title-${project.id}`}>{project.name}</h3>
                <p className="text-gray-600 mt-2 flex-grow" id={`project-description-${project.id}`}>{project.description}</p>
                <button
                  onClick={() => handleViewMore(project)}
                  className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
                  id={`view-more-button-${project.id}`}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Details */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" id="project-modal">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4" id="modal-title">{selectedProject.name}</h3>
              <p className="text-gray-600 mb-4" id="modal-description">{selectedProject.description}</p>
              <p className="font-semibold text-gray-800">Tech Stack: {selectedProject.techStack}</p>
              <div className="mt-4">
                <p><strong>Challenges Faced:</strong> {selectedProject.challenges}</p>
                <p><strong>Future Improvements:</strong> {selectedProject.improvements}</p>
              </div>
              <div className="mt-4">
                <p><strong>Live Link:</strong> <a href={selectedProject.liveLink} target="_blank" className="text-blue-500 hover:underline" id="modal-live-link">{selectedProject.liveLink}</a></p>
                <p><strong>GitHub Link (client):</strong> <a href={selectedProject.clientGithubLink} target="_blank" className="text-blue-500 hover:underline" id="modal-client-github-link">{selectedProject.clientGithubLink}</a></p>
                {selectedProject.serverGithubLink && (
                  <p><strong>GitHub Link (server):</strong> <a href={selectedProject.serverGithubLink} target="_blank" className="text-blue-500 hover:underline" id="modal-server-github-link">{selectedProject.serverGithubLink}</a></p>
                )}
              </div>
              <button
                onClick={handleCloseModal}
                className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                id="close-modal-button"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
