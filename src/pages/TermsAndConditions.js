import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Divider,
  Link,
} from '@mui/material';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';
import DownloadAppButton from '../components/DownloadAppButton';
import DownloadAppModal from '../components/DownloadAppModal';

const BRAND = '#6D53F4';
const BRAND_DARK = '#5A3FD6';

export default function TermsAndConditions() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const openDownloadModal = () => setDownloadModalOpen(true);
  const closeDownloadModal = () => setDownloadModalOpen(false);

  const sections = [
    {
      title: '1. Agreement to Terms',
      content:
        'By downloading, installing, or accessing Labaka, you agree to be bound by these Terms & Conditions. If you do not agree to all terms, you must not access or use our services.',
    },
    {
      title: '2. User Eligibility & Accounts',
      content:
        'You must be at least 18 years old to create an account on Labaka. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
    },
    {
      title: '3. Acceptable Use & Community Guidelines',
      content:
        'Labaka is committed to fostering a safe, respectful environment. You agree not to engage in harassment, hate speech, spamming, unauthorized commercial solicitation, or fraudulent activity. Violation may result in immediate suspension or permanent banning.',
    },
    {
      title: '4. Subscriptions, Payments & Refunds',
      content:
        'Certain features, badges, or tiers (such as Plus or Founding Member) require paid subscriptions or tokens via LBK Wallet. All fees are clearly displayed prior to purchase and are non-refundable except where required by law.',
    },
    {
      title: '5. Intellectual Property Rights',
      content:
        'All logos, brand names, visual designs, software code, and trademarks related to Labaka and 369innovation are the exclusive property of 369innovation. You may not copy or redistribute any platform assets without prior written consent.',
    },
    {
      title: '6. Limitation of Liability',
      content:
        'Labaka provides the platform on an "as is" and "as available" basis. To the maximum extent permitted by law, 369innovation shall not be liable for direct, indirect, incidental, or consequential damages resulting from your use of the platform or interactions with other users.',
    },
    {
      title: '7. Governing Law & Jurisdiction',
      content:
        'These Terms & Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, India.',
    },
    {
      title: '8. Child Safety & CSAE Standards',
      items: [
        "LaBaKa's zero-tolerance policy toward CSAE/CSAM",
        'Prohibition of child sexual exploitation, grooming and sexual solicitation',
        'Prohibition on uploading, sharing or distributing CSAM',
        'User reporting mechanism',
        'Investigation/removal/enforcement process',
        'Account suspension/termination for violations',
        (
          <span key="cs-contact">
            Child-safety contact:{' '}
            <Link
              href="mailto:info@369innovation.com"
              sx={{
                color: BRAND,
                textDecoration: 'underline',
                fontWeight: 600,
                '&:hover': { color: BRAND_DARK },
              }}
            >
              info@369innovation.com
            </Link>
          </span>
        ),
      ],
      footer: (
        <>
          Users can report child-safety concerns, inappropriate content, or suspicious activity directly through the{' '}
          <strong style={{ fontWeight: 700, color: '#2d3142' }}>Settings &rarr; Report</strong> feature within the LaBaKa application.
        </>
      ),
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
            Legal Terms
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
            Terms & Conditions
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
            Please read these terms carefully before using the Labaka platform and app.
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
              {sec.content && (
                <Typography sx={{ color: '#5a6175', fontSize: '0.96rem', lineHeight: 1.8 }}>
                  {sec.content}
                </Typography>
              )}
              {sec.items && (
                <Box
                  component="ul"
                  sx={{
                    mt: sec.content ? 1.5 : 0,
                    mb: 0,
                    pl: 3,
                    '& li': {
                      color: '#5a6175',
                      fontSize: '0.96rem',
                      lineHeight: 1.8,
                      mb: 0.8,
                    },
                  }}
                >
                  {sec.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </Box>
              )}
              {sec.footer && (
                <Typography sx={{ color: '#5a6175', fontSize: '0.96rem', lineHeight: 1.8, mt: 2 }}>
                  {sec.footer}
                </Typography>
              )}
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
            Ready to Join Labaka?
          </Typography>
          <Typography sx={{ color: '#5a6175', fontSize: '0.95rem', mb: 3 }}>
            Download the Labaka app today and connect with people near you.
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
