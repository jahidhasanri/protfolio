import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
          About Me
        </h2>
        <div className="grid grid-cols-1">
          {/* About Me Text */}
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Hello! I'm Jahid Hasan Rifat, a passionate and dedicated Frontend Developer...
            </p>
            <p className="text-lg text-gray-600 mb-6">
              As a developer, I enjoy the process of solving problems and continuously learning new skills...
            </p>
            <p className="text-lg text-gray-600">
              Outside of programming, I have a variety of interests that keep me balanced...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
