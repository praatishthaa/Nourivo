import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/Button';

const NgoSignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [ngoId, setNgoId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock login validation (replace with backend logic)
    if (ngoId === 'NGO123' && password === 'securepass') {
      login({
        name: 'Helping Hands Foundation',
        role: 'ngo',
        id: ngoId,
        token: 'fake-ngotoken-123',
      });

      navigate('/ngo/dashboard');
    } else {
      setError('Invalid NGO ID or password 😬');
    }
  };

  return (
    <div className="min-h-screen bg-tiffany/10 flex justify-center items-center px-4">
      <img src={logo} alt="Nourivo Logo" className="h-60 w-60 mb-4" />
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full"
      >
        <h1 className="text-2xl font-bold text-bistre mb-2">NGO Sign In</h1>
        <p className="text-sm text-slategray mb-6">Welcome back, superhero 🦸‍♀️</p>

        {/* Error */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* NGO ID */}
        <div className="mb-4">
          <label htmlFor="ngoId" className="block text-sm font-medium mb-1 text-bistre">
            NGO ID
          </label>
          <input
            type="text"
            id="ngoId"
            value={ngoId}
            onChange={(e) => setNgoId(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-tiffany"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium mb-1 text-bistre">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-tiffany"
          />
        </div>

        {/* Button */}
        <Button type="submit" fullWidth>
          Sign In
        </Button>

        <p className="text-sm text-center mt-4 text-slategray">
          Not registered?{' '}
          <a href="/ngo/signup" className="text-teal hover:underline">
            Sign up here
          </a>
        </p>
      </form>
    </div>
  );
};

export default NgoSignIn;
