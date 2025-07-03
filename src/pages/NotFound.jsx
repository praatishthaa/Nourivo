import React from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-bistre flex flex-col">
      <img src={logo} alt="Nourivo Logo" className="h-10 w-10" />
      {/* Navbar */}
      <nav className="w-full px-6 py-4 shadow-md bg-tiffany text-white flex justify-between items-center">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate('/')}
        >
          Nourivo
        </h1>
        <button
          onClick={() => navigate('/')}
          className="text-sm bg-white text-tiffany px-4 py-1 rounded hover:bg-yellowbus hover:text-bistre transition"
        >
          Home
        </button>
      </nav>

      {/* 404 Content */}
      <div className="flex flex-1 items-center justify-center">
        <h2 className="text-3xl font-bold">Page Not Found</h2>
      </div>
    </div>
  );
};

export default NotFound;
