import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';

// Pages
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Upgrade from './pages/Upgrade';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Main Landing Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/upgrade" element={<Upgrade />} />

          {/* Legacy Path Redirects & Aliases */}
          <Route path="/Labaka/home" element={<Navigate to="/" replace />} />
          <Route path="/Labaka/ContactUs" element={<Navigate to="/contact" replace />} />
          <Route path="/Labaka/ContactUs/" element={<Navigate to="/contact" replace />} />
          <Route path="/Labaka/Upgrade" element={<Navigate to="/upgrade" replace />} />
          <Route path="/Labaka/Upgrade/" element={<Navigate to="/upgrade" replace />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
