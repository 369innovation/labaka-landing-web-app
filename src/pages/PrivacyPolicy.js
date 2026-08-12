import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Divider,
} from '@mui/material';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';
import DownloadAppButton from '../components/DownloadAppButton';
import DownloadAppModal from '../components/DownloadAppModal';

const BRAND = '#6D53F4';
const BRAND_DARK = '#5A3FD6';

export default function PrivacyPolicy() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const openDownloadModal = () => setDownloadModalOpen(true);
  const closeDownloadModal = () => setDownloadModalOpen(false);

  const sections = [
    {
      title: '1. Overview & Scope',
      content:
        'Labaka ("we", "us", or "our") is committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our web platform and mobile application. By accessing or using Labaka, you consent to the data practices described in this policy.',
    },
    {
      title: '2. Information We Collect',
      content:
        'We collect information you provide directly to us, such as your name, phone number, email address, bio, profile photo, and preferences during account registration. When using location-based features, we collect precise or approximate geolocation data based on your permission settings.',
    },
    {
      title: '3. How We Use Your Data',
      content:
        'Your information is used strictly to provide, improve, and personalize Labaka services. Key uses include matching nearby users, displaying local events, processing in-app transactions via LBK Wallet, and preventing fraud or misuse.',
    },
    {
      title: '4. Data Protection & DPDP Act 2023 Compliance',
      content:
        "Labaka adheres to global data privacy laws and India's Digital Personal Data Protection (DPDP) Act 2023. We store data in encrypted infrastructure and enforce strict access controls. We NEVER sell your personal data to third parties.",
    },
    {
      title: '5. Data Sharing & Third Parties',
      content:
        'We only share data with trusted service providers necessary for operating our platform (such as SMS OTP authentication services, cloud hosting, and payment gateways). All third parties are contractually bound to maintain absolute confidentiality.',
    },
    {
      title: '6. User Rights & Data Deletion',
      content:
        'You have full control over your data. You may request access, correction, or permanent deletion of your account and associated data at any time via Settings in the Labaka app or by contacting privacy@labaka.com.',
    },
    {
      title: '7. Contact Us',
      content:
        'If you have questions regarding this Privacy Policy or wish to exercise your data rights, please contact our Data Protection Officer at privacy@labaka.com.',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fff', overflowX: 'hidden' }}>
      {/* Shared Navbar */}
      <Navbar onOpenDownloadModal={openDownloadModal} />

      {/* Sub Navbar */}
      <SubNavbar />

      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 20, md: 24 },
          pb: { xs: 8, md: 10 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, #3a1f8e 0%, ${BRAND_DARK} 30%, ${BRAND} 60%, #8B73FF 100%)`,
          color: '#fff',
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '28px',
              px: 2.5,
              py: 0.75,
              fontSize: '0.85rem',
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 2,
              backdropFilter: 'blur(8px)',
            }}
          >
            Privacy & Trust
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.8rem', md: '3.2rem' },
              fontWeight: 800,
              color: '#fff',
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.98rem', md: '1.1rem' },
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: 580,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Your privacy matters to us. Learn how we collect, protect, and respect your personal data.
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            backgroundColor: 'rgba(109,83,244,0.08)',
            border: '1px solid rgba(109,83,244,0.2)',
            borderRadius: '28px',
            px: 2.5,
            py: 0.8,
            fontSize: '0.85rem',
            color: BRAND,
            fontWeight: 600,
            mb: 4,
          }}
        >
          Effective Date: January 1, 2026
        </Box>

        <Card
          elevation={0}
          sx={{
            p: { xs: 3.5, md: 5 },
            borderRadius: '24px',
            border: '1px solid rgba(109, 83, 244, 0.12)',
            boxShadow: '0 4px 24px rgba(109,83,244,0.06)',
            mb: 6,
          }}
        >
          {sections.map((sec, idx) => (
            <Box key={sec.title} sx={{ mb: idx === sections.length - 1 ? 0 : 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: '#0d1b2a',
                  mb: 1.5,
                  fontSize: { xs: '1.2rem', md: '1.35rem' },
                }}
              >
                {sec.title}
              </Typography>
              <Typography sx={{ color: '#5a6175', fontSize: '0.96rem', lineHeight: 1.8 }}>
                {sec.content}
              </Typography>
              {idx < sections.length - 1 && <Divider sx={{ mt: 3, opacity: 0.6 }} />}
            </Box>
          ))}
        </Card>

        {/* Download Banner */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(109,83,244,0.06), rgba(139,115,255,0.12))',
            border: '1px solid rgba(109,83,244,0.18)',
            borderRadius: '20px',
            p: { xs: 3.5, md: 4 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#0d1b2a', mb: 1 }}>
            Have Data Concerns?
          </Typography>
          <Typography sx={{ color: '#5a6175', fontSize: '0.95rem', mb: 3 }}>
            Download the Labaka app to manage your privacy settings directly in the app.
          </Typography>
          <DownloadAppButton onClick={openDownloadModal} sx={{ justifyContent: 'center' }} />
        </Box>
      </Container>

      {/* Shared Footer */}
      <Footer onOpenDownloadModal={openDownloadModal} />

      {/* Download Modal */}
      <DownloadAppModal open={downloadModalOpen} onClose={closeDownloadModal} />
    </Box>
  );
}
