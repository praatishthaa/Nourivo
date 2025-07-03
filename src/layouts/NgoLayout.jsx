import React from 'react';
import { Navigate, Outlet, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import logo from '../assets/logo/logo.png';

const NgoLayout = () => {
  const { user, logout, isNgo } = useAuth();

  if (!isNgo) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-white text-bistre flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="bg-slateGray text-white w-full md:w-64 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-2 mb-6">
          <img src={logo} alt="Nourivo Logo" className="w-8 h-8 rounded-full" />
          <span className="font-bold text-lg">Nourivo NGO</span>
        </div>

        <nav className="flex flex-col gap-3 text-sm">
          <Link to="/ngo/dashboard" className="hover:text-yellowbus">Dashboard</Link>
          <Link to="/ngo/volunteers" className="hover:text-yellowbus">Nearby Volunteers</Link>
          <Link to="/ngo/profile" className="hover:text-yellowbus">Profile</Link>
        </nav>

        <div className="mt-auto">
          <Button variant="danger" onClick={logout}>Logout</Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-tiffany/10 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default NgoLayout;
