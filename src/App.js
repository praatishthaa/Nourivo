import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Landing + Not Found
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

// Volunteer Pages
import VolunteerSignIn from './pages/Volunteer/SignIn';
import VolunteerSignUp from './pages/Volunteer/SignUp';
import VolunteerDashboard from './pages/Volunteer/Dashboard';
import VolunteerProfile from './pages/Volunteer/Profile';

// NGO Pages
import NgoSignIn from './pages/NGO/SignIn';
import NgoSignUp from './pages/NGO/SignUp';
import NgoDashboard from './pages/NGO/Dashboard';
import VolunteerList from './pages/NGO/VolunteerList';

function App() {
  return (
    <Router>
      <Routes>
        {/* Generic */}
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />

        {/* Volunteer Routes */}
        <Route path="/volunteer/signin" element={<VolunteerSignIn />} />
        <Route path="/volunteer/signup" element={<VolunteerSignUp />} />
        <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
        <Route path="/volunteer/profile" element={<VolunteerProfile />} />

        {/* NGO Routes */}
        <Route path="/ngo/signin" element={<NgoSignIn />} />
        <Route path="/ngo/signup" element={<NgoSignUp />} />
        <Route path="/ngo/dashboard" element={<NgoDashboard />} />
        <Route path="/ngo/volunteers" element={<VolunteerList />} />
      </Routes>
    </Router>
  );
}

export default App;
