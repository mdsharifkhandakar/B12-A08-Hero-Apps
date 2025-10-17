import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#000] text-[#ccc] px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left: Brand Section */}
        <div className="md:flex-1 flex justify-start">
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 mb-4 justify-start"
            >
              <img src={logo} alt="Logo" className="w-12 h-12" />
              <h2 className="text-2xl font-semibold text-white">
                Sharif<span className="text-[#713fe7]">Dev</span>
              </h2>
            </Link>
            <p className="text-sm leading-relaxed text-left">
              Building modern web applications with passion & precision.
            </p>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="md:flex-1 flex justify-start">
          <div className="text-left">
            <h3 className="text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#713fe7]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/apps" className="hover:text-[#713fe7]">
                  Apps
                </Link>
              </li>
              <li>
                <Link to="/installation" className="hover:text-[#713fe7]">
                  Installation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Social Links */}
        <div className="md:flex-1 flex justify-start md:justify-end">
          <div className="text-left md:text-right">
            <h3 className="text-white text-lg mb-4">Follow Me</h3>
            <div className="flex justify-start md:justify-end gap-5">
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
