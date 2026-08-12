import React from 'react';
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Modal,
  Fade,
} from '@mui/material';
import {
  Close as CloseIcon,
  Apple as AppleIcon,
} from '@mui/icons-material';

const BRAND = '#6D53F4';

export default function DownloadAppModal({ open, onClose }) {
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
        zIndex: 10000,
      }}
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(109, 83, 244, 0.12)',
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
            boxShadow: '0 32px 80px rgba(109, 83, 244, 0.3), 0 8px 32px rgba(0,0,0,0.2)',
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
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
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
                    <Box sx={{ position: 'absolute', top: 0, left: 0, width: 28, height: 28, borderTop: `3px solid ${BRAND}`, borderLeft: `3px solid ${BRAND}`, borderRadius: '6px 0 0 0' }} />
                    <Box sx={{ position: 'absolute', top: 0, right: 0, width: 28, height: 28, borderTop: '3px solid #F5A623', borderRight: '3px solid #F5A623', borderRadius: '0 6px 0 0' }} />
                    <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: 28, height: 28, borderBottom: '3px solid #E056FD', borderLeft: '3px solid #E056FD', borderRadius: '0 0 0 6px' }} />
                    <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: 28, height: 28, borderBottom: '3px solid #E056FD', borderRight: '3px solid #E056FD', borderRadius: '0 0 6px 0' }} />

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

                  {/* App Store Badge (disabled) */}
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
