import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Modal,
  Fade,
} from '@mui/material';
import {
  Menu as HamburgerMenuIcon,
  Close as CloseMenuIcon,
  Close as CloseIcon,
  Apple as AppleIcon,
  Check as CheckIcon,
  WorkspacePremium as CrownIcon,
  CardGiftcard as RibbonIcon,
  WorkOutline as BriefcaseIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

// ─── Brand Colors ───────────────────────────────────────────────────────
const BRAND = '#6D53F4';
const BRAND_LIGHT = '#8B73FF';
const BRAND_DARK = '#5A3FD6';

const NAV_LINKS = [
  { label: 'POLICY & FAQ', href: '/Labaka/PrivacyPolicy/', isScroll: false },
  { label: 'UPGRADE', href: '/upgrade', isScroll: false, active: true },
  { label: 'ABOUT US', href: '/Labaka/AboutUs/', isScroll: false },
  { label: 'CONTACT US', href: '/contact', isScroll: false },
];

// ─── Google Play SVG Icon ───────────────────────────────────────────────
const PlayStoreIcon = ({ sx = {} }) => (
  <Box
    component="svg"
    viewBox="0 0 24 24"
    sx={{ width: 20, height: 20, fill: 'currentColor', ...sx }}
  >
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </Box>
);

// ─── Download Modal Component ───────────────────────────────────────────
function DownloadAppModal({ open, onClose }) {
  const playStoreUrl = 'https://play.google.com/store';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(playStoreUrl)}&bgcolor=ffffff&color=000000&margin=8`;

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'relative',
            width: { xs: '92%', sm: 520 },
            maxWidth: 520,
            mx: 'auto',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(109, 83, 244, 0.25)',
            background: '#ffffff',
            p: { xs: 3, sm: 4 },
            textAlign: 'center',
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: '#64748b',
              backgroundColor: '#f1f5f9',
              '&:hover': { backgroundColor: '#e2e8f0' },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', mb: 1 }}>
            Download Labaka App
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', color: '#64748b', mb: 3 }}>
            Scan the QR code or click below to get our app directly on your mobile device.
          </Typography>

          <Box
            sx={{
              display: 'inline-block',
              p: 2,
              borderRadius: '20px',
              backgroundColor: '#f8fafc',
              border: '2px dashed #cbd5e1',
              mb: 3,
            }}
          >
            <Box
              component="img"
              src={qrCodeUrl}
              alt="Scan QR Code"
              sx={{ width: 180, height: 180, borderRadius: '12px', display: 'block' }}
            />
          </Box>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                href="https://apple.com/app-store/"
                target="_blank"
                startIcon={<AppleIcon />}
                sx={{
                  py: 1.2,
                  borderRadius: '12px',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#1e293b' },
                }}
              >
                App Store
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                href={playStoreUrl}
                target="_blank"
                startIcon={<PlayStoreIcon />}
                sx={{
                  py: 1.2,
                  borderRadius: '12px',
                  backgroundColor: BRAND,
                  color: '#ffffff',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': { backgroundColor: BRAND_DARK },
                }}
              >
                Google Play
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}

// ─── Circle Badge Component for Comparison Table ───────────────────────
const CircleBadge = ({ variant, text }) => {
  if (variant === 'free') {
    return (
      <Box
        sx={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          border: '1.5px solid #A0AEC0',
          color: '#718096',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.82rem',
          fontWeight: 700,
          mx: 'auto',
        }}
      >
        {text}
      </Box>
    );
  }
  if (variant === 'plus') {
    return (
      <Box
        sx={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          backgroundColor: '#718096',
          color: '#FFFFFF',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.82rem',
          fontWeight: 700,
          mx: 'auto',
        }}
      >
        {text}
      </Box>
    );
  }
  return (
    <Box
      sx={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        backgroundColor: BRAND,
        color: '#FFFFFF',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.82rem',
        fontWeight: 700,
        boxShadow: '0 4px 10px rgba(109, 83, 244, 0.3)',
        mx: 'auto',
      }}
    >
      {text}
    </Box>
  );
};

// ─── Money Bag SVG for Referral Banner ────────────────────────────────
const MoneyBagSVG = () => (
  <Box
    component="svg"
    viewBox="0 0 140 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{ width: { xs: 90, sm: 120 }, height: { xs: 90, sm: 120 }, flexShrink: 0 }}
  >
    <defs>
      <linearGradient id="bagGrad" x1="20" y1="20" x2="120" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6D53F4" />
        <stop offset="1" stopColor="#FF8A7A" />
      </linearGradient>
    </defs>
    <path
      d="M45 42C45 42 35 48 30 55C22 66 18 80 20 95C23 112 36 122 70 122C104 122 117 112 120 95C122 80 118 66 110 55C105 48 95 42 95 42L98 32C98 32 105 28 100 24C95 20 85 28 85 28C85 28 78 22 70 22C62 22 55 28 55 28C55 28 45 20 40 24C35 28 42 32 42 32L45 42Z"
      stroke="url(#bagGrad)"
      strokeWidth="2.5"
      fill="#F5F2FF"
      strokeLinejoin="round"
    />
    <path d="M42 42C55 46 85 46 98 42" stroke="url(#bagGrad)" strokeWidth="2.5" />
    <g>
      <circle cx="88" cy="85" r="22" fill="#E6C200" stroke="#B39700" strokeWidth="1.5" />
      <circle cx="88" cy="85" r="18" fill="#F5D000" stroke="#CCAC00" strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="68" cy="88" r="22" fill="#ECD014" stroke="#C2A800" strokeWidth="1.5" />
      <circle cx="68" cy="88" r="18" fill="#F8DF25" stroke="#D1B700" strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="54" cy="80" r="24" fill="#FFD700" stroke="#DAA520" strokeWidth="1.5" />
      <circle cx="54" cy="80" r="20" fill="#FFE44D" stroke="#DAA520" strokeWidth="1" strokeDasharray="3 2" />
      <path
        d="M47 79C45.5 77.5 45.5 74.5 47 73C48.5 71.5 51.5 71.5 53 73L55.5 75.5M52.5 86.5C51 88 48 88 46.5 86.5C45 85 45 82 46.5 80.5L49 78M48.5 76L55.5 83"
        stroke="#997000"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  </Box>
);

// ─── Main Upgrade Page Component ────────────────────────────────────────
export default function Upgrade() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const featureRows = [
    {
      name: 'See Who Liked You',
      desc: 'Someone shared interest,\nNo - blurred profile in PRO',
      free: <CircleBadge variant="free" text="1" />,
      plus: <CircleBadge variant="plus" text="5" />,
      pro: <CircleBadge variant="pro" text="✓" />,
    },
    {
      name: 'Direct Message',
      desc: 'Message with connected users',
      free: <CircleBadge variant="free" text="5" />,
      plus: <CircleBadge variant="plus" text="✓" />,
      pro: <CircleBadge variant="pro" text="✓" />,
    },
    {
      name: 'Likes',
      desc: 'Share your interest',
      free: <CircleBadge variant="free" text="15" />,
      plus: <CircleBadge variant="plus" text="30" />,
      pro: <CircleBadge variant="pro" text="✓" />,
    },
    {
      name: 'Connect Requests',
      desc: 'Establish trust with a connect requests',
      free: <CircleBadge variant="free" text="✕" />,
      plus: <CircleBadge variant="plus" text="50" />,
      pro: <CircleBadge variant="pro" text="✓" />,
    },
    {
      name: 'QR code profile share',
      desc: 'Quick share your profile',
      free: <CircleBadge variant="plus" text="✓" />,
      plus: <CircleBadge variant="plus" text="✓" />,
      pro: <CircleBadge variant="pro" text="✓" />,
    },
    {
      name: 'Advanced Filters',
      desc: 'Find the right people and events',
      free: <CircleBadge variant="free" text="✕" />,
      plus: <CircleBadge variant="plus" text="✓" />,
      pro: <CircleBadge variant="pro" text="✓" />,
    },
    {
      name: 'Super Likes',
      desc: 'Show extra interest',
      free: <CircleBadge variant="free" text="✕" />,
      plus: <CircleBadge variant="plus" text="5" />,
      pro: <CircleBadge variant="pro" text="10" />,
    },
    {
      name: 'Rewinds',
      desc: 'Go back to skipped',
      free: <CircleBadge variant="free" text="✕" />,
      plus: <CircleBadge variant="plus" text="25" />,
      pro: <CircleBadge variant="pro" text="✓" />,
    },
    {
      name: 'Profile Boost',
      desc: 'Highlight your profile',
      free: <CircleBadge variant="free" text="✕" />,
      plus: <CircleBadge variant="plus" text="1" />,
      pro: <CircleBadge variant="pro" text="3" />,
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F8F9FE',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ─── NAVBAR ────────────────────────────────────────────────────────── */}
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1100,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(109, 83, 244, 0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: { xs: 68, md: 80 },
            }}
          >
            {/* Logo */}
            <Box
              component="a"
              href="/"
              sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}
            >
              <Box
                component="img"
                src="/LBK FINAL LOGO PNG (2) 3.svg"
                alt="Labaka Logo"
                sx={{ height: { xs: 32, md: 40 }, width: 'auto' }}
              />
              <Typography
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.4rem' },
                  fontWeight: 900,
                  letterSpacing: '1px',
                  color: '#1E1B4B',
                }}
              >
                LABAKA
              </Typography>
            </Box>

            {/* Desktop Nav Links */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 4,
              }}
            >
              {NAV_LINKS.map((link) => (
                <Typography
                  key={link.label}
                  component="a"
                  href={link.href}
                  sx={{
                    fontSize: '0.85rem',
                    fontWeight: link.active ? 800 : 700,
                    letterSpacing: '0.5px',
                    color: link.active ? BRAND : '#475569',
                    textDecoration: 'none',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                    '&:hover': { color: BRAND },
                    ...(link.active && {
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        right: 0,
                        height: 2,
                        borderRadius: 1,
                        backgroundColor: BRAND,
                      },
                    }),
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>

            {/* Right Action */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Button
                variant="contained"
                onClick={() => setDownloadOpen(true)}
                sx={{
                  backgroundColor: BRAND,
                  color: '#ffffff',
                  borderRadius: '30px',
                  px: { xs: 2.5, md: 3 },
                  py: 1,
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  boxShadow: '0 8px 24px rgba(109, 83, 244, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover': {
                    backgroundColor: BRAND_DARK,
                    boxShadow: '0 12px 28px rgba(109, 83, 244, 0.4)',
                  },
                }}
              >
                Download App
                <AppleIcon sx={{ fontSize: 18 }} />
                <PlayStoreIcon sx={{ width: 16, height: 16 }} />
              </Button>

              <IconButton
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' }, color: '#1E1B4B' }}
              >
                <HamburgerMenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { width: 280, p: 2 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography sx={{ fontWeight: 800, color: BRAND }}>MENU</Typography>
          <IconButton onClick={handleDrawerToggle}>
            <CloseMenuIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_LINKS.map((link) => (
            <ListItem
              button
              key={link.label}
              component="a"
              href={link.href}
              onClick={handleDrawerToggle}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  fontWeight: link.active ? 800 : 600,
                  color: link.active ? BRAND : '#334155',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* ─── HERO SECTION ─────────────────────────────────────────────────── */}
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 7 }, pb: { xs: 4, md: 6 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{
                  display: 'inline-block',
                  px: 2,
                  py: 0.6,
                  borderRadius: '20px',
                  backgroundColor: '#EAE5FF',
                  color: BRAND,
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  mb: 2,
                }}
              >
                UPGRADE
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3rem', md: '3.5rem' },
                  fontWeight: 900,
                  color: '#0F172A',
                  lineHeight: 1.15,
                  mb: 2,
                }}
              >
                Find Better{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(90deg, #6D53F4 0%, #FF8A7A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Connections
                </Box>{' '}
                Faster
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  color: '#475569',
                  maxWidth: 480,
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Choose how you want to grow your network and unlock premium features.
              </Typography>

              {/* Social Proof */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: 'flex' }}>
                  <Box
                    component="img"
                    src="/maleAvatar.svg"
                    alt="Member"
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      border: '2px solid #fff',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  />
                  <Box
                    component="img"
                    src="/FemaleAvatar.svg"
                    alt="Member"
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      border: '2px solid #fff',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      ml: -1.5,
                    }}
                  />
                  <Box
                    component="img"
                    src="/maleAvatar.svg"
                    alt="Member"
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      border: '2px solid #fff',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      ml: -1.5,
                    }}
                  />
                </Box>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: '#334155' }}>
                  28+ Founding members already in
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right 3D Orb & Star Graphic */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src="/UpgradeStar.svg"
                alt="Upgrade Star Orb"
                sx={{
                  width: '100%',
                  maxWidth: 520,
                  height: 'auto',
                  filter: 'drop-shadow(0 20px 40px rgba(109, 83, 244, 0.2))',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ─── CHOOSE YOUR MEMBERSHIP (PRICING CARDS SECTION) ─────────────────── */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        {/* Top "Pro" Pill Badge */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              p: '3px',
              border: `1.5px solid ${BRAND}`,
              borderRadius: '30px',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 14px rgba(109, 83, 244, 0.12)',
            }}
          >
            <Box
              sx={{
                backgroundColor: BRAND,
                color: '#ffffff',
                px: 5,
                py: 0.8,
                borderRadius: '24px',
                fontWeight: 700,
                fontSize: '1.05rem',
                letterSpacing: '0.5px',
              }}
            >
              Pro
            </Box>
          </Box>
        </Box>

        {/* 3 Membership Cards */}
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          {/* Card 1: Starter */}
          <Grid item xs={12} sm={4} md={3.8}>
            <Box
              sx={{
                height: '100%',
                backgroundColor: '#ffffff',
                borderRadius: '36px',
                p: { xs: 3.5, sm: 4 },
                textAlign: 'center',
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 35px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.07)',
                },
              }}
            >
              <BriefcaseIcon sx={{ fontSize: 40, color: '#94A3B8', mb: 3 }} />
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', mb: 1 }}>
                BEST FOR TRY
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                PRO - 7 DAYS
              </Typography>
            </Box>
          </Grid>

          {/* Card 2: Pro (Featured Card with FOUNDERS - FREE) */}
          <Grid item xs={12} sm={4} md={3.8}>
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                backgroundColor: 'rgba(109, 83, 244, 0.02)',
                borderRadius: '36px',
                p: { xs: 3.5, sm: 4 },
                textAlign: 'center',
                border: `2px solid ${BRAND}`,
                boxShadow: '0 15px 40px rgba(109, 83, 244, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 48px rgba(109, 83, 244, 0.22)',
                },
              }}
            >
              {/* Top Floating Badge */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -14,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: BRAND,
                  color: '#ffffff',
                  px: 2.5,
                  py: 0.6,
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 12px rgba(109, 83, 244, 0.4)',
                }}
              >
                FOUNDERS - FREE
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', pt: 1 }}>
                <RibbonIcon sx={{ fontSize: 44, color: BRAND, mb: 2.5 }} />

                <Typography sx={{ fontSize: '2.8rem', fontWeight: 900, color: '#0F172A', lineHeight: 1 }}>
                  ₹0
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#EF4444',
                    textDecoration: 'line-through',
                    mt: 0.5,
                  }}
                >
                  ₹1199
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '1px', mt: 1, mb: 3 }}>
                  FOR 3 MONTHS
                </Typography>
              </Box>

              {/* Bottom Purple Checkmark Circle */}
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  backgroundColor: BRAND,
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(109, 83, 244, 0.35)',
                }}
              >
                <CheckIcon sx={{ fontSize: 18 }} />
              </Box>
            </Box>
          </Grid>

          {/* Card 3: Pro Yearly */}
          <Grid item xs={12} sm={4} md={3.8}>
            <Box
              sx={{
                height: '100%',
                backgroundColor: '#ffffff',
                borderRadius: '36px',
                p: { xs: 3.5, sm: 4 },
                textAlign: 'center',
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 35px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.07)',
                },
              }}
            >
              <CrownIcon sx={{ fontSize: 40, color: '#94A3B8', mb: 3 }} />
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', mb: 1 }}>
                BEST VALUE
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                PRO - YEARLY
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ─── FEATURE COMPARISON TABLE SECTION ───────────────────────────────── */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Box
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            p: { xs: 2, sm: 4 },
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            border: '1px solid #E2E8F0',
            overflowX: 'auto',
          }}
        >
          <Box sx={{ minWidth: 650 }}>
            <Box
              component="table"
              sx={{
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: 0,
              }}
            >
              <Box component="thead">
                <Box component="tr">
                  <Box
                    component="th"
                    sx={{
                      textAlign: 'left',
                      pl: 1,
                      py: 2,
                      pr: 2,
                      borderBottom: '1px solid #F1F5F9',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: '#94A3B8',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      width: '44%',
                    }}
                  >
                    FEATURES
                  </Box>
                  <Box
                    component="th"
                    sx={{
                      textAlign: 'center',
                      py: 2,
                      px: 2,
                      borderBottom: '1px solid #F1F5F9',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: '#94A3B8',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      width: '18%',
                    }}
                  >
                    FREE
                  </Box>
                  <Box
                    component="th"
                    sx={{
                      textAlign: 'center',
                      py: 2,
                      px: 2,
                      borderBottom: '1px solid #F1F5F9',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: '#718096',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      width: '18%',
                    }}
                  >
                    PLUS
                    <Typography component="div" sx={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 'normal' }}>
                      Per Day
                    </Typography>
                  </Box>
                  {/* PRO Header Cell */}
                  <Box
                    component="th"
                    sx={{
                      textAlign: 'center',
                      py: 2,
                      px: 2,
                      width: '20%',
                      backgroundColor: 'rgba(109, 83, 244, 0.04)',
                      borderTop: `2px solid ${BRAND}`,
                      borderLeft: `2px solid ${BRAND}`,
                      borderRight: `2px solid ${BRAND}`,
                      borderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px',
                    }}
                  >
                    <Typography sx={{ fontSize: '0.95rem', fontWeight: 900, color: BRAND }}>
                      PRO
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: BRAND_LIGHT, fontWeight: 600 }}>
                      Per Day
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box component="tbody">
                {featureRows.map((row, index) => {
                  const isLast = index === featureRows.length - 1;
                  return (
                    <Box component="tr" key={row.name}>
                      {/* Name + Description */}
                      <Box
                        component="td"
                        sx={{
                          py: 2,
                          pl: 1,
                          pr: 2,
                          borderBottom: !isLast ? '1px solid #F8FAFC' : 'none',
                        }}
                      >
                        <Typography sx={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A', mb: 0.3 }}>
                          {row.name}
                        </Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.4, whiteSpace: 'pre-line' }}>
                          {row.desc}
                        </Typography>
                      </Box>

                      {/* FREE Column */}
                      <Box
                        component="td"
                        sx={{
                          py: 2,
                          px: 2,
                          textAlign: 'center',
                          borderBottom: !isLast ? '1px solid #F8FAFC' : 'none',
                        }}
                      >
                        {row.free}
                      </Box>

                      {/* PLUS Column */}
                      <Box
                        component="td"
                        sx={{
                          py: 2,
                          px: 2,
                          textAlign: 'center',
                          borderBottom: !isLast ? '1px solid #F8FAFC' : 'none',
                        }}
                      >
                        {row.plus}
                      </Box>

                      {/* PRO Column */}
                      <Box
                        component="td"
                        sx={{
                          py: 2,
                          px: 2,
                          textAlign: 'center',
                          backgroundColor: 'rgba(109, 83, 244, 0.04)',
                          borderLeft: `2px solid ${BRAND}`,
                          borderRight: `2px solid ${BRAND}`,
                          ...(isLast && {
                            borderBottom: `2px solid ${BRAND}`,
                            borderBottomLeftRadius: '20px',
                            borderBottomRightRadius: '20px',
                          }),
                        }}
                      >
                        {row.pro}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* ─── INVITE FRIENDS REWARD CARD ─────────────────────────────────────── */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          sx={{
            borderRadius: '28px',
            p: { xs: 3.5, sm: 4.5 },
            border: `1.5px solid ${BRAND}`,
            backgroundColor: 'rgba(109, 83, 244, 0.03)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3.5 }}>
            <MoneyBagSVG />
            <Box>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', mb: 0.5 }}>
                Invite Friends & Earn Rewards
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5 }}>
                Earn{' '}
                <Box component="span" sx={{ color: BRAND, fontWeight: 800 }}>
                  160 LBK
                </Box>{' '}
                Coins in your wallet for every successful referral.
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: BRAND,
              color: '#ffffff',
              borderRadius: '30px',
              px: { xs: 4, sm: 6 },
              py: 1.4,
              fontSize: '1rem',
              fontWeight: 800,
              textTransform: 'none',
              boxShadow: '0 8px 24px rgba(109, 83, 244, 0.3)',
              whiteSpace: 'nowrap',
              width: { xs: '100%', md: 'auto' },
              '&:hover': { backgroundColor: BRAND_DARK },
            }}
          >
            Refer Friends
          </Button>
        </Box>
      </Container>

      {/* ─── FOOTER ────────────────────────────────────────────────────────── */}
      <Box
        component="footer"
        sx={{
          backgroundColor: '#0F172A',
          color: '#ffffff',
          pt: 8,
          pb: 6,
          mt: 'auto',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {/* Logo & Tagline */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box
                  component="img"
                  src="/LBK FINAL LOGO PNG (2) 3.svg"
                  alt="Labaka Logo"
                  sx={{ height: 36, filter: 'brightness(1.2)' }}
                />
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '1px' }}>
                  LABAKA
                </Typography>
              </Box>
              <Typography sx={{ color: '#94A3B8', fontSize: '0.9rem', maxWidth: 300, lineHeight: 1.6, mb: 2 }}>
                Connecting people, events, and opportunities in real time. Discover what's happening around you.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton size="small" sx={{ color: '#94A3B8', '&:hover': { color: '#fff' } }}>
                  <InstagramIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ color: '#94A3B8', '&:hover': { color: '#fff' } }}>
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ color: '#94A3B8', '&:hover': { color: '#fff' } }}>
                  <FacebookIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ color: '#94A3B8', '&:hover': { color: '#fff' } }}>
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={6} sm={3} md={3}>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 800, mb: 2 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography component="a" href="/Labaka/home" sx={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}>
                  Home
                </Typography>
                <Typography component="a" href="/Labaka/PrivacyPolicy/" sx={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}>
                  Policy &amp; FAQ
                </Typography>
                <Typography component="a" href="/Labaka/Upgrade/" sx={{ color: '#fff', fontWeight: 700, textDecoration: 'none', fontSize: '0.875rem' }}>
                  Upgrade
                </Typography>
                <Typography component="a" href="/Labaka/AboutUs/" sx={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}>
                  About Us
                </Typography>
                <Typography component="a" href="/Labaka/ContactUs/" sx={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}>
                  Contact Us
                </Typography>
              </Box>
            </Grid>

            {/* Legal */}
            <Grid item xs={6} sm={3} md={3}>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 800, mb: 2 }}>
                Legal
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography component="a" href="/Labaka/PrivacyPolicy/" sx={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}>
                  Privacy Policy
                </Typography>
                <Typography component="a" href="/Labaka/terms-and-conditions/" sx={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}>
                  Terms &amp; Conditions
                </Typography>
                <Typography component="a" href="/Labaka/Faqs/" sx={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}>
                  FAQs
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              pt: 3,
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
            }}
          >
            <Typography sx={{ color: '#64748B', fontSize: '0.8rem' }}>
              © {new Date().getFullYear()} Labaka. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Download Modal */}
      <DownloadAppModal open={downloadOpen} onClose={() => setDownloadOpen(false)} />
    </Box>
  );
}
