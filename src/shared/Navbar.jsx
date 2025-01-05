import React, { useState } from "react";
import { Link } from "react-scroll"; // import react-scroll Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white fixed w-full z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center cursor-pointer"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="/logo.jpg"
                alt="Logo"
              />
              <span className="text-xl font-semibold ml-2">My Portfolio</span>
            </Link>
          </div>

          {/* Menu items */}
          <div className="hidden md:flex space-x-6">
            {["About", "Skills", "Projects", "Contact"].map((item, index) => (
              <Link
                key={index}
                to={item.toLowerCase() === "about" ? "about-me" : item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400 transition duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Download Resume Button */}
          <div className="hidden md:block">
            <a href="/portfolio.pdf" download="Jahid_Hasan_Rifat_Resume.pdf">
              <button className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 hover:text-white transition duration-300">
                Download Resume
              </button>
            </a>
          </div>

          {/* Hamburger menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 shadow-lg">
          {["About", "Skills", "Projects", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase() === "about" ? "about-me" : item.toLowerCase()}
              smooth={true}
              duration={500}
              className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-yellow-400 cursor-pointer transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="px-4 py-2">
            <a href="/portfolio.pdf" download="Jahid_Hasan_Rifat_Resume.pdf">
              <button className="w-[200px] bg-yellow-500 text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 hover:text-white transition duration-300">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
