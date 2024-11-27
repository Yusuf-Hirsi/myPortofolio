// src/components/Header.jsx
import React, { useState } from 'react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <header className="bg-gradient-to-r from-[#002042] to-[#11AB5B] text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="text-3xl mr-12 font-bold">
          <a href="/">Yusuf_Hirsi</a>
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <nav className={`absolute bg-gradient-to-r from-[#002042] to-[#11AB5B] w-full transition-transform duration-300 ease-in-out ${isOpen ? 'top-16' : 'top-[-200px]'} md:static md:top-0 md:flex md:space-x-8 md:items-center`}>
          <ul className="flex flex-col md:flex-row md:space-y-0 text-2xl sm:ml-16 space-y-4 md:space-x-4 p-5 md:p-0">
            <li>
              <a href="#about" className="hover:text-gray-200 transition duration-300">About</a>
            </li>
            <li>
              <a href="#project" className="hover:text-gray-200 transition duration-300">Projects</a>
            </li>
            <li>
              <a href="#service" className="hover:text-gray-200 transition duration-300">Service</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-200 transition duration-300">Contact</a>
            </li>
          </ul>
        </nav>
        <div>
          <a
            href="/myCV.pdf"
            className="bg-white text-blue-500 font-bold py-2 px-4 rounded transition duration-300 hover:bg-gray-200"
          >
            Resume
          </a>
        </div>
      </div>
     
    </header>


  );
};

export default Header;
