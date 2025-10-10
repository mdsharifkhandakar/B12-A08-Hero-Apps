import React from 'react';
import logo from '/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#000] text-[#ccc] px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left: Brand Section */}
        <div className="md:flex-1 flex md:justify-start justify-center">
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 mb-4 justify-center md:justify-start"
            >
              <img src={logo} alt="Logo" className="w-12 h-12" />
              <h2 className="text-2xl font-semibold text-white">
                Sharif<span className="text-[#713fe7]">Dev</span>
              </h2>
            </Link>
            <p className="text-sm leading-relaxed text-center md:text-left">
              Building modern web applications with passion & precision.
            </p>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="md:flex-1 flex justify-center">
          <div className="text-center">
            <h3 className="text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-[#713fe7]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#713fe7]">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#713fe7]">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#713fe7]">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#713fe7]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Social Links */}
        <div className="md:flex-1 flex justify-center md:justify-end">
          <div className="text-center md:text-right">
            <h3 className="text-white text-lg mb-4 text-center">Follow Me</h3>
            <div className="flex justify-center md:justify-end gap-5">
              <a
                href="https://www.facebook.com/share/1CDdKY3VoC/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f5f5f5] text-3xl hover:scale-125 transition-transform duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/mdsharifkhandakar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f5f5f5] text-3xl hover:scale-125 transition-transform duration-200"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mdsharifkhandakar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f5f5f5] text-3xl hover:scale-125 transition-transform duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/MdSharifkhanda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f5f5f5] text-3xl hover:scale-125 transition-transform duration-200"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-[#333] text-center text-sm text-[#777]">
        © 2025 SharifDev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
