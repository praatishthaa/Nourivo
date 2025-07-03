import React from 'react';
import logo from '../../assets/logo.png';
import { useAuth } from '../../context/AuthContext';
import COLORS from '../../constants/colors';
import { useNavigate } from 'react-router-dom';

const NgoDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="p-6 text-bistre">
      <img src={logo} alt="Nourivo Logo" className="h-12 w-auto mb-4" />

      <h1 className="text-3xl font-bold mb-2">
        Welcome, {user?.name || 'NGO Hero'} 💛
      </h1>

      <p className="text-sm text-slategray mb-6">
        You are helping turn steps into smiles 🙏
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-card p-5 border-l-4 border-tiffany">
          <h2 className="text-lg font-semibold mb-1">Meals Received</h2>
          <p className="text-2xl font-bold text-teal">N/A</p>
        </div>

        <div className="bg-white rounded-xl shadow-card p-5 border-l-4 border-yellowbus">
          <h2 className="text-lg font-semibold mb-1">Nearby Volunteers</h2>
          <p className="text-2xl font-bold text-bistre">N/A</p>
        </div>

        <div className="bg-white rounded-xl shadow-card p-5 border-l-4 border-slateGray">
          <h2 className="text-lg font-semibold mb-1">Last Donation</h2>
          <p className="text-sm text-slategray">N/A</p>
        </div>
      </div>

      {/* Call to action */}
      <div className="mt-10 bg-tiffany/20 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Want to thank your volunteers?</h3>
        <p className="text-sm mb-4 text-slategray">
          Send appreciation badges or reach out to top contributors nearby.
        </p>
        <button
          onClick={() => navigate('/ngo/volunteers')} // 🔥 this is the magic
          className="bg-yellowbus text-bistre px-4 py-2 rounded hover:bg-yellow-400 transition"
        >
          View Volunteers
        </button>
      </div>
    </div>
  );
};

export default NgoDashboard;
