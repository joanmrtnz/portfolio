import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        
        <div className="flex space-x-6 mb-4">
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaTwitter className="text-2xl" />
          </a>
        </div>

        <p className="text-sm">&copy; {new Date().getFullYear()} Joan Martínez. All rights reserved.</p>
      </div>
    </footer>
  );
}
