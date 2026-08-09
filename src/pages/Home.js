import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Modal,
  Fade,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  People as PeopleIcon,
  LocationCity as CityIcon,
  Handshake as HandshakeIcon,
  Event as EventIcon,
  Explore as ExploreIcon,
  Groups as GroupsIcon,
  Work as WorkIcon,
  Security as SecurityIcon,
  Notifications as NotificationsIcon,
  Speed as SpeedIcon,
  FormatQuote as QuoteIcon,
  Apple as AppleIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  CheckCircle as CheckCircleIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  Star as StarIcon,
} from '@mui/icons-material';

// ─── Brand Colors ───────────────────────────────────────────────────────
const BRAND = '#6D53F4';
const BRAND_LIGHT = '#8B73FF';
const BRAND_DARK = '#5A3FD6';

// ─── Intersection Observer Hook ─────────────────────────────────────────
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView];
}

// ─── Animated Counter Hook ──────────────────────────────────────────────
function useCounter(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const numericEnd = parseInt(end, 10);
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * numericEnd));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

// ─── DATA ───────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'POLICY & FAQ', href: '/Labaka/PrivacyPolicy/', isScroll: false },
  { label: 'UPGRADE', href: '/upgrade', isScroll: false },
  { label: 'ABOUT US', href: '/Labaka/AboutUs/', isScroll: false },
  { label: 'CONTACT US', href: '/contact', isScroll: false },
];

const STATS = [
  { icon: <PeopleIcon />, value: 5, suffix: 'K+', label: 'Active Users' },
  { icon: <CityIcon />, value: 2, suffix: '+', label: 'Cities' },
  { icon: <HandshakeIcon />, value: 1, suffix: 'K+', label: 'Connections Made' },
  { icon: <EventIcon />, value: 4, suffix: '+', label: 'Events Hosted' },
];

const FEATURES = [
  {
    icon: <ExploreIcon sx={{ fontSize: 40 }} />,
    title: 'Real-time Discovery',
    description: 'Find people, events, and opportunities happening around you in real time.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    title: 'Events & Community',
    description: 'Join events, create communities, and connect with like-minded people.',
  },
  {
    icon: <WorkIcon sx={{ fontSize: 40 }} />,
    title: 'Opportunities',
    description: 'Discover career opportunities, collaborations, and partnerships near you.',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Secure & Private',
    description: 'Your data is protected with enterprise-grade security and privacy controls.',
  },
  {
    icon: <NotificationsIcon sx={{ fontSize: 40 }} />,
    title: 'Smart Notifications',
    description: 'Get personalized alerts for events, connections, and opportunities that matter.',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: 'Lightning Fast',
    description: 'Enjoy a blazing fast experience with real-time updates and instant connections.',
  },
];

// ─── Google Play SVG Icon ───────────────────────────────────────────────
const PlayStoreIcon = ({ sx = {} }) => (
  <Box
    component="svg"
    viewBox="0 0 24 24"
    sx={{ width: 22, height: 22, fill: 'currentColor', ...sx }}
  >
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </Box>
);

// ─── COMPONENT: Download App Modal ──────────────────────────────────────
function DownloadAppModal({ open, onClose }) {
  // Google Play store link for QR code generation
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
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(109, 83, 244, 0.08)',
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'relative',
            width: { xs: '92%', sm: 520, md: 580 },
            maxWidth: 580,
            mx: 'auto',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(109, 83, 244, 0.25), 0 8px 32px rgba(0,0,0,0.1)',
            outline: 'none',
          }}
        >
          {/* Glass Background Layer */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/GlassBG.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 0,
            }}
          />
          {/* White overlay for readability */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(40px)',
              zIndex: 1,
            }}
          />

          {/* Content */}
          <Box sx={{ position: 'relative', zIndex: 2, p: { xs: 3, sm: 4, md: 5 } }}>
            {/* Close button */}
            <IconButton
              onClick={onClose}
              sx={{
                position: 'absolute',
                top: { xs: 8, sm: 16 },
                right: { xs: 8, sm: 16 },
                width: 36,
                height: 36,
                backgroundColor: 'rgba(0,0,0,0.04)',
                '&:hover': {
                  backgroundColor: 'rgba(109, 83, 244, 0.1)',
                  transform: 'rotate(90deg)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <CloseIcon sx={{ fontSize: 20, color: '#555' }} />
            </IconButton>

            {/* Title */}
            <Typography
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                fontWeight: 800,
                color: '#1a1a2e',
                mb: 0.5,
                letterSpacing: '-0.02em',
              }}
            >
              DOWNLOAD LABAKA
            </Typography>
            <Typography
              sx={{
                fontSize: '0.9rem',
                color: 'text.secondary',
                mb: 3,
              }}
            >
              Available on
            </Typography>

            {/* QR Codes Row */}
            <Grid container spacing={3} alignItems="stretch">
              {/* Google Play QR */}
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'text.secondary',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Scan and Download
                  </Typography>

                  {/* QR Code Frame */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: 180,
                      height: 180,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Corner decorations */}
                    {/* Top-left */}
                    <Box sx={{ position: 'absolute', top: 0, left: 0, width: 28, height: 28, borderTop: `3px solid ${BRAND}`, borderLeft: `3px solid ${BRAND}`, borderRadius: '6px 0 0 0' }} />
                    {/* Top-right */}
                    <Box sx={{ position: 'absolute', top: 0, right: 0, width: 28, height: 28, borderTop: '3px solid #F5A623', borderRight: '3px solid #F5A623', borderRadius: '0 6px 0 0' }} />
                    {/* Bottom-left */}
                    <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: 28, height: 28, borderBottom: '3px solid #E056FD', borderLeft: '3px solid #E056FD', borderRadius: '0 0 0 6px' }} />
                    {/* Bottom-right */}
                    <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: 28, height: 28, borderBottom: '3px solid #E056FD', borderRight: '3px solid #E056FD', borderRadius: '0 0 6px 0' }} />

                    <Box
                      component="img"
                      src={qrCodeUrl}
                      alt="Scan to download on Google Play"
                      sx={{
                        width: 150,
                        height: 150,
                        borderRadius: '4px',
                      }}
                    />
                  </Box>

                  {/* Google Play Badge */}
                  <Box
                    component="a"
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      backgroundColor: '#000',
                      color: '#fff',
                      borderRadius: '8px',
                      px: 2,
                      py: 0.8,
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      '&:hover': { opacity: 0.85, transform: 'translateY(-1px)' },
                    }}
                  >
                    <Box component="img" src="/GooglePlayLogo.svg" alt="Google Play" sx={{ height: 20, filter: 'brightness(0) invert(1)' }} />
                    <Box>
                      <Typography sx={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>GET IT ON</Typography>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, lineHeight: 1.2 }}>Google Play</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              {/* App Store — Coming Soon */}
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'transparent',
                      letterSpacing: '0.04em',
                    }}
                  >
                    &nbsp;
                  </Typography>

                  {/* Coming Soon Frame */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: 180,
                      height: 180,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Corner decorations */}
                    <Box sx={{ position: 'absolute', top: 0, left: 0, width: 28, height: 28, borderTop: `3px solid ${BRAND}`, borderLeft: `3px solid ${BRAND}`, borderRadius: '6px 0 0 0' }} />
                    <Box sx={{ position: 'absolute', top: 0, right: 0, width: 28, height: 28, borderTop: '3px solid #F5A623', borderRight: '3px solid #F5A623', borderRadius: '0 6px 0 0' }} />
                    <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: 28, height: 28, borderBottom: '3px solid #E056FD', borderLeft: '3px solid #E056FD', borderRadius: '0 0 0 6px' }} />
                    <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: 28, height: 28, borderBottom: '3px solid #E056FD', borderRight: '3px solid #E056FD', borderRadius: '0 0 6px 0' }} />

                    {/* Coming Soon placeholder */}
                    <Box
                      sx={{
                        width: 150,
                        height: 150,
                        borderRadius: '8px',
                        backgroundColor: 'rgba(0,0,0,0.03)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                      }}
                    >
                      <AppleIcon sx={{ fontSize: 36, color: 'rgba(0,0,0,0.2)' }} />
                      <Typography
                        sx={{
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: 'rgba(0,0,0,0.35)',
                          letterSpacing: '0.02em',
                        }}
                      >
                        Coming Soon
                      </Typography>
                    </Box>
                  </Box>

                  {/* App Store Badge (disabled look) */}
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      backgroundColor: 'rgba(0,0,0,0.08)',
                      color: 'rgba(0,0,0,0.35)',
                      borderRadius: '8px',
                      px: 2,
                      py: 0.8,
                      cursor: 'default',
                    }}
                  >
                    <AppleIcon sx={{ fontSize: 20, opacity: 0.5 }} />
                    <Box>
                      <Typography sx={{ fontSize: '0.55rem', color: 'rgba(0,0,0,0.3)', lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Download on the</Typography>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, lineHeight: 1.2, color: 'rgba(0,0,0,0.4)' }}>App Store</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

