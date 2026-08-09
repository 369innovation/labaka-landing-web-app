import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  TextField,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Modal,
  Fade,
  InputAdornment,
} from '@mui/material';
import {
  PersonOutline as PersonIcon,
  EmailOutlined as EmailIcon,
  LocalOfferOutlined as TagIcon,
  CreateOutlined as PencilIcon,
  Menu as HamburgerMenuIcon,
  Close as CloseMenuIcon,
  Close as CloseIcon,
  Apple as AppleIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
} from '@mui/icons-material';
import { toast } from 'react-toastify';

// ─── Brand Colors ───────────────────────────────────────────────────────
const BRAND = '#6D53F4';
const BRAND_LIGHT = '#8B73FF';
const BRAND_DARK = '#5A3FD6';
const CARD_BG = '#EFEFFE';

const NAV_LINKS = [
  { label: 'POLICY & FAQ', href: '/Labaka/PrivacyPolicy/', isScroll: false },
  { label: 'UPGRADE', href: '/upgrade', isScroll: false },
  { label: 'ABOUT US', href: '/Labaka/AboutUs/', isScroll: false },
  { label: 'CONTACT US', href: '/contact', isScroll: false, active: true },
];

const SUBJECT_OPTIONS = [
  'General Enquiry',
  'Technical Support',
  'Report an Issue',
  'Partnership',
  'Business',
  'Media',
  'Feedback',
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
      BackdropProps={{
        sx: { backgroundColor: 'rgba(109, 83, 244, 0.08)' },
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
            outline: 'none',
            backgroundColor: '#ffffff',
            p: { xs: 3, sm: 4 },
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              width: 36,
              height: 36,
              backgroundColor: 'rgba(0,0,0,0.04)',
              '&:hover': { backgroundColor: 'rgba(109, 83, 244, 0.1)' },
            }}
          >
            <CloseIcon sx={{ fontSize: 20, color: '#555' }} />
          </IconButton>

          <Typography sx={{ fontSize: '1.4rem', fontWeight: 800, color: '#1a1a2e', mb: 1 }}>
            DOWNLOAD LABAKA
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', color: '#666', mb: 3 }}>
            Scan the QR code or use the links below to download the app directly to your mobile device.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Box
              component="img"
              src={qrCodeUrl}
              alt="Scan to download"
              sx={{ width: 180, height: 180, borderRadius: '16px', border: '1px solid #eee', p: 1 }}
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              onClick={onClose}
              startIcon={<AppleIcon />}
              sx={{
                borderRadius: '50px',
                backgroundColor: '#000',
                color: '#fff',
                px: 3,
                py: 1.2,
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': { backgroundColor: '#222' },
              }}
            >
              App Store
            </Button>
            <Button
              component="a"
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<PlayStoreIcon />}
              sx={{
                borderRadius: '50px',
                backgroundColor: BRAND,
                color: '#fff',
                px: 3,
                py: 1.2,
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': { backgroundColor: BRAND_DARK },
              }}
            >
              Google Play
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

