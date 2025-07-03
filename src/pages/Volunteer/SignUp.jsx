import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useAuth } from '../../context/AuthContext';

const VolunteerSignUp = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    city: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords don't match 💀");
      return;
    }

    // TODO: Replace this with actual backend call
    login({
      name: form.name,
      email: form.email,
      city: form.city,
      age: form.age,
      role: 'volunteer',
      token: 'fake-volunteer-token',
    });

    navigate('/volunteer/dashboard');
  };

  return (
    <div className="min-h-screen bg-yellowbus/10 flex items-center justify-center px-4">
      <img src={logo} alt="Nourivo Logo" className="h-60 w-60 mb-4" />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full"
      >
        <h1 className="text-2xl font-bold text-bistre mb-2">Volunteer Sign Up</h1>
        <p className="text-sm text-slategray mb-6">Join the Nourivo movement and walk for a cause 💛</p>

        {/* Error */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-bistre mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-bistre mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-bistre mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-bistre mb-1">City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-bistre mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-bistre mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" fullWidth>
          Create Account
        </Button>

        <p className="text-sm text-center mt-4 text-slategray">
          Already have an account?{' '}
          <a href="/volunteer/signin" className="text-teal hover:underline">
            Sign in here
          </a>
        </p>
      </form>
    </div>
  );
};

export default VolunteerSignUp;
