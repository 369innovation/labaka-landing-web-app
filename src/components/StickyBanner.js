import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import {
  ChevronRight as ChevronRightIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import DownloadAppModal from './DownloadAppModal';

export default function StickyBanner() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleOpen = () => setDownloadModalOpen(true);
  const handleClose = () => setDownloadModalOpen(false);

  if (dismissed) return <DownloadAppModal open={downloadModalOpen} onClose={handleClose} />;

  return (
    <>
      {/* ─── STICKY BOTTOM BANNER ────────────────────────────────────────────── */}
      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: 12, sm: 20 },
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          width: { xs: 'calc(100% - 24px)', sm: 'calc(100% - 40px)', md: '92%' },
          maxWidth: '1080px',
          background: 'linear-gradient(100deg, #4C1D95 0%, #6D28D9 25%, #7C3AED 50%, #8B5CF6 75%, #4C1D95 100%)',
          borderRadius: { xs: '20px', sm: '28px' },
          boxShadow: '0 12px 40px rgba(109, 40, 217, 0.4), 0 0 20px rgba(139, 92, 246, 0.25)',
          border: '1px solid rgba(196, 181, 253, 0.3)',
          padding: { xs: '14px 16px 12px', sm: '12px 24px' },
          display: 'flex',
          alignItems: 'center',
          backdropFilter: 'blur(12px)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'stretch', sm: 'center' },
            width: '100%',
            justifyContent: 'space-between',
            gap: { xs: 1.5, sm: 2 },
            position: 'relative',
          }}
        >
          {/* Left Side: Rocket + Text */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1.5, sm: 2.5 },
              minWidth: 0,
              pr: { xs: 4, sm: 0 },
            }}
          >
            <Box
              component="img"
              src="/Rocket.png"
              alt="Rocket"
              sx={{
                width: { xs: 44, sm: 52 },
                height: { xs: 44, sm: 52 },
                objectFit: 'contain',
                flexShrink: 0,
              }}
            />

            {/* Headline & Subtitle */}
            <Box sx={{ minWidth: 0 }}>
              <Typography
                component="div"
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: { xs: '0.95rem', sm: '1.15rem', md: '1.25rem' },
                  letterSpacing: '-0.01em',
                  lineHeight: 1.25,
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '5px',
                }}
              >
                <span>LaBaKa is</span>{' '}
                <Box
                  component="span"
                  sx={{
                    color: '#E9D5FF',
                    fontWeight: 700,
                    textShadow: '0 0 12px rgba(233, 213, 255, 0.4)',
                  }}
                >
                  coming soon!
                </Box>{' '}
                <span>✨</span>
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.78)',
                  fontSize: { xs: '0.74rem', sm: '0.85rem', md: '0.9rem' },
                  fontWeight: 400,
                  mt: 0.5,
                  whiteSpace: { xs: 'normal', sm: 'nowrap' },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: 'block',
                }}
              >
                We&apos;re building the next way to connect in real time.
              </Typography>
            </Box>
          </Box>

          {/* Right Side: Action Button + Close */}
          <Box 
            sx={{ 
              flexShrink: 0, 
              display: 'flex', 
              alignItems: 'center', 
              gap: { xs: 0.5, sm: 1.5 },
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            <Button
              onClick={handleOpen}
              fullWidth
              sx={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: { xs: '0.82rem', sm: '0.88rem', md: '0.95rem' },
                textTransform: 'none',
                padding: { xs: '10px 20px', sm: '10px 22px' },
                borderRadius: '50px',
                border: '1.5px solid rgba(255, 255, 255, 0.35)',
                boxShadow: '0 0 12px rgba(192, 132, 252, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                whiteSpace: 'nowrap',
                transition: 'all 0.25s ease-in-out',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5,
                backdropFilter: 'blur(8px)',
                width: '100%',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.14) 100%)',
                  boxShadow: '0 0 20px rgba(192, 132, 252, 0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
                  transform: 'translateY(-1px) scale(1.01)',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&:active': {
                  transform: 'translateY(0) scale(0.99)',
                },
              }}
            >
              Get Early Access <ChevronRightIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
            </Button>

            {/* Close / Dismiss button */}
            <IconButton
              onClick={() => setDismissed(true)}
              aria-label="Dismiss banner"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                position: { xs: 'absolute', sm: 'static' },
                top: { xs: -2, sm: 'auto' },
                right: { xs: -6, sm: 'auto' },
                width: { xs: 32, sm: 36 },
                height: { xs: 32, sm: 36 },
                '&:hover': {
                  color: '#FFFFFF',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <CloseIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* ─── DOWNLOAD APP QR MODAL ────────────────────────────────────────── */}
      <DownloadAppModal open={downloadModalOpen} onClose={handleClose} />
    </>
  );
}