// ─── MAIN CONTACT US PAGE COMPONENT ─────────────────────────────────────
export default function ContactUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!subject) newErrors.subject = 'Please select a subject';
    if (!message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Thank you! Your message has been sent successfully. We'll get back to you soon.");
      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        color: '#1a1a2e',
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ─── HEADER / NAVBAR ────────────────────────────────────────────── */}
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1100,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          py: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Brand Logo */}
            <Box
              component="a"
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
              }}
            >
              <Box
                component="img"
                src="/LBK FINAL LOGO PNG (2) 3.svg"
                alt="LABAKA Logo"
                sx={{ height: 42, width: 'auto' }}
              />
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: '1.35rem',
                  letterSpacing: '0.15em',
                  color: '#1e1b4b',
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                LABAKA
              </Typography>
            </Box>

            {/* Desktop Navigation Links */}
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
                    fontSize: '0.875rem',
                    fontWeight: link.active ? 800 : 700,
                    letterSpacing: '0.05em',
                    color: link.active ? BRAND : '#4c4d6d',
                    textDecoration: 'none',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: BRAND,
                    },
                    '&::after': link.active
                      ? {
                          content: '""',
                          position: 'absolute',
                          bottom: -6,
                          left: 0,
                          right: 0,
                          height: 2.5,
                          borderRadius: 2,
                          backgroundColor: BRAND,
                        }
                      : {},
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>

            {/* Header Right CTA */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Button
                variant="contained"
                onClick={() => setDownloadModalOpen(true)}
                startIcon={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AppleIcon sx={{ fontSize: 18 }} />
                    <PlayStoreIcon sx={{ width: 16, height: 16 }} />
                  </Box>
                }
                sx={{
                  borderRadius: '50px',
                  backgroundColor: BRAND,
                  color: '#fff',
                  px: { xs: 2.5, sm: 3.5 },
                  py: 1.1,
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  boxShadow: '0 8px 20px rgba(109, 83, 244, 0.28)',
                  '&:hover': {
                    backgroundColor: BRAND_DARK,
                    boxShadow: '0 12px 28px rgba(109, 83, 244, 0.4)',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Download App
              </Button>

              {/* Mobile Hamburger Toggle */}
              <IconButton
                onClick={() => setMobileMenuOpen(true)}
                sx={{ display: { xs: 'flex', md: 'none' }, color: '#1e1b4b' }}
              >
                <HamburgerMenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Mobile Nav Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{ sx: { width: 280, p: 2 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton onClick={() => setMobileMenuOpen(false)}>
            <CloseMenuIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_LINKS.map((link) => (
            <ListItem
              key={link.label}
              component="a"
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              sx={{
                borderRadius: '8px',
                mb: 1,
                backgroundColor: link.active ? 'rgba(109, 83, 244, 0.08)' : 'transparent',
              }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  fontWeight: link.active ? 800 : 600,
                  color: link.active ? BRAND : '#1e1b4b',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* ─── MAIN CONTENT SECTION ────────────────────────────────────────── */}
      <Box component="main" sx={{ flexGrow: 1, py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            {/* Pill Tag */}
            <Box
              sx={{
                display: 'inline-block',
                px: 2.2,
                py: 0.75,
                borderRadius: '20px',
                backgroundColor: 'rgba(109, 83, 244, 0.1)',
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  color: BRAND,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                CONTACT US
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
                fontWeight: 800,
                color: '#1a1a2e',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              We’d Love to
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
                fontWeight: 800,
                background: 'linear-gradient(90deg, #6D53F4 0%, #9F85FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                mb: 2,
              }}
            >
              Hear From You
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                color: '#555870',
                maxWidth: 580,
                lineHeight: 1.6,
              }}
            >
              Whether you have a question, feedback, partnership inquiry, or simply want to say
              hello – we’re here to listen, accept , correct & help.
            </Typography>
          </Box>

          {/* Grid Layout: Left Form + Right Visuals */}
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
            {/* ─── LEFT COLUMN: FORM & FAQ CARD ──────────────────────────── */}
            <Grid item xs={12} md={6} lg={5.5}>
              {/* Message Box */}
              <Box
                sx={{
                  backgroundColor: CARD_BG,
                  borderRadius: '24px',
                  p: { xs: 3, sm: 4 },
                  boxShadow: '0 12px 36px rgba(109, 83, 244, 0.06)',
                  border: '1px solid rgba(109, 83, 244, 0.08)',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#1e1b4b',
                    mb: 3,
                  }}
                >
                  Send us a message
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  {/* Full Name */}
                  <Box sx={{ mb: 2.5 }}>
                    <Typography
                      sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#4c4d6d', mb: 0.75 }}
                    >
                      Full Name <Typography component="span" sx={{ color: '#ef4444' }}>*</Typography>
                    </Typography>
                    <TextField
                      fullWidth
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      error={Boolean(errors.fullName)}
                      helperText={errors.fullName}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
                          </InputAdornment>
                        ),
                        sx: {
                          backgroundColor: '#ffffff',
                          borderRadius: '12px',
                          fontSize: '0.9rem',
                          '& fieldset': { border: '1px solid rgba(0,0,0,0.08)' },
                          '&:hover fieldset': { borderColor: BRAND },
                          '&.Mui-focused fieldset': { borderColor: BRAND },
                        },
                      }}
                    />
                  </Box>

                  {/* Email Address */}
                  <Box sx={{ mb: 2.5 }}>
                    <Typography
                      sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#4c4d6d', mb: 0.75 }}
                    >
                      Email Address <Typography component="span" sx={{ color: '#ef4444' }}>*</Typography>
                    </Typography>
                    <TextField
                      fullWidth
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
                          </InputAdornment>
                        ),
                        sx: {
                          backgroundColor: '#ffffff',
                          borderRadius: '12px',
                          fontSize: '0.9rem',
                          '& fieldset': { border: '1px solid rgba(0,0,0,0.08)' },
                          '&:hover fieldset': { borderColor: BRAND },
                          '&.Mui-focused fieldset': { borderColor: BRAND },
                        },
                      }}
                    />
                  </Box>

                  {/* Subject */}
                  <Box sx={{ mb: 2.5 }}>
                    <Typography
                      sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#4c4d6d', mb: 0.75 }}
                    >
                      Subject <Typography component="span" sx={{ color: '#ef4444' }}>*</Typography>
                    </Typography>
                    <TextField
                      select
                      fullWidth
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      displayEmpty
                      error={Boolean(errors.subject)}
                      helperText={errors.subject}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <TagIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
                          </InputAdornment>
                        ),
                        sx: {
                          backgroundColor: '#ffffff',
                          borderRadius: '12px',
                          fontSize: '0.9rem',
                          '& fieldset': { border: '1px solid rgba(0,0,0,0.08)' },
                          '&:hover fieldset': { borderColor: BRAND },
                          '&.Mui-focused fieldset': { borderColor: BRAND },
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        <Typography sx={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                          Select a subject
                        </Typography>
                      </MenuItem>
                      {SUBJECT_OPTIONS.map((option) => (
                        <MenuItem key={option} value={option} sx={{ fontSize: '0.9rem' }}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>

                  {/* Message */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#4c4d6d', mb: 0.75 }}
                    >
                      Message <Typography component="span" sx={{ color: '#ef4444' }}>*</Typography>
                    </Typography>
                    <Box sx={{ position: 'relative' }}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => {
                          if (e.target.value.length <= 500) {
                            setMessage(e.target.value);
                          }
                        }}
                        placeholder="Tell us how we can help..."
                        error={Boolean(errors.message)}
                        helperText={errors.message}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                              <PencilIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
                            </InputAdornment>
                          ),
                          sx: {
                            backgroundColor: '#ffffff',
                            borderRadius: '12px',
                            fontSize: '0.9rem',
                            pb: 3, // space for char counter
                            '& fieldset': { border: '1px solid rgba(0,0,0,0.08)' },
                            '&:hover fieldset': { borderColor: BRAND },
                            '&.Mui-focused fieldset': { borderColor: BRAND },
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          position: 'absolute',
                          bottom: 10,
                          right: 14,
                          fontSize: '0.75rem',
                          color: '#94a3b8',
                          fontWeight: 500,
                          pointerEvents: 'none',
                        }}
                      >
                        {message.length}/500
                      </Typography>
                    </Box>
                  </Box>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      borderRadius: '50px',
                      backgroundColor: BRAND,
                      color: '#ffffff',
                      py: 1.6,
                      fontSize: '1rem',
                      fontWeight: 700,
                      textTransform: 'none',
                      boxShadow: '0 10px 25px rgba(109, 83, 244, 0.35)',
                      '&:hover': {
                        backgroundColor: BRAND_DARK,
                        boxShadow: '0 14px 30px rgba(109, 83, 244, 0.45)',
                        transform: 'translateY(-1px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Send Message
                  </Button>

                  {/* Sub-label */}
                  <Typography
                    sx={{
                      textAlign: 'center',
                      color: '#7b7d9c',
                      fontSize: '0.8rem',
                      mt: 1.75,
                      fontWeight: 500,
                    }}
                  >
                    We'll get back to you as soon as possible.
                  </Typography>
                </Box>
              </Box>

              {/* Instant Answer FAQ Box */}
              <Box
                sx={{
                  mt: 3.5,
                  backgroundColor: CARD_BG,
                  borderRadius: '24px',
                  p: { xs: 3, sm: 3.5 },
                  border: '1px solid rgba(109, 83, 244, 0.08)',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#1e1b4b',
                    mb: 0.75,
                  }}
                >
                  Need an instant answer?
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    color: '#555870',
                    mb: 2.5,
                    lineHeight: 1.5,
                  }}
                >
                  Most questions are already answered in our FAQ section.
                </Typography>
                <Button
                  component="a"
                  href="/Labaka/Faqs/"
                  variant="outlined"
                  sx={{
                    borderRadius: '50px',
                    borderColor: BRAND,
                    color: BRAND,
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    borderWidth: 1.5,
                    '&:hover': {
                      borderWidth: 1.5,
                      borderColor: BRAND_DARK,
                      backgroundColor: 'rgba(109, 83, 244, 0.06)',
                    },
                  }}
                >
                  View FAQ's →
                </Button>
              </Box>
            </Grid>

            {/* ─── RIGHT COLUMN: GRAPHICS & ILLUSTRATIONS ────────────────── */}
            <Grid item xs={12} md={6} lg={6.5}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { xs: 4, md: 6 },
                  pl: { md: 4 },
                }}
              >
                {/* 3D Email Envelope Illustration */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    mt: { md: -22, lg: -26 },
                  }}
                >
                  <Box
                    component="img"
                    src="/Email.svg"
                    alt="Floating 3D Email Envelope"
                    sx={{
                      width: '100%',
                      maxWidth: { xs: 340, sm: 420, md: 460 },
                      height: 'auto',
                      objectFit: 'contain',
                      animation: 'floatEmail 4s ease-in-out infinite',
                      '@keyframes floatEmail': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-12px)' },
                      },
                    }}
                  />
                </Box>

                {/* Location Pins Radar Component */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component="img"
                    src="/MeetPeopleLocation icons.svg"
                    alt="Radar location pins overlay"
                    sx={{
                      width: '100%',
                      maxWidth: { xs: 360, sm: 440, md: 480 },
                      height: 'auto',
                      objectFit: 'contain',
                      animation: 'floatPins 3.5s ease-in-out infinite',
                      '@keyframes floatPins': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-8px)' },
                      },
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* ─── BOTTOM DOWNLOAD BANNER ─────────────────────────────────── */}
          <Box
            sx={{
              mt: { xs: 8, md: 12 },
              mb: 4,
              borderRadius: '28px',
              background: "#230865 url('/AboutBG.png') no-repeat center center / cover",
              color: '#ffffff',
              overflow: 'hidden',
              position: 'relative',
              p: { xs: 4, sm: 6, md: 7 },
              boxShadow: '0 24px 60px rgba(58, 20, 142, 0.4)',
            }}
          >
            {/* Background Orbs */}
            <Box
              sx={{
                position: 'absolute',
                width: 450,
                height: 450,
                top: -100,
                right: -50,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(99, 102, 241, 0) 70%)',
                pointerEvents: 'none',
              }}
            />

            <Grid container spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 2 }}>
              {/* Left Column */}
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                  <Box
                    component="img"
                    src="/LBK FINAL LOGO PNG (2) 3.svg"
                    alt="LABAKA Logo"
                    sx={{ height: 36, filter: 'brightness(1.2)' }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      letterSpacing: '0.18em',
                      color: '#ffffff',
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    LABAKA
                  </Typography>
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem' },
                    fontWeight: 800,
                    lineHeight: 1.15,
                    mb: 2,
                    letterSpacing: '-0.02em',
                    color: '#ffffff',
                  }}
                >
                  Ready to connect{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(90deg, #D8B4FE 0%, #C084FC 50%, #E879F9 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'block',
                    }}
                  >
                    with people nearby?
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                    color: 'rgba(255, 255, 255, 0.82)',
                    mb: 4,
                    maxWidth: 460,
                    lineHeight: 1.6,
                  }}
                >
                  Download LaBaKa today and start discovering people, opportunities, and experiences around you.
                </Typography>

                {/* App Store Buttons */}
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    onClick={() => setDownloadModalOpen(true)}
                    variant="contained"
                    startIcon={
                      <Box
                        component="img"
                        src="/Apple.svg"
                        alt="Apple"
                        sx={{ width: 22, height: 24 }}
                      />
                    }
                    sx={{
                      borderRadius: '14px',
                      backgroundColor: '#ffffff',
                      color: '#000000',
                      px: 3,
                      py: 1.2,
                      textTransform: 'none',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                      '&:hover': {
                        backgroundColor: '#ffffff',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Box sx={{ textAlign: 'left', lineHeight: 1.1 }}>
                      <Typography sx={{ fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', color: '#333' }}>
                        GET IT ON
                      </Typography>
                      <Typography sx={{ fontSize: '1.05rem', fontWeight: 800, color: '#000' }}>App Store</Typography>
                    </Box>
                  </Button>

                  <Button
                    onClick={() => setDownloadModalOpen(true)}
                    variant="contained"
                    startIcon={
                      <Box
                        component="img"
                        src="/GooglePlayLogo.svg"
                        alt="Google Play"
                        sx={{ width: 22, height: 24 }}
                      />
                    }
                    sx={{
                      borderRadius: '14px',
                      backgroundColor: '#ffffff',
                      color: '#000000',
                      px: 3,
                      py: 1.2,
                      textTransform: 'none',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                      '&:hover': {
                        backgroundColor: '#ffffff',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Box sx={{ textAlign: 'left', lineHeight: 1.1 }}>
                      <Typography sx={{ fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', color: '#333' }}>
                        GET IT ON
                      </Typography>
                      <Typography sx={{ fontSize: '1.05rem', fontWeight: 800, color: '#000' }}>Google Play</Typography>
                    </Box>
                  </Button>
                </Box>
              </Grid>

              {/* Right Column: Phone Mockup & Floating Avatars */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: { xs: 360, sm: 440 },
                  }}
                >
                  {/* Floating Avatars Left Side */}
                  <Box
                    component="img"
                    src="/AboutUsAvatar1.svg"
                    alt="User Avatar 1"
                    sx={{
                      position: 'absolute',
                      top: '6%',
                      left: { xs: '2%', sm: '12%' },
                      width: { xs: 52, sm: 64 },
                      height: { xs: 52, sm: 64 },
                      borderRadius: '50%',
                      padding: '3px',
                      background: 'linear-gradient(135deg, #C084FC 0%, #818CF8 100%)',
                      boxShadow: '0 0 24px rgba(192, 132, 252, 0.75)',
                      zIndex: 3,
                    }}
                  />
                  <Box
                    component="img"
                    src="/AboutUsAvatar2.svg"
                    alt="User Avatar 2"
                    sx={{
                      position: 'absolute',
                      top: '40%',
                      left: { xs: '0%', sm: '14%' },
                      width: { xs: 52, sm: 64 },
                      height: { xs: 52, sm: 64 },
                      borderRadius: '50%',
                      padding: '3px',
                      background: 'linear-gradient(135deg, #C084FC 0%, #818CF8 100%)',
                      boxShadow: '0 0 24px rgba(192, 132, 252, 0.75)',
                      zIndex: 3,
                    }}
                  />
                  <Box
                    component="img"
                    src="/AboutUsAvatar3.svg"
                    alt="User Avatar 3"
                    sx={{
                      position: 'absolute',
                      bottom: '10%',
                      left: { xs: '2%', sm: '10%' },
                      width: { xs: 52, sm: 64 },
                      height: { xs: 52, sm: 64 },
                      borderRadius: '50%',
                      padding: '3px',
                      background: 'linear-gradient(135deg, #C084FC 0%, #818CF8 100%)',
                      boxShadow: '0 0 24px rgba(192, 132, 252, 0.75)',
                      zIndex: 3,
                    }}
                  />

                  {/* Phone Mockup Image */}
                  <Box
                    component="img"
                    src="/AboutUsPhoneMockup.png"
                    alt="Labaka Phone App"
                    sx={{
                      width: '100%',
                      maxWidth: { xs: 210, sm: 260 },
                      height: 'auto',
                      objectFit: 'contain',
                      position: 'relative',
                      zIndex: 2,
                      filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.45))',
                    }}
                  />

                  {/* Floating Avatars Right Side */}
                  <Box
                    component="img"
                    src="/AboutUsAvatar4.svg"
                    alt="User Avatar 4"
                    sx={{
                      position: 'absolute',
                      top: '18%',
                      right: { xs: '2%', sm: '4%' },
                      width: { xs: 52, sm: 64 },
                      height: { xs: 52, sm: 64 },
                      borderRadius: '50%',
                      padding: '3px',
                      background: 'linear-gradient(135deg, #C084FC 0%, #818CF8 100%)',
                      boxShadow: '0 0 24px rgba(192, 132, 252, 0.75)',
                      zIndex: 3,
                    }}
                  />
                  <Box
                    component="img"
                    src="/AboutUsAvatar5.svg"
                    alt="User Avatar 5"
                    sx={{
                      position: 'absolute',
                      top: '48%',
                      right: { xs: '0%', sm: '2%' },
                      width: { xs: 52, sm: 64 },
                      height: { xs: 52, sm: 64 },
                      borderRadius: '50%',
                      padding: '3px',
                      background: 'linear-gradient(135deg, #C084FC 0%, #818CF8 100%)',
                      boxShadow: '0 0 24px rgba(192, 132, 252, 0.75)',
                      zIndex: 3,
                    }}
                  />
                  <Box
                    component="img"
                    src="/AboutUsAvatar6.svg"
                    alt="User Avatar 6"
                    sx={{
                      position: 'absolute',
                      bottom: '12%',
                      right: { xs: '2%', sm: '4%' },
                      width: { xs: 52, sm: 64 },
                      height: { xs: 52, sm: 64 },
                      borderRadius: '50%',
                      padding: '3px',
                      background: 'linear-gradient(135deg, #C084FC 0%, #818CF8 100%)',
                      boxShadow: '0 0 24px rgba(192, 132, 252, 0.75)',
                      zIndex: 3,
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* ─── FOOTER ────────────────────────────────────────────────────── */}
      <Box
        component="footer"
        sx={{
          py: { xs: 4, md: 6 },
          background: `linear-gradient(135deg, #3a1f8e 0%, ${BRAND_DARK} 30%, ${BRAND} 60%, ${BRAND_LIGHT} 100%)`,
          position: 'relative',
          overflow: 'hidden',
          color: '#fff',
          mt: 'auto',
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
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {/* Brand column */}
            <Grid item xs={12} md={6}>
              <Box
                component="a"
                href="/Labaka/home"
                sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, textDecoration: 'none' }}
              >
                <Box
                  component="img"
                  src="/LBK FINAL LOGO PNG (2) 3.svg"
                  alt="Labaka Logo"
                  sx={{ height: 38, width: 'auto', objectFit: 'contain', filter: 'brightness(1.2)' }}
                />
                <Typography
                  sx={{
                    fontWeight: 800,
                    letterSpacing: '0.15em',
                    fontSize: '1.2rem',
                    color: '#fff',
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  LABAKA
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  mb: 2.5,
                  maxWidth: 320,
                }}
              >
                The all-in-one platform to meet people, discover events, find opportunities, and build communities.
              </Typography>
              {/* Social icons */}
              <Box sx={{ display: 'flex', gap: 1.2 }}>
                {[
                  { icon: <InstagramIcon sx={{ fontSize: 18 }} />, href: '#', label: 'Instagram' },
                  { icon: <TwitterIcon sx={{ fontSize: 18 }} />, href: '#', label: 'Twitter' },
                  { icon: <FacebookIcon sx={{ fontSize: 18 }} />, href: '#', label: 'Facebook' },
                  { icon: <LinkedInIcon sx={{ fontSize: 18 }} />, href: '#', label: 'LinkedIn' },
                ].map((s) => (
                  <IconButton
                    key={s.label}
                    component="a"
                    href={s.href}
                    aria-label={s.label}
                    sx={{
                      color: '#fff',
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      borderRadius: '12px',
                      width: 38,
                      height: 38,
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.3)',
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

            {/* Quick Links Column */}
            <Grid item xs={6} sm={3} md={3}>
              <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', mb: 2, color: '#fff' }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                <Typography component="a" href="/Labaka/home#features" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff', textDecoration: 'underline' } }}>Features</Typography>
                <Typography component="a" href="/Labaka/home#download" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff', textDecoration: 'underline' } }}>Download</Typography>
              </Box>
            </Grid>

            {/* Legal Column */}
            <Grid item xs={6} sm={3} md={3}>
              <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', mb: 2, color: '#fff' }}>
                Legal
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                <Typography component="a" href="/Labaka/AboutUs/" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff', textDecoration: 'underline' } }}>About Us</Typography>
                <Typography component="a" href="/Labaka/PrivacyPolicy/" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff', textDecoration: 'underline' } }}>Privacy Policy</Typography>
                <Typography component="a" href="/Labaka/terms-and-conditions/" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff', textDecoration: 'underline' } }}>Terms &amp; Conditions</Typography>
                <Typography component="a" href="/Labaka/Faqs/" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#fff', textDecoration: 'underline' } }}>FAQ</Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Bottom Bar */}
          <Box
            sx={{
              mt: 4,
              pt: 3,
              borderTop: '1px solid rgba(255,255,255,0.15)',
              textAlign: 'center',
            }}
          >
            <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
              © 2026 Labaka. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Download Modal */}
      <DownloadAppModal open={downloadModalOpen} onClose={() => setDownloadModalOpen(false)} />
    </Box>
  );
}
