import React from 'react';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-transparent bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text font-semibold underline'
              : 'text-[#000000e6] font-medium hover:text-[#632EE3] transition'
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive
              ? 'text-transparent bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text font-semibold underline'
              : 'text-[#000000e6] font-medium hover:text-[#632EE3] transition'
          }
        >
          Apps
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            isActive
              ? 'text-transparent bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text font-semibold underline'
              : 'text-[#000000e6] font-medium hover:text-[#632EE3] transition'
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 flex items-center justify-between h-[78px] px-4 md:px-20 ">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-1">
        <img src={logo} alt="Hero.io logo" className="w-10 h-10 object-cover" />
        <span className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold text-base">
          Hero.io
        </span>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 items-center">{navLinks}</ul>

      {/* Desktop Contribute Button */}
      <Link
        to="https://github.com/mdsharifkhandakar"
        className="hidden md:flex items-center justify-center gap-2.5 px-4 py-3 rounded bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] w-[145px] h-[43px]"
      >
        <FaGithub className="text-white w-5 h-5" />
        <span className="text-white font-semibold text-base">Contribute</span>
      </Link>

      {/* Mobile Menu */}
      <div className="md:hidden dropdown dropdown-end">
        <button
          tabIndex={0}
          className="btn btn-ghost p-2 text-[#632EE3]"
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow font-semibold"
        >
          {navLinks}
          <li>
            <Link
              to="https://github.com/ProgrammingHero1"
              className="flex items-center gap-2 mt-2 text-[#632EE3] font-semibold"
            >
              <FaGithub /> Contribute
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
