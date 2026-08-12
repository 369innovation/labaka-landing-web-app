import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import DownloadAppButton from './DownloadAppButton';

const BRAND = '#6D53F4';

const NAV_LINKS = [
  { label: 'POLICY & FAQ', path: '/faq' },
  { label: 'UPGRADE', path: '/upgrade' },
  { label: 'ABOUT US', path: '/about' },
  { label: 'CONTACT US', path: '/contact' },
];

export default function Navbar({ onOpenDownloadModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = useCallback(
    (e, link) => {
      setMobileOpen(false);
      if (link.isScroll) {
        e.preventDefault();
        if (location.pathname !== '/') {
          navigate('/' + link.path);
        } else {
          const target = document.querySelector(link.path);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    },
    [location.pathname, navigate]
  );

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
        px: { xs: 1.5, md: 3 },
      }}
    >
      <Container maxWidth="lg">
        {/* Floating rounded navbar */}
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
            backgroundColor: scrolled
              ? 'rgba(255,255,255,0.92)'
              : 'rgba(255,255,255,0.85)',
            boxShadow: scrolled
              ? '0 4px 24px rgba(109,83,244,0.12), 0 1px 4px rgba(0,0,0,0.06)'
              : '0 2px 16px rgba(0,0,0,0.06)',
            border: '1px solid rgba(255,255,255,0.5)',
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              cursor: 'pointer',
              flexShrink: 0,
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              src="/LBK FINAL LOGO PNG (2) 3.svg"
              alt="Labaka Logo"
              sx={{
                height: { xs: 40, md: 48 },
                width: 'auto',
                objectFit: 'contain',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                letterSpacing: '0.2em',
                color: '#1a1a2e',
                fontSize: { xs: '1rem', md: '1.15rem' },
              }}
            >
              LABAKA
            </Typography>
          </Box>

          {/* Desktop Nav Links */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { md: 2.5, lg: 4 },
              }}
            >
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Typography
                    key={link.label}
                    component={Link}
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link)}
                    sx={{
                      textDecoration: 'none',
                      color: isActive ? BRAND : '#1a1a2e',
                      fontWeight: isActive ? 700 : 600,
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
                        width: isActive ? '80%' : 0,
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
                );
              })}
            </Box>
          )}

          {/* Right Action: Download App Button / Mobile Menu Toggle */}
          {!isMobile ? (
            <DownloadAppButton onClick={onOpenDownloadModal} />
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
            backgroundColor: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(20px)',
            p: 3,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Typography sx={{ fontWeight: 800, color: BRAND, letterSpacing: '0.15em' }}>
            LABAKA
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ mb: 2 }}>
          {NAV_LINKS.map((link) => (
            <ListItem
              button
              key={link.label}
              component={Link}
              to={link.path}
              onClick={(e) => handleNavClick(e, link)}
              sx={{
                borderRadius: '12px',
                mb: 1,
                backgroundColor:
                  location.pathname === link.path
                    ? 'rgba(109, 83, 244, 0.08)'
                    : 'transparent',
              }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  fontWeight: location.pathname === link.path ? 700 : 600,
                  color: location.pathname === link.path ? BRAND : '#1a1a2e',
                  fontSize: '0.9rem',
                }}
              />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 2 }}>
          <DownloadAppButton
            onClick={() => {
              setMobileOpen(false);
              onOpenDownloadModal?.();
            }}
            variant="simple"
            sx={{ width: '100%', py: 1.2 }}
          />
        </Box>
      </Drawer>
    </Box>
  );
}
