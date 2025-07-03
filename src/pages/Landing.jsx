import React from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellowbus/20 via-tiffany/30 to-white text-bistre px-6">
      <img src={logo} alt="Nourivo Logo" className="h-60 w-60 mb-4" />
      {/* Logo (optional if you’ve added one) */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        Nourivo
      </h1>
      <p className="text-lg md:text-xl text-center max-w-xl text-slategray mb-8">
        Every 10,000 steps you take = one meal donated to someone in need.  
        <br />
        Walk with purpose. Step into change. 👟💛
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <Button onClick={() => navigate('/volunteer/signup')}>
          Join as Volunteer
        </Button>
        <Button onClick={() => navigate('/ngo/signup')} variant="outline">
          Register as NGO
        </Button>
      </div>

      {/* Optional hero image */}
      <div className="mt-10 w-full max-w-md">
        <img
          src="/assets/hero-walk.png" // put your image in public/assets/
          alt="Walking for good"
          className="w-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Landing;