// ─── COMPONENT: Landing Navbar ──────────────────────────────────────────
function LandingNavbar({ onOpenDownloadModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = useCallback((e, link) => {
    if (link.isScroll) {
      e.preventDefault();
      const target = document.querySelector(link.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setMobileOpen(false);
    }
  }, []);

  return (
    <Box
      component="nav"
      id="landing-navbar"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        py: 1.5,
        px: { xs: 2, md: 3 },
      }}
    >
      <Container maxWidth="lg">
        {/* Rounded pill navbar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '60px',
            py: 1,
            px: { xs: 2, md: 3 },
            transition: 'all 0.35s cubic-bezier(.4,0,.2,1)',
            backdropFilter: 'blur(20px) saturate(180%)',
            backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.85)',
            boxShadow: scrolled
              ? '0 4px 24px rgba(109,83,244,0.12), 0 1px 4px rgba(0,0,0,0.06)'
              : '0 2px 16px rgba(0,0,0,0.06)',
            border: '1px solid rgba(255,255,255,0.5)',
          }}
        >
          {/* Left — Logo */}
          <Box
            component="a"
            href="/"
            sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer', flexShrink: 0, textDecoration: 'none' }}
          >
            <Box
              component="img"
              src="/LBK FINAL LOGO PNG (2) 3.svg"
              alt="Labaka Logo"
              sx={{ height: { xs: 44, md: 52 }, width: 'auto', objectFit: 'contain' }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                letterSpacing: '0.2em',
                color: '#1a1a2e',
                fontSize: { xs: '1rem', md: '1.15rem' },
              }}
            >
              LABAKA
            </Typography>
          </Box>

          {/* Center — Nav Links (desktop only) */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { md: 3, lg: 4.5 } }}>
              {NAV_LINKS.map((link) => (
                <Typography
                  key={link.label}
                  component="a"
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  sx={{
                    textDecoration: 'none',
                    color: '#1a1a2e',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    letterSpacing: '0.06em',
                    cursor: 'pointer',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 2,
                      borderRadius: 1,
                      backgroundColor: BRAND,
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': { width: '80%' },
                    '&:hover': { color: BRAND },
                    transition: 'color 0.2s ease',
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          )}

          {/* Right — Download App + Store Icons (desktop) / Hamburger (mobile) */}
          {!isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexShrink: 0 }}>
              <Button
                variant="contained"
                onClick={(e) => { e.preventDefault(); onOpenDownloadModal?.(); }}
                sx={{
                  borderRadius: '28px',
                  px: 3,
                  py: 0.9,
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  backgroundColor: BRAND,
                  boxShadow: `0 4px 16px rgba(109,83,244,0.35)`,
                  '&:hover': {
                    backgroundColor: BRAND_DARK,
                    boxShadow: `0 6px 24px rgba(109,83,244,0.45)`,
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Download App
              </Button>
              {/* Apple icon */}
              <Box
                component="a"
                href="#"
                onClick={(e) => { e.preventDefault(); onOpenDownloadModal?.(); }}
                aria-label="App Store"
                sx={{ display: 'flex', alignItems: 'center', transition: 'opacity 0.2s', '&:hover': { opacity: 0.7 }, cursor: 'pointer' }}
              >
                <Box component="img" src="/Apple.svg" alt="Apple" sx={{ height: 26, width: 'auto' }} />
              </Box>
              {/* Google Play icon */}
              <Box
                component="a"
                href="#"
                onClick={(e) => { e.preventDefault(); onOpenDownloadModal?.(); }}
                aria-label="Google Play"
                sx={{ display: 'flex', alignItems: 'center', transition: 'opacity 0.2s', '&:hover': { opacity: 0.7 }, cursor: 'pointer' }}
              >
                <Box component="img" src="/GooglePlayLogo.svg" alt="Google Play" sx={{ height: 26, width: 'auto' }} />
              </Box>
            </Box>
          ) : (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ color: BRAND }}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            pt: 2,
            background: `linear-gradient(180deg, #fff 0%, #f3f0ff 100%)`,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {NAV_LINKS.map((link) => (
            <ListItem
              key={link.label}
              component="a"
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                textDecoration: 'none',
                color: 'text.primary',
                '&:hover': { backgroundColor: 'rgba(109,83,244,0.06)' },
              }}
            >
              <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 600, letterSpacing: '0.04em' }} />
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => { setMobileOpen(false); onOpenDownloadModal?.(); }}
              sx={{
                borderRadius: '28px',
                py: 1.2,
                textTransform: 'none',
                fontWeight: 600,
                backgroundColor: BRAND,
                '&:hover': { backgroundColor: BRAND_DARK },
              }}
            >
              Download App
            </Button>
          </ListItem>
          <ListItem sx={{ justifyContent: 'center', gap: 2 }}>
            <Box component="a" href="#" onClick={(e) => { e.preventDefault(); setMobileOpen(false); onOpenDownloadModal?.(); }} sx={{ display: 'flex', cursor: 'pointer' }}>
              <Box component="img" src="/Apple.svg" alt="Apple" sx={{ height: 24 }} />
            </Box>
            <Box component="a" href="#" onClick={(e) => { e.preventDefault(); setMobileOpen(false); onOpenDownloadModal?.(); }} sx={{ display: 'flex', cursor: 'pointer' }}>
              <Box component="img" src="/GooglePlayLogo.svg" alt="Google Play" sx={{ height: 24 }} />
            </Box>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

// ─── COMPONENT: Hero Section ────────────────────────────────────────────
function HeroSection({ onOpenDownloadModal }) {
  const [heroRef, heroInView] = useInView();

  return (
    <Box
      ref={heroRef}
      sx={{
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 12, md: 10 },
        pb: { xs: 4, md: 5 },
        backgroundImage: 'url(/HeroBg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left content */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                opacity: heroInView ? 1 : 0,
                transform: heroInView ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s cubic-bezier(.4,0,.2,1)',
              }}
            >
              {/* Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  px: 2.5,
                  py: 0.8,
                  borderRadius: '28px',
                  backgroundColor: `rgba(109,83,244,0.08)`,
                  border: `1px solid rgba(109,83,244,0.2)`,
                  mb: 1.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: BRAND,
                    letterSpacing: '0.02em',
                  }}
                >
                  The All-in-one Connection Platform
                </Typography>
              </Box>

              {/* Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  fontWeight: 900,
                  lineHeight: 1.08,
                  mb: 1.5,
                  color: '#0d1b2a',
                }}
              >
                Meet.
                <br />
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_LIGHT} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Discover.
                </Box>
                <br />
                Belong.
              </Typography>

              {/* Subtext */}
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  mb: 2.5,
                  maxWidth: 480,
                }}
              >
                Real-time people, events, opportunities and communities – all in one place.
              </Typography>

              {/* CTA Button */}
              <Button
                variant="contained"
                size="large"
                onClick={(e) => { e.preventDefault(); onOpenDownloadModal?.(); }}
                sx={{
                  borderRadius: '32px',
                  px: 3.5,
                  py: 1.2,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  backgroundColor: BRAND,
                  boxShadow: `0 8px 32px rgba(109,83,244,0.35)`,
                  '&:hover': {
                    backgroundColor: BRAND_DARK,
                    boxShadow: `0 12px 40px rgba(109,83,244,0.45)`,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                  mb: 2,
                }}
              >
                Download App
              </Button>

              {/* Store badges */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 1.5,
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  flexWrap: 'wrap',
                }}
              >
                <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', mr: 0.5, mb: { xs: 0.5, sm: 0 } }}>
                  Available on
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                  <Box
                    component="a"
                    href="#"
                    onClick={(e) => { e.preventDefault(); onOpenDownloadModal?.(); }}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.8,
                      border: '1px solid #333',
                      borderRadius: '10px',
                      px: 1.5,
                      py: 0.6,
                      textDecoration: 'none',
                      color: '#333',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      '&:hover': { borderColor: BRAND, opacity: 0.8 },
                    }}
                  >
                    <Box component="img" src="/Apple.svg" alt="Apple" sx={{ height: 18 }} />
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600 }}>App Store</Typography>
                  </Box>
                  <Box
                    component="a"
                    href="#"
                    onClick={(e) => { e.preventDefault(); onOpenDownloadModal?.(); }}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.8,
                      border: '1px solid #333',
                      borderRadius: '10px',
                      px: 1.5,
                      py: 0.6,
                      textDecoration: 'none',
                      color: '#333',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      '&:hover': { borderColor: BRAND, opacity: 0.8 },
                    }}
                  >
                    <Box component="img" src="/GooglePlayLogo.svg" alt="Google Play" sx={{ height: 18 }} />
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600 }}>Google Play</Typography>
                  </Box>
                </Box>
              </Box>

              {/* Mobile App Preview Image (shown on mobile screens only) */}
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  justifyContent: 'center',
                  mt: 4,
                  position: 'relative',
                }}
              >
                <Box
                  component="img"
                  src="/PhoneMockup.svg"
                  alt="Labaka App Preview"
                  sx={{
                    width: '100%',
                    maxWidth: { xs: 220, sm: 260 },
                    height: 'auto',
                    filter: 'drop-shadow(0 12px 28px rgba(109,83,244,0.2))',
                  }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Right — Hero Collage with Phone, Banners & Location Profiles */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                display: { xs: 'none', md: 'block' },
                minHeight: 560,
                opacity: heroInView ? 1 : 0,
                transform: heroInView ? 'translateX(0)' : 'translateX(60px)',
                transition: 'all 1s cubic-bezier(.4,0,.2,1) 0.3s',
              }}
            >
              {/* ── MusicNight banner — top left ── */}
              <Box
                component="img"
                src="/MusicNight.svg"
                alt="Music Night"
                sx={{
                  position: 'absolute',
                  width: 160,
                  top: 20,
                  left: -10,
                  zIndex: 3,
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              />

              {/* ── Phone mockup — center ── */}
              <Box
                component="img"
                src="/PhoneMockup.svg"
                alt="Labaka App Preview"
                sx={{
                  position: 'absolute',
                  width: 280,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                }}
              />

              {/* ── FreelanceTutor banner — top right ── */}
              <Box
                component="img"
                src="/FreelanceTutor.svg"
                alt="Freelance Tutor"
                sx={{
                  position: 'absolute',
                  width: 150,
                  top: 10,
                  right: -20,
                  zIndex: 3,
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              />

              {/* ── Bike4Sale banner — bottom left ── */}
              <Box
                component="img"
                src="/Bike4Sale.svg"
                alt="Bike For Sale"
                sx={{
                  position: 'absolute',
                  width: 140,
                  bottom: 80,
                  left: 0,
                  zIndex: 3,
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              />

              {/* ── SpecialOffer banner — bottom right ── */}
              <Box
                component="img"
                src="/Specialoffer.svg"
                alt="Special Offers"
                sx={{
                  position: 'absolute',
                  width: 160,
                  bottom: 180,
                  right: -10,
                  zIndex: 3,
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              />

              {/* ── Location Profile Icons ── */}
              <Box
                component="img"
                src="/LocationProfile1.svg"
                alt="Location Profile"
                sx={{
                  position: 'absolute',
                  width: 48,
                  top: 250,
                  left: 60,
                  zIndex: 4,
                  animation: 'float 3s ease-in-out infinite alternate',
                  '@keyframes float': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-10px)' },
                  },
                }}
              />
              <Box
                component="img"
                src="/LocationProfile2.svg"
                alt="Location Profile 2"
                sx={{
                  position: 'absolute',
                  width: 48,
                  top: 150,
                  right: 50,
                  zIndex: 4,
                  animation: 'float2 3.5s ease-in-out infinite alternate',
                  '@keyframes float2': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-12px)' },
                  },
                }}
              />
              <Box
                component="img"
                src="/LocationProfile3.svg"
                alt="Location Profile 3"
                sx={{
                  position: 'absolute',
                  width: 48,
                  bottom: 110,
                  right: 110,
                  zIndex: 4,
                  animation: 'float3 2.5s ease-in-out infinite alternate',
                  '@keyframes float3': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-8px)' },
                  },
                }}
              />

              {/* Decorative dots */}
              {[...Array(4)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    position: 'absolute',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(109,83,244,0.18)',
                    top: `${25 + i * 18}%`,
                    left: `${30 + i * 10}%`,
                    zIndex: 1,
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ─── COMPONENT: Stats Bar ───────────────────────────────────────────────
function StatsBar() {
  const [ref, inView] = useInView();

  return (
    <Box
      ref={ref}
      sx={{
        mt: { xs: -3, md: -4 },
        py: { xs: 1, md: 1.5 },
        px: { xs: 2, md: 4 },
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'transparent',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '24px',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            py: { xs: 2.5, md: 3 },
            px: { xs: 3, md: 6 },
            backgroundColor: '#fff',
            flexWrap: { xs: 'wrap', sm: 'nowrap' },
            gap: { xs: 2, sm: 0 },
          }}
        >
          {STATS.map((stat, idx) => (
            <React.Fragment key={stat.label}>
              <StatItem stat={stat} index={idx} inView={inView} />
              {idx < STATS.length - 1 && (
                <Box
                  sx={{
                    width: '1px',
                    height: 48,
                    backgroundColor: 'rgba(0,0,0,0.08)',
                    flexShrink: 0,
                    display: { xs: 'none', sm: 'block' },
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function StatItem({ stat, index, inView }) {
  const count = useCounter(stat.value, 1800, inView);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        flex: { xs: '0 0 45%', sm: 1 },
        justifyContent: 'center',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(12px)',
        transition: `all 0.5s cubic-bezier(.4,0,.2,1) ${index * 0.1}s`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderRadius: '12px',
          backgroundColor: `rgba(109,83,244,0.08)`,
          color: BRAND,
          flexShrink: 0,
          '& .MuiSvgIcon-root': { fontSize: 20 },
        }}
      >
        {stat.icon}
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: '1.3rem', md: '1.5rem' },
            fontWeight: 800,
            color: '#0d1b2a',
            lineHeight: 1.1,
          }}
        >
          {count}
          {stat.suffix}
        </Typography>
        <Typography
          sx={{
            fontSize: '0.78rem',
            color: 'text.secondary',
            fontWeight: 500,
            lineHeight: 1.2,
          }}
        >
          {stat.label}
        </Typography>
      </Box>
    </Box>
  );
}

// ─── COMPONENT: Meet People Section ─────────────────────────────────────
function MeetPeopleSection({ onOpenDownloadModal }) {
  const [ref, inView] = useInView();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const bulletPoints = [
    'Live Location Discovery',
    'Smart Matching',
    'Verified & Safe',
  ];

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#fff',
      }}
    >
      <Container maxWidth="lg">
        {/* Single Card Container matching target mockup */}
        <Box
          sx={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 16px 50px rgba(109, 83, 244, 0.08)',
            border: '1px solid rgba(109, 83, 244, 0.12)',
            p: { xs: 4, sm: 5, md: 6 },
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s cubic-bezier(.4,0,.2,1)',
          }}
        >
          {/* Full Card Background SVG */}
          <Box
            component="img"
            src="/MeetPeopleBG.svg"
            alt="Meet People Background"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Card Content Grid */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ position: 'relative', zIndex: 1 }}
            direction={isMobile ? 'column-reverse' : 'row'}
          >
            {/* Left text column */}
            <Grid item xs={12} md={5}>
              <Box>
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: BRAND,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    mb: 1.5,
                  }}
                >
                  REAL – TIME DISCOVERY
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.2rem', sm: '2.6rem', md: '3rem' },
                    fontWeight: 800,
                    color: '#0d1b2a',
                    lineHeight: 1.15,
                    mb: 2,
                  }}
                >
                  Meet people<br />around you.
                </Typography>

                <Typography
                  sx={{
                    fontSize: '1rem',
                    color: '#5a6175',
                    lineHeight: 1.6,
                    mb: 3,
                    maxWidth: 420,
                  }}
                >
                  LaBaKa helps you connect with awesome people nearby – Instantly
                </Typography>

                {/* Bullet points */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
                  {bulletPoints.map((point, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateX(0)' : 'translateX(-20px)',
                        transition: `all 0.5s ease ${0.2 + idx * 0.1}s`,
                      }}
                    >
                      <CheckCircleIcon
                        sx={{
                          fontSize: 20,
                          color: BRAND,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: '0.95rem',
                          color: '#2d3748',
                          fontWeight: 600,
                        }}
                      >
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Outlined CTA Button */}
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  onClick={(e) => { e.preventDefault(); onOpenDownloadModal?.(); }}
                  sx={{
                    borderColor: BRAND,
                    color: BRAND,
                    borderWidth: '1.5px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    px: 3.5,
                    py: 1.2,
                    borderRadius: '12px',
                    textTransform: 'none',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(4px)',
                    '&:hover': {
                      borderColor: BRAND_DARK,
                      backgroundColor: BRAND,
                      color: '#fff',
                      boxShadow: `0 8px 24px rgba(109,83,244,0.25)`,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Explore Nearby
                </Button>
              </Box>
            </Grid>

            {/* Right map location pins overlay */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: { xs: 280, sm: 360, md: 400 },
                }}
              >
                <Box
                  component="img"
                  src="/MeetPeopleLocation icons.svg"
                  alt="People location pins"
                  sx={{
                    width: '100%',
                    maxWidth: 520,
                    height: 'auto',
                    objectFit: 'contain',
                    animation: inView ? 'floatPins 3.5s ease-in-out infinite' : 'none',
                    '@keyframes floatPins': {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-8px)' },
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

// ─── COMPONENT: Features Section ────────────────────────────────────────
const FEATURED_BANNERS = [
  { src: '/FeaturedBanner1.svg', alt: 'Post it. Go Live. Get Found.' },
  { src: '/FeaturedBanner2.svg', alt: 'Connect people around In Realtime' },
  { src: '/FeaturedBanner3.svg', alt: 'Connect with people Beyond Borders' },
  { src: '/FeaturedBanner4.svg', alt: 'Explore Events, Opportunity & More' },
];

function FeaturesSection() {
  const [ref, inView] = useInView();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="features"
      ref={ref}
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#fafbfc',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative scattered dots */}
      {[
        { top: '8%', left: '5%', size: 6 },
        { top: '15%', right: '8%', size: 8 },
        { top: '60%', left: '3%', size: 5 },
        { bottom: '12%', right: '6%', size: 7 },
        { top: '35%', right: '2%', size: 4 },
        { bottom: '25%', left: '7%', size: 6 },
        { top: '80%', right: '12%', size: 5 },
        { top: '5%', left: '45%', size: 4 },
      ].map((dot, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: dot.size,
            height: dot.size,
            borderRadius: '50%',
            backgroundColor: i % 2 === 0 ? BRAND : BRAND_LIGHT,
            opacity: 0.25,
            top: dot.top,
            left: dot.left,
            right: dot.right,
            bottom: dot.bottom,
            pointerEvents: 'none',
          }}
        />
      ))}

      <Container maxWidth="lg">
        {/* Section label */}
        <Box
          sx={{
            mb: { xs: 4, md: 5 },
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <Typography
            sx={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: BRAND,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}
          >
            Features
          </Typography>
        </Box>

        {/* Banner cards row */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 2, md: 2.5 },
            flexDirection: 'row',
            alignItems: 'stretch',
            overflowX: 'auto',
            scrollSnapType: { xs: 'x mandatory', sm: 'none' },
            pb: 2,
            px: { xs: 1, sm: 3 },
            mx: { xs: -1, sm: -3 },
            /* Hide scrollbar */
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {FEATURED_BANNERS.map((banner, idx) => (
            <Box
              key={idx}
              sx={{
                flex: { xs: '0 0 255px', sm: '0 0 260px', md: '1 1 0' },
                scrollSnapAlign: 'start',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.96)',
                transition: `all 0.6s cubic-bezier(.4,0,.2,1) ${0.15 + idx * 0.12}s`,
                boxShadow: '0 4px 24px rgba(109,83,244,0.08)',
                '&:hover': {
                  transform: 'translateY(-6px) scale(1.02)',
                  boxShadow: '0 16px 48px rgba(109,83,244,0.18)',
                },
                cursor: 'default',
              }}
            >
              <Box
                component="img"
                src={banner.src}
                alt={banner.alt}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ─── COMPONENT: Marquee Section ─────────────────────────────────────────
const MARQUEE_TILES = [
  '/MarqueTIle1.svg',
  '/MarqueTIle2.svg',
  '/MarqueTIle3.svg',
  '/MarqueTIle4.svg',
  '/MarqueTIle5.svg',
  '/MarqueTIle6.svg',
  '/MarqueTIle7.svg',
  '/MarqueTIle8.svg',
  '/MarqueTIle9.svg',
];

function MarqueeSection() {
  const [ref, inView] = useInView();

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: '#fafbfc',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            border: '1px solid rgba(109, 83, 244, 0.2)',
            borderRadius: '24px',
            backgroundColor: '#fff',
            p: { xs: 3, md: 5 },
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 700,
              color: BRAND,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              mb: 4,
            }}
          >
            Explore What Interest To You
          </Typography>

          {/* Marquee Wrapper */}
          <Box
            sx={{
              display: 'flex',
              overflow: 'hidden',
              position: 'relative',
              width: '100%',
              // Fade edges so tiles enter/exit smoothly
              maskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)',
              '&:hover .marquee-track': {
                animationPlayState: 'paused',
              },
            }}
          >
            <Box
              className="marquee-track"
              sx={{
                display: 'flex',
                width: 'max-content',
                animation: 'scrollMarquee 25s linear infinite',
                '@keyframes scrollMarquee': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-50%)' },
                },
              }}
            >
              {[...MARQUEE_TILES, ...MARQUEE_TILES].map((src, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width: { xs: 100, sm: 120, md: 150 },
                    height: { xs: 100, sm: 120, md: 150 },
                    flexShrink: 0,
                    mr: { xs: 2, md: 3 },
                    borderRadius: '20px',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={`Interest tile ${idx}`}
                    sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {/* Left/Right Decorative Arrows matching design */}
          <IconButton
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#f3efff',
              color: BRAND,
              border: `1px solid rgba(109,83,244,0.15)`,
              boxShadow: '0 4px 12px rgba(109,83,244,0.1)',
              '&:hover': { backgroundColor: '#e8e0ff' },
              display: { xs: 'none', md: 'flex' }
            }}
          >
            <ArrowBackIcon fontSize="small" />
          </IconButton>
          <IconButton
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translate(50%, -50%)',
              backgroundColor: '#f3efff',
              color: BRAND,
              border: `1px solid rgba(109,83,244,0.15)`,
              boxShadow: '0 4px 12px rgba(109,83,244,0.1)',
              '&:hover': { backgroundColor: '#e8e0ff' },
              display: { xs: 'none', md: 'flex' }
            }}
          >
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

// ─── COMPONENT: Two Modes Section ───────────────────────────────────────
function TwoModesSection() {
  const [ref, inView] = useInView();
  const [isCasual, setIsCasual] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side: Text and Toggle */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : 'translateX(-40px)',
                transition: 'all 0.7s cubic-bezier(.4,0,.2,1)',
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: BRAND,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  mb: 2,
                }}
              >
                Two Modes, One You.
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.8rem', md: '3.5rem' },
                  fontWeight: 800,
                  color: '#111',
                  lineHeight: 1.1,
                  mb: 1,
                }}
              >
                <span style={{ color: '#6D53F4' }}>Casual</span> or <span style={{ color: '#1AF0D1' }}>Formal</span>
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.6rem', md: '2.1rem' },
                  fontWeight: 700,
                  color: '#555',
                  mb: { xs: 2, md: 3 },
                }}
              >
                Choose one according to your mood
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', sm: '1.05rem' },
                  color: '#666',
                  lineHeight: 1.6,
                  mb: { xs: 3, md: 5 },
                  maxWidth: 400,
                }}
              >
                Switch modes anytime and experience LaBaKa the way you want.
              </Typography>

              {/* Toggle Button Container */}
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#f0eef6',
                  borderRadius: '50px',
                  p: '4px',
                  boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.06)',
                  maxWidth: '100%',
                }}
              >
                {/* Sliding Background Pill */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 4,
                    bottom: 4,
                    left: isCasual ? 4 : 'calc(50%)',
                    width: 'calc(50% - 4px)',
                    borderRadius: '50px',
                    backgroundColor: isCasual ? '#6D53F4' : '#1AF0D1',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: isCasual
                      ? '0 4px 16px rgba(109, 83, 244, 0.35)'
                      : '0 4px 16px rgba(26, 240, 209, 0.35)',
                  }}
                />

                <Button
                  onClick={() => setIsCasual(true)}
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '50px',
                    px: { xs: 3, sm: 6 },
                    py: { xs: 1.2, sm: 1.5 },
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: { xs: '0.95rem', sm: '1.1rem' },
                    color: isCasual ? '#fff' : '#666',
                    transition: 'color 0.35s ease',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  Casual
                </Button>
                <Button
                  onClick={() => setIsCasual(false)}
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '50px',
                    px: { xs: 3, sm: 6 },
                    py: { xs: 1.2, sm: 1.5 },
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: { xs: '0.95rem', sm: '1.1rem' },
                    color: !isCasual ? '#000' : '#666',
                    transition: 'color 0.35s ease',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  Formal
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Side: Image */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : 'translateX(40px)',
                transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1) 0.2s, transform 0.7s cubic-bezier(.4,0,.2,1) 0.2s',
              }}
            >
              {/* Casual Mode Poster */}
              <Box
                component="img"
                src="/CasualMode.svg"
                alt="Casual Mode"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  opacity: isCasual ? 1 : 0,
                  transform: isCasual ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(10px)',
                  pointerEvents: isCasual ? 'auto' : 'none',
                  transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />

              {/* Formal Mode Poster */}
              <Box
                component="img"
                src="/FormalMode.svg"
                alt="Formal Mode"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  opacity: !isCasual ? 1 : 0,
                  transform: !isCasual ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(10px)',
                  pointerEvents: !isCasual ? 'auto' : 'none',
                  transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ─── COMPONENT: Founding Members Offer Section ───────────────────────────
