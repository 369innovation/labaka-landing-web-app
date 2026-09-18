import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button
} from '@mui/material';
import { RocketLaunch as RocketLaunchIcon } from '@mui/icons-material';
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

        {/* ─── OUR TEAM SECTION ──────────────────────────────────────────────── */}
        <Box sx={{ mt: 8, mb: 6, textAlign: 'center' }}>
          {/* Pill Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              px: 0.8,
              py: 0.2,
              borderRadius: '5px',
              backgroundColor: 'rgba(109, 83, 244, 0.08)',
              border: '1px solid rgba(37, 99, 235, 0.15)',
              color: BRAND,
              fontSize: '0.94rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            {/* Team SVG Icon from public directory */}
            <Box
              component="img"
              src="/team-icon.svg"
              alt="Our Team Icon"
              sx={{
                width: 40,
                height: 32,
                objectFit: 'contain',
              }}
            />
            Our Team
          </Box>

          {/* Main Heading */}
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', mb: 1 }}>
            The Team Behind <Box component="span" sx={{ color: BRAND }}>LaBaKa</Box>
          </Typography>

          <Typography sx={{ color: '#64748B', maxWidth: '600px', mx: 'auto', mb: 5, fontSize: '0.95rem' }}>
            A passionate team working together to build real-time connections that bring people and opportunities closer - nearby or worldwide.
          </Typography>

          {/* Team Grid */}
          <Grid container spacing={3} justifyContent="center">
            {[
              { name: 'Priyadhrishini', role: 'Project Manager', img: '/team/Priya.svg' },
              { name: 'Vivek Vishwakarma', role: 'App Developer', img: '/team/Vivek.svg' },
              { name: 'Shivam Patel', role: 'Software Developer', img: '/team/Shivam.svg' },
              { name: 'Sakshi Jain', role: 'Co-Founder & UX Designer', img: '/team/Sakshi.svg' },
              { name: 'Parthiban', role: 'Tech Head', img: '/team/Parthiban.svg' },
              { name: 'Palaniraj', role: 'Founder', img: '/team/Palaniraj.svg' },
              { name: 'Keshav Bhardwaj', role: 'Software Developer', img: '/team/Keshav.svg' },
            ].map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: '20px',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%',
                    transition: 'transform 0.2s ease',
                    '&:hover': { transform: 'translateY(-4px)' },
                  }}
                >
                  {/* SVG / Image Container */}
                  <Box
                    sx={{
                      width: 90,
                      height: 90,
                      borderRadius: '50%',
                      background: 'linear-gradient(180deg, #E3DFF8 0%, #CABFF6 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      mb: 2,
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={member.img}
                      alt={member.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  <Typography sx={{ fontWeight: 800, fontSize: '1rem', color: '#0F172A' }}>
                    {member.name}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: BRAND, fontWeight: 600, mt: 0.5 }}>
                    {member.role}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Bottom Mission Banner */}
          <Box
            sx={{
              mt: 5,
              p: 1.5,
              pr: 4,
              pl: 2,
              borderRadius: '50px',
              backgroundColor: 'rgba(109, 83, 244, 0.05)',
              border: '1px solid rgba(37, 99, 235, 0.15)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2.5,
              maxWidth: '100%',
            }}
          >
            {/* Circular Icon Container */}
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              <Box
                component="img"
                src="/team-icon.svg"
                alt="Team Mission Icon"
                sx={{
                  width: 56,
                  height: 48,
                  objectFit: 'contain',
                }}
              />
            </Box>

            {/* Stacked Text */}
            <Box sx={{ textAlign: 'left' }}>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: '#383737', lineHeight: 1.3 }}>
                Different strengths. One mission.
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: BRAND, lineHeight: 1.3 }}>
                Real connections. Real impact.
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Powered By Banner */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
            p: { xs: 3, md: 4 },
            my: 6,
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(109, 83, 244, 0.03) 0%, rgba(109, 83, 244, 0.08) 100%)',
            border: '1px solid rgba(109, 83, 244, 0.15)',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: '#0F172A',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                mb: 0.5,
              }}
            >
              Powered by 369innovation
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#64748B',
                fontSize: '0.9rem',
                lineHeight: 1.5,
              }}
            >
              Building next-generation digital platforms for global connections.
            </Typography>
          </Box>
          <Button
            component="a"
            href="https://www.369innovation.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<RocketLaunchIcon sx={{ fontSize: '1.1rem' }} />}
            sx={{
              backgroundColor: BRAND,
              color: '#fff',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '30px',
              px: 3.5,
              py: 1.2,
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 14px rgba(109, 83, 244, 0.25)',
              '&:hover': {
                backgroundColor: BRAND_DARK,
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(109, 83, 244, 0.35)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            369innovation
          </Button>
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
