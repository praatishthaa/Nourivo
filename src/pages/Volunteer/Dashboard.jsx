import React from 'react';
import logo from '../../assets/logo.png';
import { useAuth } from '../../context/AuthContext';
import { useSteps } from '../../context/StepContext';
import BadgeCard from '../../components/BadgeCard';
import StepCounter from '../../components/StepCounter';

const VolunteerDashboard = () => {
  const { user } = useAuth();
  const { stepsToday, mealsDonated, totalSteps } = useSteps();

  // Sample badges for flexing
  const earnedBadges = [10, 30, 50].filter((meal) => mealsDonated >= meal);

  return (
    <div className="p-6 text-bistre">
      <img src="/assets/logo.png" alt="Nourivo Logo" className="h-8 w-auto mb-4" />
      <h1 className="text-3xl font-bold mb-2">Welcome back, {user ? user.name : 'Volunteer'} 👋</h1>
      <p className="text-sm text-slategray mb-6">Keep stepping — you're making a difference 💛</p>

      {/* Step Summary */}
      <StepCounter />

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white p-4 rounded-xl shadow border-l-4 border-yellowbus">
          <p className="text-sm text-slategray">Steps Today</p>
          <h2 className="text-2xl font-bold">{stepsToday.toLocaleString()} 👣</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow border-l-4 border-teal">
          <p className="text-sm text-slategray">Total Steps</p>
          <h2 className="text-2xl font-bold">{totalSteps.toLocaleString()} 🪜</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow border-l-4 border-slateGray">
          <p className="text-sm text-slategray">Meals Donated</p>
          <h2 className="text-2xl font-bold">{mealsDonated} 🍱</h2>
        </div>
      </div>

      {/* Badges Earned */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Your Badges 🏅</h2>
        {earnedBadges.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {earnedBadges.map((mealCount) => (
              <BadgeCard key={mealCount} milestone={mealCount} />
            ))}
          </div>
        ) : (
          <p className="text-slategray text-sm">No badges yet 😢 Walk 10k steps to earn your first!</p>
        )}
      </div>
    </div>
  );
};

export default VolunteerDashboard;