function FoundingMembersOfferSection({ onOpenDownloadModal }) {
  const [ref, inView] = useInView();

  const handleClaimOffer = () => {
    onOpenDownloadModal?.();
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: '#fff',
        backgroundImage: 'url(/GlassBG.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, #F5F0FF 0%, #EBE4FF 50%, #F6F1FF 100%)',
            border: '1px solid rgba(109, 83, 244, 0.25)',
            boxShadow: '0 20px 60px rgba(109, 83, 244, 0.1)',
            p: { xs: 3, sm: 5, md: 6 },
            overflow: 'hidden',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
            transition: 'all 0.7s cubic-bezier(.4,0,.2,1)',
          }}
        >
          {/* Subtle Background Glows */}
          <Box
            sx={{
              position: 'absolute',
              top: '-30%',
              right: '-10%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(109, 83, 244, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <Grid container spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
            {/* Left Content */}
            <Grid item xs={12} md={7}>
              <Box>
                {/* Limited Time Badge */}
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 0.8,
                    borderRadius: '50px',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(109, 83, 244, 0.2)',
                    boxShadow: '0 2px 10px rgba(109, 83, 244, 0.08)',
                    mb: 3,
                  }}
                >
                  <Typography sx={{ fontSize: '0.85rem' }}>👑</Typography>
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: BRAND,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Limited Time Only
                  </Typography>
                </Box>

                {/* Main Heading */}
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', sm: '3.2rem', md: '3.8rem' },
                    fontWeight: 800,
                    color: '#150D3F',
                    lineHeight: 1.1,
                    mb: 2,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Founding{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #6D53F4 0%, #D946EF 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Members Offer!
                  </span>
                </Typography>

                {/* Subtitle */}
                <Typography
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1.15rem' },
                    color: '#4B4668',
                    mb: { xs: 3, md: 4 },
                    lineHeight: 1.6,
                  }}
                >
                  Be among our first members and connect with people in{' '}
                  <Typography
                    component="span"
                    sx={{ color: BRAND, fontWeight: 700, fontSize: 'inherit' }}
                  >
                    real time.
                  </Typography>
                </Typography>

                {/* 3 MONTHS FREE Feature Card */}
                <Box
                  sx={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    p: { xs: 2, sm: 3.5 },
                    boxShadow: '0 12px 36px rgba(109, 83, 244, 0.08)',
                    border: '1px solid rgba(109, 83, 244, 0.12)',
                    maxWidth: '100%',
                    mb: { xs: 3, md: 4 },
                  }}
                >
                  {/* 100% OFF Badge hanging at top right */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      right: 16,
                      backgroundColor: '#FFE4E6',
                      color: '#E11D48',
                      border: '1px solid #FECDD3',
                      px: 1.5,
                      py: 0.4,
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      boxShadow: '0 4px 12px rgba(225, 29, 72, 0.15)',
                    }}
                  >
                    100% OFF
                  </Box>

                  {/* Giant 3 */}
                  <Typography
                    sx={{
                      fontSize: { xs: '4.2rem', sm: '7rem' },
                      fontWeight: 900,
                      lineHeight: 0.9,
                      mr: { xs: 1, sm: 2 },
                      transform: 'translateY(-4px)',
                      background: 'linear-gradient(180deg, #7C3AED 0%, #E056FD 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    3
                  </Typography>

                  {/* Right side text of card */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: '1.05rem', sm: '1.6rem' },
                        fontWeight: 800,
                        color: '#150D3F',
                        letterSpacing: '0.05em',
                        lineHeight: 1.1,
                      }}
                    >
                      MONTHS
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: '1.75rem', sm: '2.8rem' },
                        fontWeight: 900,
                        lineHeight: 1,
                        background: 'linear-gradient(90deg, #6D53F4 0%, #EC4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 0.5,
                      }}
                    >
                      FREE
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#666', fontWeight: 600 }}>
                        on LaBaKa
                      </Typography>
                      <Box
                        sx={{
                          backgroundColor: '#6D53F4',
                          color: '#FFF',
                          px: 1.2,
                          py: 0.2,
                          borderRadius: '8px',
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.4,
                        }}
                      >
                        PRO 👑
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* Features Row */}
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: { xs: 1.5, sm: 2.5 },
                    alignItems: 'center',
                  }}
                >
                  {[
                    { icon: <PeopleIcon sx={{ fontSize: 18 }} />, label: 'Real-time Nearby People' },
                    { icon: <ExploreIcon sx={{ fontSize: 18 }} />, label: 'Global Discovery' },
                    { icon: <GroupsIcon sx={{ fontSize: 18 }} />, label: 'Real Users Nearby' },
                    { icon: <SecurityIcon sx={{ fontSize: 18 }} />, label: 'Invisible Mode' },
                    { icon: <CheckCircleOutlineIcon sx={{ fontSize: 18 }} />, label: 'Safe & Verified' },
                  ].map((feat, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.8,
                        color: '#4B4668',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                      }}
                    >
                      <Box sx={{ color: BRAND, display: 'flex' }}>{feat.icon}</Box>
                      <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
                        {feat.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Right Column / Card & Graphic */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: { xs: 320, sm: 400 },
                }}
              >
                {/* Floating female avatar (top left) */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '5%',
                    left: '5%',
                    zIndex: 3,
                    animation: 'floatSlow 4s ease-in-out infinite',
                    '@keyframes floatSlow': {
                      '0%, 100%': { transform: 'translateY(0)' },
                      '50%': { transform: 'translateY(-10px)' },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      component="img"
                      src="/FemaleAvatar.svg"
                      alt="Founding Member"
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        border: '3px solid #FFF',
                        boxShadow: '0 8px 24px rgba(109,83,244,0.2)',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 2,
                        right: 2,
                        width: 14,
                        height: 14,
                        backgroundColor: '#10B981',
                        borderRadius: '50%',
                        border: '2px solid #FFF',
                      }}
                    />
                  </Box>
                </Box>

                {/* Floating male avatar (bottom right) */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '18%',
                    right: '2%',
                    zIndex: 3,
                    animation: 'floatSlow 4s ease-in-out infinite 2s',
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      component="img"
                      src="/maleAvatar.svg"
                      alt="Founding Member"
                      sx={{
                        width: 75,
                        height: 75,
                        borderRadius: '50%',
                        border: '3px solid #FFF',
                        boxShadow: '0 8px 24px rgba(109,83,244,0.2)',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 2,
                        right: 2,
                        width: 14,
                        height: 14,
                        backgroundColor: '#10B981',
                        borderRadius: '50%',
                        border: '2px solid #FFF',
                      }}
                    />
                  </Box>
                </Box>

                {/* Center Glass Card */}
                <Box
                  sx={{
                    width: '90%',
                    maxWidth: 340,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: '28px',
                    p: 4,
                    textAlign: 'center',
                    boxShadow: '0 20px 50px rgba(109, 83, 244, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.9)',
                    position: 'relative',
                    zIndex: 2,
                    transform: 'rotate(2deg)',
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '16px',
                      backgroundColor: 'rgba(109, 83, 244, 0.1)',
                      color: BRAND,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <GroupsIcon sx={{ fontSize: 32 }} />
                  </Box>

                  <Typography sx={{ color: '#4B4668', fontSize: '0.95rem', fontWeight: 600 }}>
                    You're a
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: BRAND,
                      mb: 1.5,
                    }}
                  >
                    Founding Member!
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#6B7280',
                      mb: 3,
                      lineHeight: 1.5,
                    }}
                  >
                    Thank you for being part of our journey.
                  </Typography>

                  <Box
                    sx={{
                      background: 'linear-gradient(135deg, #6D53F4 0%, #D946EF 100%)',
                      color: '#FFF',
                      py: 1.2,
                      px: 2,
                      borderRadius: '50px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      boxShadow: '0 6px 20px rgba(109, 83, 244, 0.3)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.8,
                    }}
                  >
                    ★ 3 MONTHS FREE <span style={{ opacity: 0.8, fontSize: '0.75rem' }}>on PRO</span>
                  </Box>
                </Box>

                {/* Bottom CTA Button */}
                <Button
                  onClick={handleClaimOffer}
                  sx={{
                    mt: 3,
                    background: 'linear-gradient(135deg, #6D53F4 0%, #9061F9 50%, #E056FD 100%)',
                    color: '#FFF',
                    px: { xs: 3, sm: 4 },
                    py: 1.8,
                    borderRadius: '50px',
                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: '0 12px 36px rgba(109, 83, 244, 0.35)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #5B3FE2 0%, #7E4BE8 50%, #CF3EEA 100%)',
                      boxShadow: '0 16px 44px rgba(109, 83, 244, 0.45)',
                      transform: 'translateY(-2px) scale(1.02)',
                    },
                    transition: 'all 0.3s ease',
                    zIndex: 4,
                  }}
                >
                  👑 Claim Your 3 Months Free Now &nbsp; →
                </Button>
                <Typography
                  sx={{
                    mt: 1.2,
                    fontSize: '0.8rem',
                    color: '#6B7280',
                    fontWeight: 600,
                    textAlign: 'center',
                    zIndex: 4,
                  }}
                >
                  Download Labaka app
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

