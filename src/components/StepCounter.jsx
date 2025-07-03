import React from 'react';
import { useSteps } from '../context/StepContext';

const StepCounter = () => {
  const { stepsToday, totalSteps } = useSteps();

  const formattedStepsToday = (stepsToday ?? 0).toLocaleString();
  const formattedTotalSteps = (totalSteps ?? 0).toLocaleString();

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-lg font-semibold text-bistre mb-2">✨ Step Progress</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-bistre">
        <div className="bg-yellowbus/20 p-4 rounded-lg">
          <p className="text-sm text-slategray">Steps Today</p>
          <p className="text-2xl font-bold">{formattedStepsToday} 👣</p>
        </div>
        <div className="bg-teal/20 p-4 rounded-lg">
          <p className="text-sm text-slategray">Total Steps</p>
          <p className="text-2xl font-bold">{formattedTotalSteps} 🪜</p>
        </div>
      </div>
    </div>
  );
};

export default StepCounter;
