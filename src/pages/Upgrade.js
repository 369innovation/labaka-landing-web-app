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
  Close as XIcon,
  WorkspacePremium as CrownIcon,
  CardGiftcard as RibbonIcon,
  WorkOutline as BriefcaseIcon,
  Star as StarIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  ThumbUpOutlined as ThumbUpOutlinedIcon,
  GroupAddOutlined as GroupAddOutlinedIcon,
  QrCode2 as QrCode2Icon,
  Tune as TuneIcon,
  StarOutline as StarOutlineIcon,
  History as HistoryIcon,
  RocketLaunch as RocketLaunchIcon,
  CheckCircle as CheckCircleIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
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

// ─── Main Upgrade Page Component ────────────────────────────────────────
export default function Upgrade() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const featureRows = [
    {
      icon: <FavoriteBorderIcon sx={{ color: BRAND, fontSize: 20 }} />,
      name: 'See Who Liked You',
      desc: 'Someone shared interest, No - blurred profile in PRO',
      free: '1',
      plus: '5',
      proType: 'check',
    },
    {
      icon: <ChatBubbleOutlineIcon sx={{ color: BRAND, fontSize: 20 }} />,
      name: 'Direct Message',
      desc: 'Message with connected users',
      free: '5',
      plusType: 'check_gray',
      proType: 'check',
    },
    {
      icon: <ThumbUpOutlinedIcon sx={{ color: BRAND, fontSize: 20 }} />,
      name: 'Likes',
      desc: 'Share your interest',
      free: '15',
      plus: '30',
      proType: 'check',
    },
    {
      icon: <GroupAddOutlinedIcon sx={{ color: BRAND, fontSize: 20 }} />,
      name: 'Connect Requests',
      desc: 'Establish trust with a connect requests',
      freeType: 'cross',
      plus: '50',
      plusSub: 'Per Week',
      proType: 'check',
    },
    {
      icon: <QrCode2Icon sx={{ color: BRAND, fontSize: 20 }} />,
      name: 'QR code profile share',
      desc: 'Quick share your profile',
      freeType: 'check_gray',
      plusType: 'check_gray',
      proType: 'check',
    },
    {
      icon: <TuneIcon sx={{ color: BRAND, fontSize: 20 }} />,
      name: 'Advanced Filters',
      desc: 'Find the right people and events',
      freeType: 'cross',
      plusType: 'check_gray',
      proType: 'check',
    },
    {
      icon: <StarOutlineIcon sx={{ color: BRAND, fontSize: 20 }} />,
      name: 'Super Likes',
      desc: 'Show extra interest',
      freeType: 'cross',
      plus: '5',
      proText: '10',
    },
    {
      icon: <HistoryIcon sx={{ color: BRAND, fontSize: 20 }} />,
      name: 'Rewinds',
      desc: 'Go back to skipped',
      freeType: 'cross',
      plus: '25',
      proType: 'check',
    },
    {
      icon: <RocketLaunchIcon sx={{ color: BRAND, fontSize: 20 }} />,
      name: 'Profile Boost',
      desc: 'Highlight your profile',
      freeType: 'cross',
      plus: '1',
      plusSub: 'Per Month',
      proText: '3',
      proSub: 'Per Month',
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
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
              fontWeight: 800,
              color: '#0F172A',
              mb: 1,
            }}
          >
            Choose Your Membership
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', color: '#64748B' }}>
            All plans unlock powerful features to help you connect and grow.
          </Typography>
        </Box>

        {/* 3 Membership Cards */}
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          {/* Card 1: Starter */}
          <Grid item xs={12} sm={4} md={3.8}>
            <Box
              sx={{
                height: '100%',
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                p: { xs: 3, sm: 3.5 },
                textAlign: 'center',
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.06)',
                },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                {/* Circular Icon */}
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: '#F3F0FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                  }}
                >
                  <BriefcaseIcon sx={{ fontSize: 28, color: '#8B5CF6' }} />
                </Box>

                <Typography sx={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E293B', mb: 0.5 }}>
                  Starter
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748B', mb: 3 }}>
                  Best for try
                </Typography>

                {/* Price */}
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', lineHeight: 1 }}>
                  ₹29
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', color: '#64748B', mt: 1, mb: 4 }}>
                  for 7 days
                </Typography>
              </Box>

              {/* Button */}
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  borderColor: '#E2E8F0',
                  color: BRAND,
                  borderWidth: '1.5px',
                  borderRadius: '14px',
                  py: 1.3,
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: BRAND,
                    backgroundColor: 'rgba(109, 83, 244, 0.05)',
                  },
                }}
              >
                Choose Starter
              </Button>
            </Box>
          </Grid>

          {/* Card 2: Pro (Featured Card with FOUNDERS OFFER) */}
          <Grid item xs={12} sm={4} md={3.8}>
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                p: { xs: 3, sm: 3.5 },
                textAlign: 'center',
                border: `2px solid ${BRAND}`,
                boxShadow: '0 20px 40px rgba(109, 83, 244, 0.18)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 24px 50px rgba(109, 83, 244, 0.25)',
                },
              }}
            >
              {/* Top Badge */}
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
                  borderRadius: '14px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 12px rgba(109, 83, 244, 0.4)',
                }}
              >
                FOUNDERS OFFER • LIMITED TIME
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', pt: 1 }}>
                {/* Circular Icon */}
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: '#F3F0FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                  }}
                >
                  <RibbonIcon sx={{ fontSize: 30, color: BRAND }} />
                </Box>

                <Typography sx={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E293B', mb: 0.5 }}>
                  Pro
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748B', mb: 3 }}>
                  3 Months FREE
                </Typography>

                {/* Price with strikethrough */}
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', lineHeight: 1 }}>
                  ₹0
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#EF4444',
                    textDecoration: 'line-through',
                    mt: 0.5,
                  }}
                >
                  ₹199
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', color: '#64748B', mt: 0.5, mb: 4 }}>
                  for 3 months
                </Typography>
              </Box>

              {/* Button */}
              <Button
                fullWidth
                variant="contained"
                sx={{
                  background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)`,
                  color: '#ffffff',
                  borderRadius: '14px',
                  py: 1.3,
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  boxShadow: '0 8px 20px rgba(109, 83, 244, 0.35)',
                  '&:hover': {
                    background: BRAND_DARK,
                    boxShadow: '0 12px 28px rgba(109, 83, 244, 0.45)',
                  },
                }}
              >
                Claim Free Now
              </Button>
            </Box>
          </Grid>

          {/* Card 3: Pro Yearly */}
          <Grid item xs={12} sm={4} md={3.8}>
            <Box
              sx={{
                height: '100%',
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                p: { xs: 3, sm: 3.5 },
                textAlign: 'center',
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.06)',
                },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                {/* Circular Icon */}
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(245, 158, 11, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                  }}
                >
                  <CrownIcon sx={{ fontSize: 28, color: '#F59E0B' }} />
                </Box>

                <Typography sx={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E293B', mb: 0.5 }}>
                  Pro Yearly
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748B', mb: 3 }}>
                  Best value
                </Typography>

                {/* Price */}
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', lineHeight: 1 }}>
                  ₹499
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', color: '#64748B', mt: 1, mb: 4 }}>
                  per year
                </Typography>
              </Box>

              {/* Button */}
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  borderColor: '#E2E8F0',
                  color: BRAND,
                  borderWidth: '1.5px',
                  borderRadius: '14px',
                  py: 1.3,
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: BRAND,
                    backgroundColor: 'rgba(109, 83, 244, 0.05)',
                  },
                }}
              >
                Choose Yearly
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ─── FEATURE COMPARISON TABLE SECTION ───────────────────────────────── */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        {/* Table Title & Note Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, px: 1 }}>
          <Typography
            sx={{
              fontSize: '0.85rem',
              fontWeight: 800,
              color: BRAND,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            FEATURE COMPARISON
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
            <CheckCircleIcon sx={{ color: BRAND, fontSize: 18 }} />
            <Typography sx={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 500 }}>
              Cancel anytime. No hidden charges.
            </Typography>
          </Box>
        </Box>

        {/* Comparison Table Card */}
        <Box
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            p: { xs: 2, sm: 3.5 },
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            border: '1px solid #E2E8F0',
            overflowX: 'auto',
          }}
        >
          <Box sx={{ minWidth: 680 }}>
            {/* Header Row */}
            <Grid container alignItems="center" sx={{ pb: 2, borderBottom: '1px solid #F1F5F9' }}>
              <Grid item xs={5}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 800, color: '#1E293B', pl: 1 }}>
                  Features
                </Typography>
              </Grid>

              <Grid item xs={2} sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E293B' }}>
                  FREE
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B' }}>Limited</Typography>
              </Grid>

              <Grid item xs={2} sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E293B' }}>
                  PLUS
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B' }}>Per Day</Typography>
              </Grid>

              {/* Highlighted PRO Header */}
              <Grid item xs={3} sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    background: 'rgba(109, 83, 244, 0.08)',
                    borderRadius: '16px 16px 0 0',
                    py: 1,
                    border: `2px solid ${BRAND}`,
                    borderBottom: 'none',
                    mb: -2.1,
                  }}
                >
                  <Typography sx={{ fontSize: '0.95rem', fontWeight: 900, color: BRAND }}>
                    PRO
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: BRAND_LIGHT, fontWeight: 600 }}>
                    Per Day
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {/* Feature Rows */}
            {featureRows.map((row, index) => {
              const isLast = index === featureRows.length - 1;
              return (
                <Grid
                  container
                  alignItems="center"
                  key={row.name}
                  sx={{
                    py: 2,
                    borderBottom: !isLast ? '1px solid #F8FAFC' : 'none',
                  }}
                >
                  {/* Left Column: Icon + Name + Description */}
                  <Grid item xs={5}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pl: 1 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          backgroundColor: '#F3F0FF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {row.icon}
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>
                          {row.name}
                        </Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.4 }}>
                          {row.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  {/* FREE Column */}
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    {row.freeType === 'cross' ? (
                      <XIcon sx={{ color: '#94A3B8', fontSize: 18 }} />
                    ) : row.freeType === 'check_gray' ? (
                      <CheckIcon sx={{ color: '#475569', fontSize: 18 }} />
                    ) : (
                      <Typography sx={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600 }}>
                        {row.free}
                      </Typography>
                    )}
                  </Grid>

                  {/* PLUS Column */}
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    {row.plusType === 'check_gray' ? (
                      <CheckIcon sx={{ color: '#475569', fontSize: 18 }} />
                    ) : (
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: '#334155', fontWeight: 700 }}>
                          {row.plus}
                        </Typography>
                        {row.plusSub && (
                          <Typography sx={{ fontSize: '0.7rem', color: '#64748B' }}>
                            {row.plusSub}
                          </Typography>
                        )}
                      </Box>
                    )}
                  </Grid>

                  {/* PRO Column (Highlighted Box Overlay) */}
                  <Grid item xs={3} sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        background: 'rgba(109, 83, 244, 0.04)',
                        py: 1.5,
                        borderLeft: `2px solid ${BRAND}`,
                        borderRight: `2px solid ${BRAND}`,
                        ...(isLast && {
                          borderBottom: `2px solid ${BRAND}`,
                          borderRadius: '0 0 16px 16px',
                        }),
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {row.proType === 'check' ? (
                        <Box
                          sx={{
                            width: 26,
                            height: 26,
                            borderRadius: '50%',
                            backgroundColor: BRAND,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            boxShadow: '0 4px 10px rgba(109, 83, 244, 0.3)',
                          }}
                        >
                          <CheckIcon sx={{ fontSize: 16 }} />
                        </Box>
                      ) : (
                        <Box>
                          <Typography sx={{ fontSize: '1.25rem', color: BRAND, fontWeight: 800, lineHeight: 1 }}>
                            {row.proText}
                          </Typography>
                          {row.proSub && (
                            <Typography sx={{ fontSize: '0.7rem', color: BRAND_LIGHT, fontWeight: 600, mt: 0.3 }}>
                              {row.proSub}
                            </Typography>
                          )}
                        </Box>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              );
            })}
          </Box>
        </Box>
      </Container>

      {/* ─── INVITE FRIENDS REWARD CARD ─────────────────────────────────────── */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          sx={{
            borderRadius: '28px',
            p: { xs: 3, sm: 5 },
            border: `2px solid ${BRAND_LIGHT}`,
            backgroundColor: '#F3F0FF',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(109, 83, 244, 0.15)',
                fontSize: '2rem',
              }}
            >
              💰
            </Box>
            <Box>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', mb: 0.5 }}>
                Invite Friends & Earn Rewards
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#475569' }}>
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
              borderRadius: '24px',
              px: 4,
              py: 1.2,
              fontSize: '0.95rem',
              fontWeight: 800,
              textTransform: 'none',
              boxShadow: '0 8px 24px rgba(109, 83, 244, 0.3)',
              whiteSpace: 'nowrap',
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
                  sx={{ height: 36, filter: 'brightness(0) invert(1)' }}
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
