import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mt-6">
      {/* GitHub Link */}
      <a
        href="https://github.com/jahidhasanri?tab=overview&from=2024-12-01&to=2024-12-31"  // Replace with your GitHub link
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-900 transition duration-300"
        aria-label="GitHub"
      >
        <FaGithub  />
      </a>

      {/* LinkedIn Link */}
      <a
        href="https://www.linkedin.com/in/jahad-hasan-rifat-01447a289/"  
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-700 transition duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-blue-600 hover:text-blue-700" />
      </a>

      {/* Twitter Link */}
      <a
        href="https://x.com/Rifat47198"  // Replace with your Twitter link
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition duration-300"
        aria-label="Twitter"
      >
        <FaTwitter className="text-blue-500 hover:text-blue-400" />
      </a>

      {/* Facebook Link */}
      <a
        href="https://www.facebook.com/jahadhasan.rifat.7"  // Replace with your Facebook link
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-600 transition duration-300"
        aria-label="Facebook"
      >
        <FaFacebook className="text-blue-600 hover:text-blue-500" />
      </a>
    </div>
  );
};

export default SocialLinks;
