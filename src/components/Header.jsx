import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#424769] py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Proper padding before the logo */}
        <h1 className="text-white text-xl font-bold">Personal Dashboard</h1>
        {/* Navigation menu for larger screens */}
        <nav className="hidden md:flex space-x-4">
          <NavLink to="/" className="text-white hover:text-gray-300" activeClassName="text-gray-300" exact>
            User Profile
          </NavLink>
          <NavLink to="/todo" className="text-white hover:text-gray-300" activeClassName="text-gray-300">
            To-Do List
          </NavLink>
          <NavLink to="/weather" className="text-white hover:text-gray-300" activeClassName="text-gray-300">
            Weather
          </NavLink> 
        </nav>
        {/* Burger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Navigation menu for mobile */}
      <nav className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="bg-black divide-y divide-gray-800">
          <li>
            <Link to="/" className="text-white w-full text-left py-2 px-4 hover:bg-gray-800 focus:outline-none" exact>
              User Profile
            </Link>
          </li>
          <li>
            <Link to="/todo" className="text-white w-full text-left py-2 px-4 hover:bg-gray-800 focus:outline-none">
              To-Do List
            </Link>
          </li>
          <li>
            <Link to="/weather" className="text-white w-full text-left py-2 px-4 hover:bg-gray-800 focus:outline-none">
              Weather
            </Link>
          </li>
          {/* Add more links/buttons as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
