import React from 'react';
import logo from '../../assets/logo.png';
import COLORS from '../../constants/colors';

const mockVolunteers = [
  {
    id: 1,
    name: 'Praatishthaa G.',
    city: 'Lucknow',
    steps: 18500,
    meals: 2,
    lastActive: '1 hour ago',
  },
  {
    id: 2,
    name: 'Aarav Mehta',
    city: 'Delhi',
    steps: 32000,
    meals: 3,
    lastActive: '15 minutes ago',
  },
  {
    id: 3,
    name: 'Zoya Shaikh',
    city: 'Mumbai',
    steps: 9700,
    meals: 0,
    lastActive: 'Yesterday',
  },
];

const VolunteerList = () => {
  return (
    <div className="p-6">
      <img src={logo} alt="Nourivo Logo" className="h-10 w-10 mb-4" />
      <h1 className="text-3xl font-bold text-bistre mb-4">Nearby Volunteers</h1>
      <p className="text-sm text-slategray mb-6">These users are contributing to your cause 🧡</p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {mockVolunteers.map((v) => (
          <div
            key={v.id}
            className="bg-white rounded-xl p-5 shadow hover:shadow-lg border-l-4 border-teal"
          >
            <h2 className="text-xl font-semibold text-bistre mb-1">{v.name}</h2>
            <p className="text-sm text-slategray mb-2">City: {v.city}</p>
            <p className="text-sm">Steps: {v.steps.toLocaleString()} 👣</p>
            <p className="text-sm">Meals Donated: {v.meals} 🍱</p>
            <p className="text-xs text-gray-400 mt-2">Last Active: {v.lastActive}</p>

            {v.meals >= 1 && (
              <div className="mt-3 inline-block bg-yellowbus text-bistre text-xs font-semibold px-2 py-1 rounded-full">
                Active Contributor
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerList;
