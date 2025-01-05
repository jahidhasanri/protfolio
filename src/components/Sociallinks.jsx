import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mt-6">
      <a
        href="https://github.com/jahidhasanri?tab=overview&from=2024-12-01&to=2024-12-31"  // Replace with your GitHub link
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-yellow-500 transition duration-300"
        aria-label="GitHub"
      >
       <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/jahad-hasan-rifat-01447a289/"  // Replace with your LinkedIn link
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-yellow-500 transition duration-300"
        aria-label="LinkedIn"
      >
       <FaLinkedin />

      </a>

      <a
        href="https://x.com/Rifat47198"  // Replace with your Twitter link
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-yellow-500 transition duration-300"
        aria-label="Twitter"
      >
       <FaTwitter />
      </a>

      <a
        href="https://www.facebook.com/jahadhasan.rifat.7"  // Replace with your Facebook link
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-yellow-500 transition duration-300"
        aria-label="Facebook"
      >
      <FaFacebook />
      </a>
    </div>
  );
};

export default SocialLinks;
