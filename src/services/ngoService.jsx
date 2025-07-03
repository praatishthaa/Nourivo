// src/services/ngoService.jsx

const FAKE_NGO_TOKEN = 'verified-ngo-token-2025';
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const ngoService = {
  async signUp({ name, city, email, password, registrationDoc }) {
    await delay(1000);

    // TODO: Send to backend (e.g., formData with file upload)
    // Implement the API call to the backend to sign up the NGO.
    return {
      success: true,
      ngo: {
        id: 'ngo-001',
        name,
        city,
        email,
        token: FAKE_NGO_TOKEN,
      },
    };
  },

  async signIn({ ngoId, password }) {
    await delay(1000);

    // Mock auth check
    // TODO: Implement real authentication logic here
    if (ngoId === 'ngo-001' && password === 'securepass') {
      return {
        success: true,
        ngo: {
          id: ngoId,
          name: 'Feeding India',
          city: 'Delhi',
          token: FAKE_NGO_TOKEN,
        },
      };
    } else {
      return { success: false, message: 'Invalid NGO ID or password 🥲' };
    }
  },

  async getNearbyVolunteers(city) {
    await delay(500);

    // Mocked volunteer list based on city
    // TODO: Implement real API call to fetch nearby volunteers
    const volunteers = [
      {
        id: 1,
        name: 'Praatishthaa Goyal',
        city,
        steps: 18400,
        meals: 2,
        lastActive: '2 hours ago',
      },
      {
        id: 2,
        name: 'Shaurya S.',
        city,
        steps: 32000,
        meals: 3,
        lastActive: '10 minutes ago',
      },
    ];

    return {
      success: true,
      volunteers,
    };
  },
};

export default ngoService;
