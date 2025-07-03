import React from 'react';
import PropTypes from 'prop-types';

const StepCounter = ({ stepsToday }) => {
  const progress = Math.min((stepsToday / 10000) * 100, 100); // cap at 100%
  const meals = Math.floor(stepsToday / 10000);

  return (
    <div className="bg-white rounded-xl shadow-card p-6 w-full max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-bistre mb-2">Today's Progress</h2>
      <p className="text-slategray text-sm mb-4">Keep walking, you're making a difference 💛</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-4 rounded-full mb-4">
        <div
          className="bg-tiffany h-4 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-sm text-bistre mb-4">
        <span>0</span>
        <span>10,000 steps</span>
      </div>

      {/* Step & Meal Stats */}
      <div className="text-bistre text-lg font-semibold">
        Steps: <span className="text-teal">{stepsToday.toLocaleString()}</span>
      </div>
      <div className="text-bistre mt-1 text-md">
        Meals Donated: <span className="text-yellowbus font-bold">{meals}</span>
      </div>
    </div>
  );
};

StepCounter.propTypes = {
  stepsToday: PropTypes.number.isRequired,
};

export default StepCounter;
