import React from "react";
import SocialLinks from '../components/Sociallinks';

const Introduction = () => {
  return (
    <section className="bg-gray-100 mt-12 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Designation and Introduction Text */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 lg:mt-12">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-600 mb-4 lg:mt-6">
              Hello! I'm Jahid Hasan Rifat, a passionate and dedicated frontend
              developer who loves building beautiful and responsive web
              applications. I specialize in HTML, CSS, JavaScript, and React.js.
              Let's create something amazing together!
            </p>
            <a
              href="/portfolio.pdf"
              download="Jahid_Hasan_Rifat_Resume.pdf"
            >
              <button className="w-[200px] bg-yellow-500 text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 hover:text-white transition duration-300">
                Download Resume
              </button>
            </a>

            <SocialLinks></SocialLinks>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center md:justify-start 2xl:ml-[100px]">
            <img
              className="w-[250px] h-[350px] rounded-lg shadow-lg"
              src="/1000129958.jpg" 
              alt="Jahid Hasan Rifat"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
