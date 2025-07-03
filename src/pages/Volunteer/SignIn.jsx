import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/Button';

const VolunteerSignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake validation (replace with backend later)
    if (email === 'user@nourivo.com' && password === 'password123') {
      login({
        name: 'Praatishthaa Goyal',
        email,
        role: 'volunteer',
        city: 'Lucknow',
        token: 'fake-volunteer-token',
      });

      navigate('/volunteer/dashboard');
    } else {
      setError('Invalid email or password 😩');
    }
  };

  return (
    <div className="min-h-screen bg-yellowbus/10 flex items-center justify-center px-4">
      <img src={logo} alt="Nourivo Logo" className="h-60 w-60 mb-4" />
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full"
      >
        <h1 className="text-2xl font-bold text-bistre mb-2">Volunteer Sign In</h1>
        <p className="text-sm text-slategray mb-6">Let’s turn your steps into meals 💛</p>

        {/* Error message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm font-medium text-bistre block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-sm font-medium text-bistre block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        {/* Button */}
        <Button type="submit" fullWidth>
          Sign In
        </Button>

        <p className="text-sm text-center mt-4 text-slategray">
          Not signed up yet?{' '}
          <a href="/volunteer/signup" className="text-teal hover:underline">
            Join Nourivo
          </a>
        </p>
      </form>
    </div>
  );
};

export default VolunteerSignIn;