// ─── COMPONENT: Loved By Thousands Section ──────────────────────────────
const LOVED_BY_THOUSANDS_DATA = [
  {
    name: 'Vikram R.',
    location: 'Chennai',
    avatar: '/TestimonialCandiate1.svg',
    text: 'I found my business partner here. Labaka is a game changer!',
  },
  {
    name: 'Dinesh Kumar',
    location: 'Bangalore',
    avatar: '/TestimonialCandiate2.svg',
    text: 'Met amazing people around and made local friends connect',
  },
  {
    name: 'Priya Roy',
    location: 'Delhi',
    avatar: '/TestimonialCandiate3.svg',
    text: 'I have found my tutor nearby via labaka app and thanks for the service',
  },
  {
    name: 'Vel Murugan',
    location: 'Pondicherry',
    avatar: '/TestimonialCandiate4.svg',
    text: 'Thanks labaka team for posting my event to the right audience',
  },
  {
    name: 'Meena',
    location: 'Mumbai',
    avatar: '/TestimonialCandiate5.svg',
    text: 'I have found my flat mate via lbk app, I posted my request and get connected',
  },
];

function LovedByThousandsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#fff' }}>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          sx={{
            border: '1px solid #E5D9F2',
            borderRadius: '24px',
            p: { xs: 2.5, sm: 3.5, md: 5 },
            position: 'relative',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: BRAND,
              mb: { xs: 2.5, md: 4 },
              fontSize: { xs: '1.35rem', sm: '1.6rem', md: '1.75rem' },
            }}
          >
            Loved by Users
          </Typography>

          {/* Scrolling Container */}
          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              gap: { xs: 2, sm: 3 },
              pb: 2,
              scrollBehavior: 'smooth',
              scrollSnapType: { xs: 'x mandatory', sm: 'none' },
              '&::-webkit-scrollbar': { display: 'none' },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {LOVED_BY_THOUSANDS_DATA.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  minWidth: { xs: 240, sm: 280 },
                  maxWidth: { xs: 270, sm: 320 },
                  scrollSnapAlign: 'start',
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  p: { xs: 2, sm: 3 },
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Box
                    component="img"
                    src={item.avatar}
                    alt={item.name}
                    sx={{ width: 60, height: 60, borderRadius: '8px', objectFit: 'contain', mr: 2 }}
                  />
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#222' }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ color: '#777', fontSize: '0.85rem', mb: 0.5 }}>
                      {item.location}
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} sx={{ color: '#FFD700', fontSize: '1.1rem' }} />
                      ))}
                    </Box>
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.5, flexGrow: 1 }}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Left/Right Scroll Arrows */}
        <IconButton
          onClick={() => scroll('left')}
          sx={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#E5D9F2',
            color: BRAND,
            '&:hover': { backgroundColor: '#d4c2e8' },
            display: { xs: 'none', md: 'flex' },
            width: 48,
            height: 48,
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          onClick={() => scroll('right')}
          sx={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translate(50%, -50%)',
            backgroundColor: '#E5D9F2',
            color: BRAND,
            '&:hover': { backgroundColor: '#d4c2e8' },
            display: { xs: 'none', md: 'flex' },
            width: 48,
            height: 48,
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Container>
    </Box>
  );
}

