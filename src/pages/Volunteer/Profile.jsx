import React from 'react';
import logo from '../../assets/logo.png';
import { useAuth } from '../../context/AuthContext';
import { useSteps } from '../../context/StepContext';

const VolunteerProfile = () => {
  const { user } = useAuth();
  const { totalSteps, mealsDonated } = useSteps();

  return (
    <div className="p-6 text-bistre">
      <img src={logo} alt="Nourivo Logo" className="h-10 w-15 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Your Profile 🧍‍♀️</h1>
      <p className="text-sm text-slategray mb-6">Here’s everything we know about your amazing self 😌</p>

      {/* Info Card */}
      <div className="bg-white rounded-xl shadow p-6 mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Personal Info</h2>
          <p className="text-sm"><span className="font-medium">Name:</span> {user ? user.name : 'N/A'}</p>
          <p className="text-sm"><span className="font-medium">Email:</span> {user ? user.email : 'N/A'}</p>
          <p className="text-sm"><span className="font-medium">City:</span> {user ? user.city : 'N/A'}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Impact</h2>
          <p className="text-sm"><span className="font-medium">Total Steps:</span> {totalSteps.toLocaleString()} 👣</p>
          <p className="text-sm"><span className="font-medium">Meals Donated:</span> {mealsDonated} 🍱</p>
          <p className="text-sm"><span className="font-medium">Badges Earned:</span> {Math.floor(mealsDonated / 10)} 🏅</p>
        </div>
      </div>

      {/* Future buttons / features */}
      <div className="flex flex-wrap gap-4">
        <button className="px-4 py-2 rounded bg-tiffany text-white hover:bg-teal transition">
          Edit Info (coming soon)
        </button>
        <button className="px-4 py-2 rounded bg-red-100 text-red-700 hover:bg-red-200 transition">
          Delete Account (👀 maybe don’t)
        </button>
      </div>
    </div>
  );
};

export default VolunteerProfile;
