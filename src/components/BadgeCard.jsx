import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';

const BadgeCard = ({ level, meals, unlocked }) => {
  return (
    <div className={`shadow-card p-4 rounded-lg border-2 transition-all duration-300
      ${unlocked ? "border-tiffany bg-white" : "border-gray-300 bg-gray-100 opacity-60"}`}>
      
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-bistre">Badge: {level}</h2>
        {unlocked && <FaCheckCircle className="text-teal text-xl" />}
      </div>

      <p className="text-sm text-slategray mt-1 mb-3">
        {meals} meals donated
      </p>

      <div className={`text-sm font-medium rounded-full px-3 py-1 text-center w-fit
        ${unlocked ? "bg-yellowbus text-bistre" : "bg-gray-300 text-gray-600"}`}>
        {unlocked ? "Unlocked" : "Locked"}
      </div>
    </div>
  );
};

BadgeCard.propTypes = {
  level: PropTypes.string.isRequired,
  meals: PropTypes.number.isRequired,
  unlocked: PropTypes.bool.isRequired,
};

export default BadgeCard;
