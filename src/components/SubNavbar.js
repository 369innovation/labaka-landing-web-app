import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Container } from '@mui/material';

const BRAND = '#6D53F4';

const SUB_NAV_LINKS = [
  { label: 'POLICY & FAQ', path: '/faq' },
  { label: 'PRIVACY POLICY', path: '/privacy' },
  { label: 'TERMS & CONDITIONS', path: '/terms' },
];

export default function SubNavbar() {
  const location = useLocation();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 96,
        left: 0,
        right: 0,
        zIndex: 1090,
        px: 2,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', pointerEvents: 'auto' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 0.5, sm: 1 },
            py: 0.75,
            px: { xs: 1, sm: 2 },
            borderRadius: '30px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 4px 20px rgba(109, 83, 244, 0.1)',
            border: '1px solid rgba(109, 83, 244, 0.15)',
            maxWidth: '100%',
            overflowX: 'auto',
          }}
        >
          {SUB_NAV_LINKS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Box
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: { xs: '0.75rem', sm: '0.82rem' },
                  px: { xs: 1.5, sm: 2.2 },
                  py: 0.75,
                  borderRadius: '20px',
                  color: isActive ? '#ffffff' : '#5a6175',
                  backgroundColor: isActive ? BRAND : 'transparent',
                  boxShadow: isActive ? '0 2px 10px rgba(109, 83, 244, 0.3)' : 'none',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    color: isActive ? '#ffffff' : BRAND,
                    backgroundColor: isActive ? BRAND : 'rgba(109, 83, 244, 0.08)',
                  },
                }}
              >
                {item.label}
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
