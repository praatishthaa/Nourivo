// src/services/stepService.js

const STEP_GOAL = 10000; // every 10K steps = 1 meal

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const stepService = {
  // Mock today's step count
  async getStepsToday(userId) {
    await delay(500);

    // Replace this with Google Fit API in the future
    const mockSteps = Math.floor(Math.random() * 12000); // simulate steps
    return {
      success: true,
      stepsToday: mockSteps,
    };
  },

  // Calculate total steps + meals donated
  async getTotalStats(userId) {
    await delay(500);

    // Simulate pulling from backend
    const mockTotalSteps = 165430; // your user is a cardio queen
    const mealsDonated = Math.floor(mockTotalSteps / STEP_GOAL);

    return {
      success: true,
      totalSteps: mockTotalSteps,
      mealsDonated,
    };
  },

  // Mock updating step count (in real world, pulled from Fit API or stored daily)
  async addSteps(userId, stepsToAdd) {
    await delay(300);

    // Real backend call would update step count in DB
    return {
      success: true,
      message: `${stepsToAdd} steps added for user ${userId}`,
    };
  },

  // (Optional) send notification to NGO
  async notifyNGO(userId, mealsToDonate) {
    await delay(400);

    // TODO: Implement real NGO notification system here
    // Use an API or database to notify the NGO to donate a meal.

    return {
      success: true,
      message: `Notified NGO to donate ${mealsToDonate} meal(s) for user ${userId}`,
    };
  },
};

export default stepService;