// ─── COMPONENT: Footer ─────────────────────────────────────────────────
function LandingFooter() {
  const footerLinks = {
    'Quick Links': [
      { label: 'Features', href: '#features', isScroll: true },
      { label: 'Download', href: '#download', isScroll: true },
    ],
    Legal: [
      { label: 'About Us', href: '/Labaka/AboutUs/' },
      { label: 'Privacy Policy', href: '/Labaka/PrivacyPolicy/' },
      { label: 'Terms & Conditions', href: '/Labaka/terms-and-conditions/' },
      { label: 'FAQ', href: '/Labaka/Faqs/' },
    ],
  };

  const socialLinks = [
    { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
    { icon: <TwitterIcon />, href: '#', label: 'Twitter' },
    { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
    { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <Box
      component="footer"
      id="download"
      sx={{
        py: { xs: 3, md: 4.5 },
        background: `linear-gradient(135deg, #3a1f8e 0%, ${BRAND_DARK} 30%, ${BRAND} 60%, ${BRAND_LIGHT} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-40%',
          left: '-15%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={3}>
          {/* Brand column */}
          <Grid item xs={12} md={6}>
            <Box
              component="a"
              href="/Labaka/home"
              sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, textDecoration: 'none', cursor: 'pointer' }}
            >
              <Box
                component="img"
                src="/LBK FINAL LOGO PNG (2) 3.svg"
                alt="Labaka Logo"
                sx={{
                  height: 40,
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(1.2)',
                }}
              />
              <Typography
                sx={{
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  fontSize: '1.1rem',
                  color: '#fff',
                }}
              >
                LABAKA
              </Typography>
            </Box>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.88rem',
                lineHeight: 1.6,
                mb: 2,
                maxWidth: 300,
              }}
            >
              The all-in-one platform to meet people, discover events, find opportunities, and build
              communities.
            </Typography>
            {/* Social icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((s) => (
                <IconButton
                  key={s.label}
                  component="a"
                  href={s.href}
                  aria-label={s.label}
                  sx={{
                    color: 'rgba(255,255,255,0.75)',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    width: 36,
                    height: 36,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.25)',
                      color: '#fff',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <Grid item xs={6} sm={3} md={3} key={title}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  mb: 1.5,
                  color: '#fff',
                }}
              >
                {title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {links.map((link) => (
                  <Typography
                    key={link.label}
                    component="a"
                    href={link.href}
                    onClick={(e) => {
                      if (link.isScroll) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    sx={{
                      color: 'rgba(255,255,255,0.75)',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      '&:hover': { color: '#fff', textDecoration: 'underline' },
                      transition: 'color 0.2s ease',
                      cursor: 'pointer',
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom bar */}
        <Box
          sx={{
            mt: 3.5,
            pt: 2,
            borderTop: '1px solid rgba(255,255,255,0.15)',
            textAlign: 'center',
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} Labaka. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

// ─── MAIN: Home Page ────────────────────────────────────────────────────
function Home() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const openDownloadModal = useCallback(() => setDownloadModalOpen(true), []);
  const closeDownloadModal = useCallback(() => setDownloadModalOpen(false), []);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fff', overflowX: 'hidden' }}>
      <LandingNavbar onOpenDownloadModal={openDownloadModal} />
      <HeroSection onOpenDownloadModal={openDownloadModal} />
      <StatsBar />
      <MeetPeopleSection onOpenDownloadModal={openDownloadModal} />
      <FeaturesSection />
      <MarqueeSection />
      <TwoModesSection />
      <FoundingMembersOfferSection onOpenDownloadModal={openDownloadModal} />
      <LovedByThousandsSection />
      <LandingFooter />
      <DownloadAppModal open={downloadModalOpen} onClose={closeDownloadModal} />
    </Box>
  );
}

export default Home;