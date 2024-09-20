import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for open/close
import Logo from "../assets/quickHire.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-400 to-purple-900 text-white p-4">
      <nav className="flex justify-evenly items-center">
        {/* Logo and Title */}
        <div className="flex flex-row gap-5 items-center">
          <img
            src={Logo}
            alt="Quickhire Logo"
            className="h-12 w-20 rounded-full"
          />
          <h1 className="text-4xl font-bold">Quickhire</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#features" className="hover:bg-purple-700 p-2 rounded transition-all duration-300 hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="hover:bg-purple-700 p-2 rounded transition-all duration-300 hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:bg-purple-700 p-2 rounded transition-all duration-300 hover:underline">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <FaBars onClick={toggleDrawer} className="text-2xl cursor-pointer" />
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-purple-900 text-white w-64 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <FaTimes onClick={toggleDrawer} className="text-2xl cursor-pointer" />
        </div>

        {/* Drawer Menu */}
        <ul className="flex flex-col space-y-6 p-4">
          <li>
            <a href="#features" onClick={toggleDrawer} className="hover:bg-purple-700 p-2 rounded transition-all duration-300 hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleDrawer} className="hover:bg-purple-700 p-2 rounded transition-all duration-300 hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleDrawer} className="hover:bg-purple-700 p-2 rounded transition-all duration-300 hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
