import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  CircularProgress,
  Alert,
  Divider,
} from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloadAppButton from '../components/DownloadAppButton';
import DownloadAppModal from '../components/DownloadAppModal';

const BRAND = '#6D53F4';
const BRAND_DARK = '#5A3FD6';

export default function Profile() {
  const { mode: urlMode, qrId: urlQrId } = useParams();
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [statusTitle, setStatusTitle] = useState('Opening Profile...');
  const [statusMessage, setStatusMessage] = useState('Please wait while we redirect you to the app.');
  const [showButtons, setShowButtons] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const openDownloadModal = () => setDownloadModalOpen(true);
  const closeDownloadModal = () => setDownloadModalOpen(false);

  // Extract from path if not in params
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const mode = urlMode || pathParts[1] || 'casual';
  const qrId = urlQrId || pathParts[2] || '';

  const deepLink = `tabullet://profile/${mode}/${qrId}`;

  const openApp = useCallback(() => {
    window.location.href = deepLink;

    const timer = setTimeout(() => {
      setLoading(false);
      setStatusTitle('App Not Installed?');
      setStatusMessage('Install the Labaka app to view this profile, or continue in your browser.');
      setShowButtons(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [deepLink]);

  useEffect(() => {
    openApp();
  }, [openApp]);

  const viewInBrowser = async () => {
    if (!qrId) {
      setErrorMsg('No valid QR ID provided.');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setShowButtons(false);
      setProfileData(null);
      setErrorMsg(null);
      setStatusTitle('Loading Profile...');
      setStatusMessage('Fetching profile data...');

      const response = await fetch(`https://tabullet.com/api/qr/profile/${qrId}`);
      const data = await response.json();

      setLoading(false);
      if (data.success && data.data) {
        setProfileData(data.data);
        setStatusTitle(data.data.name || 'User Profile');
        setStatusMessage('Profile loaded successfully!');
      } else {
        setErrorMsg('Profile not found or QR code is inactive.');
        setShowButtons(true);
      }
    } catch (err) {
      console.error('Error loading profile:', err);
      setLoading(false);
      setErrorMsg('Failed to load profile. Please try again.');
      setShowButtons(true);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fff', overflowX: 'hidden' }}>
      {/* Shared Navbar */}
      <Navbar onOpenDownloadModal={openDownloadModal} />

      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 18, md: 22 },
          pb: { xs: 6, md: 8 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, #3a1f8e 0%, ${BRAND_DARK} 30%, ${BRAND} 60%, #8B73FF 100%)`,
          color: '#fff',
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              fontWeight: 800,
              color: '#fff',
              mb: 1,
            }}
          >
            {statusTitle}
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
            {statusMessage}
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="sm" sx={{ py: { xs: 6, md: 8 } }}>
        <Card
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: '24px',
            border: '1px solid rgba(109, 83, 244, 0.15)',
            boxShadow: '0 8px 32px rgba(109,83,244,0.08)',
            textAlign: 'center',
          }}
        >
          {loading && (
            <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <CircularProgress sx={{ color: BRAND }} />
              <Typography sx={{ color: '#5a6175', fontSize: '0.9rem' }}>
                Connecting to Labaka App...
              </Typography>
            </Box>
          )}

          {errorMsg && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: '12px' }}>
              {errorMsg}
            </Alert>
          )}

          {profileData && (
            <Box sx={{ textTransform: 'none', textAlign: 'left', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#0d1b2a', mb: 2 }}>
                {profileData.name || 'User Profile'}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box sx={{ display: 'flex', justify: 'space-between' }}>
                  <Typography sx={{ fontWeight: 600, color: '#5a6175' }}>Profile Mode:</Typography>
                  <Typography sx={{ fontWeight: 700, color: BRAND }}>
                    {profileData.profileMode || mode || 'N/A'}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justify: 'space-between' }}>
                  <Typography sx={{ fontWeight: 600, color: '#5a6175' }}>Age:</Typography>
                  <Typography sx={{ fontWeight: 700, color: '#0d1b2a' }}>
                    {profileData.age || 'N/A'}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justify: 'space-between' }}>
                  <Typography sx={{ fontWeight: 600, color: '#5a6175' }}>Gender:</Typography>
                  <Typography sx={{ fontWeight: 700, color: '#0d1b2a' }}>
                    {profileData.gender || 'N/A'}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justify: 'space-between' }}>
                  <Typography sx={{ fontWeight: 600, color: '#5a6175' }}>Location:</Typography>
                  <Typography sx={{ fontWeight: 700, color: '#0d1b2a' }}>
                    {profileData.location?.name || 'N/A'}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}

          {showButtons && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, alignItems: 'center' }}>
              <Button
                variant="contained"
                onClick={openApp}
                sx={{
                  width: '100%',
                  borderRadius: '24px',
                  py: 1.2,
                  backgroundColor: BRAND,
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 16px rgba(109,83,244,0.35)',
                  '&:hover': { backgroundColor: BRAND_DARK },
                }}
              >
                Open in App
              </Button>
              <Button
                variant="outlined"
                onClick={viewInBrowser}
                sx={{
                  width: '100%',
                  borderRadius: '24px',
                  py: 1.2,
                  borderColor: BRAND,
                  color: BRAND,
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  '&:hover': { borderColor: BRAND_DARK, backgroundColor: 'rgba(109,83,244,0.04)' },
                }}
              >
                View in Browser
              </Button>
              <Box sx={{ mt: 1 }}>
                <DownloadAppButton onClick={openDownloadModal} />
              </Box>
            </Box>
          )}
        </Card>
      </Container>

      {/* Shared Footer */}
      <Footer onOpenDownloadModal={openDownloadModal} />

      {/* Download Modal */}
      <DownloadAppModal open={downloadModalOpen} onClose={closeDownloadModal} />
    </Box>
  );
}
