import React from 'react';
import { Navigate, Outlet, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import logo from '../assets/logo/logo.png';

const VolunteerLayout = () => {
  const { user, logout, isVolunteer } = useAuth();

  if (!isVolunteer) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex flex-col md:flex-row text-bistre">
      {/* Sidebar */}
      <aside className="bg-bistre text-white w-full md:w-60 p-5 flex flex-col gap-6 shadow-md">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Nourivo Logo" className="w-8 h-8 rounded-full" />
          <span className="text-lg font-bold">Nourivo</span>
        </div>

        <nav className="flex flex-col gap-3 text-sm mt-4">
          <Link to="/volunteer/dashboard" className="hover:text-yellowbus">Dashboard</Link>
          <Link to="/volunteer/badges" className="hover:text-yellowbus">Badges</Link>
          <Link to="/volunteer/profile" className="hover:text-yellowbus">Profile</Link>
        </nav>

        <div className="mt-auto">
          <Button variant="ghost" onClick={logout}>Logout</Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-tiffany/10 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default VolunteerLayout;
