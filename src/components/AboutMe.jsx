import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-gray-100 py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
          About Me
        </h2>
        <div className="grid grid-cols-1">
          {/* About Me Text */}
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Hello! I'm Jahid Hasan Rifat, a passionate and dedicated Frontend Developer. My journey with programming started in my collage days when I first got introduced to HTML and CSS. From then, I became fascinated by the idea of creating beautiful, user-friendly websites and web applications. Over time, my passion grew, and I started diving into JavaScript and React.js to build dynamic and interactive web experiences.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              As a developer, I enjoy the process of solving problems and continuously learning new skills. I love working on projects that challenge me and help me grow. When I’m not coding, I enjoy collaborating with other developers and sharing knowledge through blogs and community discussions.
            </p>

            <p className="text-lg text-gray-600">
              Outside of programming, I have a variety of interests that keep me balanced. I enjoy playing sports, particularly football and cricket. It's a great way for me to relax and stay active. I also have a creative side, and I enjoy cooking and gardening whenever I get the chance. Whether it's a quick doodle or a more detailed piece, it helps me express my thoughts and unwind.
            </p>
          </div>

      
       
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
