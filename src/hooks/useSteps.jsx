import { useEffect, useState } from 'react';

// This will be replaced with actual Google Fit API call later
const mockFetchSteps = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        today: 8240,
        total: 107000,
      });
    }, 1000);
  });
};

const useSteps = () => {
  const [stepsToday, setStepsToday] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchSteps = async () => {
    setLoading(true);
    try {
      const { today, total } = await mockFetchSteps();
      setStepsToday(today);
      setTotalSteps(total);
    } catch (error) {
      console.error("Error fetching steps:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSteps();
  }, []);

  const mealsDonated = Math.floor(totalSteps / 10000);

  return {
    stepsToday,
    totalSteps,
    mealsDonated,
    loading,
    refreshSteps: fetchSteps,
  };
};

export default useSteps;
