import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
} from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloadAppButton from '../components/DownloadAppButton';
import DownloadAppModal from '../components/DownloadAppModal';

const BRAND = '#6D53F4';
const BRAND_DARK = '#5A3FD6';

export default function AboutUs() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const openDownloadModal = () => setDownloadModalOpen(true);
  const closeDownloadModal = () => setDownloadModalOpen(false);

  const coreValues = [
    {
      num: '01',
      title: 'Authentic Connections',
      desc: 'We prioritize real, meaningful human interaction over passive scrolling and artificial engagement.',
    },
    {
      num: '02',
      title: 'Dual Identity Freedom',
      desc: 'Seamlessly switch between personal social life and professional growth within a single platform.',
    },
    {
      num: '03',
      title: 'Hyper-Local Discovery',
      desc: 'Empowering users to discover events, places, and people nearest to them in real time.',
    },
    {
      num: '04',
      title: 'Privacy & User Safety',
      desc: 'Built with enterprise-grade encryption and granular privacy controls at every interaction layer.',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fff', overflowX: 'hidden' }}>
      {/* Shared Navbar */}
      <Navbar onOpenDownloadModal={openDownloadModal} />

      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 16, md: 20 },
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
              mb: 2.5,
              backdropFilter: 'blur(8px)',
            }}
          >
            Meet Labaka
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.2rem', sm: '3rem', md: '3.4rem' },
              fontWeight: 800,
              color: '#fff',
              mb: 2,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Empowering Real Connections In A Digital World
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.15rem' },
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: 640,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Labaka is an all-in-one connection platform designed to bridge local communities, social discovery, professional opportunities, and live events.
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Our Story Card */}
        <Card
          elevation={0}
          sx={{
            p: { xs: 3, md: 4.5 },
            mb: 4,
            borderRadius: '24px',
            border: '1px solid rgba(109, 83, 244, 0.12)',
            boxShadow: '0 4px 24px rgba(109,83,244,0.06)',
          }}
        >
          <Typography
            sx={{
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: BRAND,
              textTransform: 'uppercase',
              mb: 1.5,
            }}
          >
            OUR STORY & VISION
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: '#0d1b2a',
              mb: 2,
              fontSize: { xs: '1.5rem', md: '1.85rem' },
            }}
          >
            Why We Built Labaka
          </Typography>
          <Typography sx={{ color: '#5a6175', fontSize: '1rem', lineHeight: 1.8, mb: 2 }}>
            Traditional platforms separate personal socializing from professional networking. We noticed that real life doesn't work in silos-your next great project collaborator might be someone you meet at a casual coffee meetup, and your business partner might share your weekend passion for hiking.
          </Typography>
          <Typography sx={{ color: '#5a6175', fontSize: '1rem', lineHeight: 1.8 }}>
            Labaka was created by 369innovation to unite both worlds. We empower people to seamlessly navigate between Casual and Formal modes, discovering nearby individuals, events, and opportunities in real time.
          </Typography>
        </Card>

        {/* Quote Banner */}
        <Box
          sx={{
            background: `linear-gradient(135deg, #3a1f8e 0%, ${BRAND_DARK} 40%, ${BRAND} 100%)`,
            borderRadius: '24px',
            p: { xs: 3.5, md: 4.5 },
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
            mb: 4,
            boxShadow: '0 12px 36px rgba(109,83,244,0.25)',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              fontWeight: 600,
              lineHeight: 1.6,
              color: '#fff',
              position: 'relative',
              zIndex: 1,
            }}
          >
            “Technology should bring us closer to real people in our real surroundings, not keep us scrolling infinitely on screens.”
          </Typography>
          <Typography
            sx={{
              display: 'block',
              mt: 2,
              fontSize: '0.88rem',
              color: 'rgba(255,255,255,0.8)',
              fontWeight: 500,
              letterSpacing: '0.04em',
              position: 'relative',
              zIndex: 1,
            }}
          >
            - Labaka Vision Statement
          </Typography>
        </Box>

        {/* Dual Modes Grid */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: '#0d1b2a',
            mb: 3,
            fontSize: { xs: '1.4rem', md: '1.75rem' },
          }}
        >
          Two Modes, Infinite Possibilities
        </Typography>
        <Grid container spacing={3} sx={{ mb: 5 }}>
          <Grid item xs={12} sm={6}>
            <Card
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: '20px',
                border: '1px solid rgba(109, 83, 244, 0.15)',
                backgroundColor: '#F7F5FF',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)', backgroundColor: '#fff' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: BRAND }} />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Casual Mode
                </Typography>
              </Box>
              <Typography sx={{ color: '#5a6175', fontSize: '0.92rem', lineHeight: 1.6, mb: 2 }}>
                Designed for making friends, discovering local events, finding activity partners, and exploring your city together.
              </Typography>
              <Chip label="Social & Community" sx={{ backgroundColor: 'rgba(109,83,244,0.1)', color: BRAND, fontWeight: 700 }} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: '20px',
                border: '1px solid rgba(26, 240, 209, 0.3)',
                backgroundColor: '#F7F5FF',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)', backgroundColor: '#fff' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#059669' }} />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Formal Mode
                </Typography>
              </Box>
              <Typography sx={{ color: '#5a6175', fontSize: '0.92rem', lineHeight: 1.6, mb: 2 }}>
                Built for professional networking, freelance opportunities, business collaborations, and career growth.
              </Typography>
              <Chip label="Professional & Work" sx={{ backgroundColor: 'rgba(26,240,209,0.15)', color: '#059669', fontWeight: 700 }} />
            </Card>
          </Grid>
        </Grid>

        {/* Core Values Section */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: '#0d1b2a',
            mb: 3,
            fontSize: { xs: '1.4rem', md: '1.75rem' },
          }}
        >
          Our Core Principles
        </Typography>
        <Box sx={{ borderRadius: '20px', border: '1px solid rgba(109, 83, 244, 0.12)', overflow: 'hidden', mb: 5 }}>
          {coreValues.map((val, idx) => (
            <Box
              key={val.num}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
                p: { xs: 2.5, sm: 3 },
                backgroundColor: '#fff',
                borderBottom: idx === coreValues.length - 1 ? 'none' : '1px solid rgba(109,83,244,0.08)',
                '&:hover': { backgroundColor: '#F7F5FF' },
                transition: 'background 0.2s ease',
              }}
            >
              <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, color: BRAND, minWidth: 32 }}>
                {val.num}
              </Typography>
              <Box>
                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 700, mb: 0.5, color: '#0d1b2a' }}>
                  {val.title}
                </Typography>
                <Typography sx={{ fontSize: '0.9rem', color: '#5a6175', lineHeight: 1.6 }}>
                  {val.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Powered By Banner */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(109,83,244,0.06), rgba(139,115,255,0.12))',
            border: '1px solid rgba(109,83,244,0.18)',
            borderRadius: '20px',
            p: { xs: 3, md: 4 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
            mb: 6,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#0d1b2a', mb: 0.5 }}>
              Powered by 369innovation
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: '#5a6175' }}>
              Building next-generation digital platforms for modern human connection.
            </Typography>
          </Box>
          <DownloadAppButton onClick={openDownloadModal} />
        </Box>

        {/* Ready To Connect CTA */}
        <Box
          sx={{
            borderRadius: '28px',
            background: `linear-gradient(135deg, #3a1f8e 0%, ${BRAND_DARK} 50%, ${BRAND} 100%)`,
            p: { xs: 4, md: 6 },
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(58, 20, 142, 0.3)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              mb: 2,
            }}
          >
            Ready to Connect with Labaka?
          </Typography>
          <Typography
            sx={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 520,
              mx: 'auto',
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Join thousands of active users meeting people, attending events, and expanding their network today.
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
