// src/services/authService.jsx

// fake token for mock login
const FAKE_TOKEN = 'nourivo-super-secret-token';

// Simulate an API delay
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const authService = {
  async signUp({ name, email, password, age, city }) {
    await delay(1000); // pretend to talk to a server

    // This is where you'd send a POST request to your backend
    // Example:
    // const res = await axios.post('/api/volunteer/signup', { name, email, password, age, city });

    return {
      success: true,
      user: {
        name,
        email,
        city,
        age,
        role: 'volunteer',
        token: FAKE_TOKEN,
      },
    };
  },

  async signIn({ email, password }) {
    await delay(1000);

    // Example of hardcoded dummy user
    if (email === 'user@nourivo.com' && password === 'password123') {
      return {
        success: true,
        user: {
          name: 'Praatishthaa Goyal',
          email,
          city: 'Lucknow',
          role: 'volunteer',
          token: FAKE_TOKEN,
        },
      };
    } else {
      return { success: false, message: 'Invalid credentials' };
    }
  },

  signOut() {
    // remove token from local storage or do nothing for now
    console.log('Signed out');
    return { success: true };
  },

  getCurrentUser() {
    // Ideally pull from localStorage or context
    return null;
  },
};

export default authService;
