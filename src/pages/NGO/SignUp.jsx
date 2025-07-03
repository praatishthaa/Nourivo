import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const NgoSignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    registrationDoc: null,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'registrationDoc') {
      setForm({ ...form, registrationDoc: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords don't match 💀");
      return;
    }

    // TODO: Send to backend (for now just redirect)
    console.log('Registered NGO:', form);
    navigate('/ngo/signin');
  };

  return (
    <div className="min-h-screen bg-tiffany/10 flex justify-center items-center px-4">
      <img src={logo} alt="Nourivo Logo" className="h-60 w-60 mb-4" />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full"
        encType="multipart/form-data"
      >
        <h1 className="text-2xl font-bold text-bistre mb-2">NGO Registration</h1>
        <p className="text-sm text-slategray mb-6">Join Nourivo and start receiving meal donations 🌍</p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* NGO Name */}
        <div className="mb-4">
          <label className="text-sm font-medium text-bistre block mb-1">NGO Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm font-medium text-bistre block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="text-sm font-medium text-bistre block mb-1">City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        {/* Upload Legal Document */}
        <div className="mb-4">
          <label className="text-sm font-medium text-bistre block mb-1">
            Upload Registration Document
          </label>
          <input
            type="file"
            name="registrationDoc"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleChange}
            required
            className="block w-full text-sm text-gray-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-sm font-medium text-bistre block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="text-sm font-medium text-bistre block mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        {/* Submit */}
        <Button type="submit" fullWidth>
          Register
        </Button>

        <p className="text-sm text-center mt-4 text-slategray">
          Already have an account?{' '}
          <a href="/ngo/signin" className="text-teal hover:underline">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default NgoSignUp;
