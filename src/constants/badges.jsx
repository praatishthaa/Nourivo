import React from 'react';
import BadgeCard from '../../components/BadgeCard';

const allBadges = [
  { level: '10 Meals', meals: 10 },
  { level: '30 Meals', meals: 30 },
  { level: '50 Meals', meals: 50 },
  { level: '75 Meals', meals: 75 },
  { level: '100 Meals', meals: 100 },
  { level: '150 Meals', meals: 150 },
  { level: '200 Meals', meals: 200 },
];

const Badges = ({ totalMeals = 47 }) => {
  // This would come from user data (API or context)
  return (
    <div className="p-6 min-h-screen bg-tiffany/10">
      <h1 className="text-3xl font-bold text-bistre mb-6 text-center">Your Badges</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allBadges.map((badge, index) => (
          <BadgeCard
            key={index}
            level={badge.level}
            meals={badge.meals}
            unlocked={totalMeals >= badge.meals}
          />
        ))}
      </div>
    </div>
  );
};

export default Badges;
