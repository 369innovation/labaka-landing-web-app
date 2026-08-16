import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { AppleLogoIcon } from './DownloadAppButton';

const BRAND = '#6D53F4';

export default function DownloadAppQR({ title = 'DOWNLOAD LABAKA', subtitle = 'Available on Android and iOS' }) {
  const playStoreUrl = 'https://play.google.com/store';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(playStoreUrl)}&bgcolor=ffffff&color=000000&margin=8`;

  return (
    <Box sx={{ width: '100%' }}>
      {title && (
        <Typography
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
            fontWeight: 800,
            color: '#1a1a2e',
            mb: 0.5,
            letterSpacing: '-0.02em',
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          sx={{
            fontSize: '0.9rem',
            color: 'text.secondary',
            mb: 3,
            textAlign: 'center',
          }}
        >
          {subtitle}
        </Typography>
      )}

      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
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
              <Box sx={{ position: 'absolute', top: 0, left: 0, width: 28, height: 28, borderTop: `3px solid ${BRAND}`, borderLeft: `3px solid ${BRAND}`, borderRadius: '6px 0 0 0' }} />
              <Box sx={{ position: 'absolute', top: 0, right: 0, width: 28, height: 28, borderTop: '3px solid #F5A623', borderRight: '3px solid #F5A623', borderRadius: '0 6px 0 0' }} />
              <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: 28, height: 28, borderBottom: '3px solid #E056FD', borderLeft: '3px solid #E056FD', borderRadius: '0 0 0 6px' }} />
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
            {/* Google Play Badge */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
              <Box
                component="a"
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.2,
                  backgroundColor: '#fff',
                  border: '1px solid #1F2937',
                  color: '#111827',
                  borderRadius: '8px',
                  px: 2,
                  py: 0.8,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: '#F9FAFB',
                    borderColor: '#000',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                <Box component="img" src="/GooglePlayLogo.svg" alt="Google Play" sx={{ height: 20 }} />
                <Box>
                  <Typography sx={{ fontSize: '0.55rem', color: '#4B5563', lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>GET IT ON</Typography>
                  <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, lineHeight: 1.2, color: '#111827' }}>Google Play</Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#6B7280',
                  textAlign: 'center',
                }}
              >
                Tap to Download
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* App Store - Coming Soon */}
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
              <Box sx={{ position: 'absolute', top: 0, left: 0, width: 28, height: 28, borderTop: `3px solid ${BRAND}`, borderLeft: `3px solid ${BRAND}`, borderRadius: '6px 0 0 0' }} />
              <Box sx={{ position: 'absolute', top: 0, right: 0, width: 28, height: 28, borderTop: '3px solid #F5A623', borderRight: '3px solid #F5A623', borderRadius: '0 6px 0 0' }} />
              <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: 28, height: 28, borderBottom: '3px solid #E056FD', borderLeft: '3px solid #E056FD', borderRadius: '0 0 0 6px' }} />
              <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: 28, height: 28, borderBottom: '3px solid #E056FD', borderRight: '3px solid #E056FD', borderRadius: '0 0 6px 0' }} />

              <Box
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: '16px',
                  backgroundColor: '#F3F4F6',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 1.5,
                }}
              >
                <Box
                  component="img"
                  src="/AppleComingSoon.svg"
                  alt="App Store Coming Soon"
                  sx={{
                    width: 110,
                    height: 'auto',
                    mb: 1.5,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#374151',
                    letterSpacing: '0.02em',
                  }}
                >
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* App Store Badge (disabled) */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.2,
                backgroundColor: '#fff',
                border: '1px solid #1F2937',
                color: '#111827',
                borderRadius: '8px',
                px: 2,
                py: 0.8,
                cursor: 'default',
              }}
            >
              <AppleLogoIcon size={20} color="#111827" />
              <Box>
                <Typography sx={{ fontSize: '0.55rem', color: '#4B5563', lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Download on the</Typography>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, lineHeight: 1.2, color: '#111827' }}>App Store</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
