import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
} from '@mui/material';
import {
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

const BRAND = '#6D53F4';
const BRAND_DARK = '#5A3FD6';
const BRAND_LIGHT = '#8B73FF';

export default function Footer({ onOpenDownloadModal }) {
  const footerLinks = {
    'Quick Links': [
      { label: 'Features', href: '/#features', isHomeScroll: true },
      { label: 'Download', href: '#download', isDownloadAction: true },
    ],
    Legal: [
      { label: 'About Us', href: '/about' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'FAQ', href: '/faq' },
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
        py: { xs: 4, md: 5 },
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
        <Grid container spacing={4}>
          {/* Brand column */}
          <Grid item xs={12} md={6}>
            <Box
              component={Link}
              to="/"
              sx={{ display: 'flex', flexItem: 'center', gap: 1.5, mb: 1.5, textDecoration: 'none', cursor: 'pointer', alignItems: 'center' }}
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
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.88rem',
                lineHeight: 1.6,
                mb: 2.5,
                maxWidth: 340,
              }}
            >
              The all-in-one platform to meet people, discover events, find opportunities, and build
              communities.
            </Typography>
            {/* Social icons */}
            <Box sx={{ display: 'flex', gap: 1.25 }}>
              {socialLinks.map((s) => (
                <IconButton
                  key={s.label}
                  component="a"
                  href={s.href}
                  aria-label={s.label}
                  sx={{
                    color: 'rgba(255,255,255,0.85)',
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    borderRadius: '12px',
                    width: 38,
                    height: 38,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.3)',
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
                  fontSize: '0.95rem',
                  mb: 2,
                  color: '#fff',
                  letterSpacing: '0.04em',
                }}
              >
                {title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                {links.map((link) => {
                  if (link.isDownloadAction) {
                    return (
                      <Typography
                        key={link.label}
                        component="span"
                        onClick={() => onOpenDownloadModal?.()}
                        sx={{
                          color: 'rgba(255,255,255,0.8)',
                          textDecoration: 'none',
                          fontSize: '0.88rem',
                          '&:hover': { color: '#fff', textDecoration: 'underline' },
                          transition: 'color 0.2s ease',
                          cursor: 'pointer',
                        }}
                      >
                        {link.label}
                      </Typography>
                    );
                  }

                  return (
                    <Typography
                      key={link.label}
                      component={Link}
                      to={link.href}
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                        textDecoration: 'none',
                        fontSize: '0.88rem',
                        '&:hover': { color: '#fff', textDecoration: 'underline' },
                        transition: 'color 0.2s ease',
                        cursor: 'pointer',
                      }}
                    >
                      {link.label}
                    </Typography>
                  );
                })}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom bar */}
        <Box
          sx={{
            mt: 4,
            pt: 2.5,
            borderTop: '1px solid rgba(255,255,255,0.18)',
            textAlign: 'center',
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.84rem' }}>
            © {new Date().getFullYear()} Labaka. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
