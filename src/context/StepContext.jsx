import React, { createContext, useState, useContext, useEffect } from 'react';
import stepService from '../services/stepService';

// Create context
const StepContext = createContext();

// Provider
export const StepProvider = ({ children }) => {
  const [stepsToday, setStepsToday] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);

  // Mock fetching from API (replace with Fitbit API later)
  useEffect(() => {
    const fetchSteps = async () => {
      // TODO: Implement Fitbit API integration here
      // Use the client ID and API key to authenticate with the Fitbit API
      // and retrieve step data for the current user.

      setStepsToday(0);
      setTotalSteps(0);
    };

    fetchSteps();
  }, []);

  useEffect(() => {
    if (stepsToday >= 10000) {
      // Notify NGO to donate a meal
      stepService.notifyNGO('user-001', Math.floor(stepsToday / 10000))
        .then(response => {
          console.log(response.message);
        })
        .catch(error => {
          console.error("Error notifying NGO:", error);
        });
    }
  }, [stepsToday]);

  const mealsDonated = Math.floor(totalSteps / 10000);

  return (
    <StepContext.Provider
      value={{
        stepsToday,
        totalSteps,
        mealsDonated,
        setStepsToday,
        setTotalSteps,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

// Custom hook
export const useSteps = () => useContext(StepContext);
