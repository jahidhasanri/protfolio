import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-sm text-gray-400">
              I’m a passionate developer committed to creating user-friendly and
              responsive web applications. Let's build something amazing
              together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-yellow-400 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-yellow-400 transition duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-yellow-400 transition duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-yellow-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="mailto:your-email@example.com"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
                aria-label="Email"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Your Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
