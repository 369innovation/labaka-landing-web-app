import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Faqs from './pages/Faqs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Upgrade from './pages/Upgrade';
import ContactUs from './pages/ContactUs';
import Profile from './pages/Profile';

import StickyBanner from './components/StickyBanner';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Main App Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:mode/:qrId" element={<Profile />} />

          {/* Legacy Path Redirects & Aliases */}
          <Route path="/Labaka/home" element={<Navigate to="/" replace />} />
          <Route path="/Labaka/AboutUs" element={<Navigate to="/about" replace />} />
          <Route path="/Labaka/AboutUs/" element={<Navigate to="/about" replace />} />
          <Route path="/Labaka/Faqs" element={<Navigate to="/faq" replace />} />
          <Route path="/Labaka/Faqs/" element={<Navigate to="/faq" replace />} />
          <Route path="/Labaka/PrivacyPolicy" element={<Navigate to="/privacy" replace />} />
          <Route path="/Labaka/PrivacyPolicy/" element={<Navigate to="/privacy" replace />} />
          <Route path="/Labaka/terms-and-conditions" element={<Navigate to="/terms" replace />} />
          <Route path="/Labaka/terms-and-conditions/" element={<Navigate to="/terms" replace />} />
          <Route path="/Labaka/Upgrade" element={<Navigate to="/upgrade" replace />} />
          <Route path="/Labaka/Upgrade/" element={<Navigate to="/upgrade" replace />} />
          <Route path="/Labaka/ContactUs" element={<Navigate to="/contact" replace />} />
          <Route path="/Labaka/ContactUs/" element={<Navigate to="/contact" replace />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <StickyBanner />
      </Router>
    </ThemeProvider>
  );
}

export default App;
