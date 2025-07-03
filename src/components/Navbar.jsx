import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from '../assets/logo/logo.png'; // make sure you have this!

const Navbar = () => {
  return (
    <header className="bg-bistre text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Nourivo Logo" className="w-10 h-10 rounded-full" />
          <span className="text-xl font-bold tracking-wide">Nourivo</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-sm items-center">
          <Link to="/" className="hover:text-yellowbus transition">Home</Link>
          <Link to="/volunteer/signup" className="hover:text-yellowbus transition">Volunteer</Link>
          <Link to="/ngo/signup" className="hover:text-yellowbus transition">NGO</Link>
        </nav>

        {/* Call to Action */}
        <div className="hidden md:block">
          <Link to="/volunteer/signin">
            <Button variant="secondary">Login</Button>
          </Link>
        </div>

        {/* Mobile Burger (optional) */}
        <div className="md:hidden">
          {/* add mobile nav logic later */}
          <span className="text-xl">☰</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
