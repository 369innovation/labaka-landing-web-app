import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Modal,
  Slide,
  Button,
  Divider,
} from '@mui/material';
import {
  Close as CloseIcon,
  Info as InfoIcon,
  InfoOutlined as InfoOutlinedIcon,
  AccessTime as TimeIcon,
  FavoriteBorder as HeartIcon,
  PeopleOutline as PeopleIcon,
  Replay as RewindIcon,
} from '@mui/icons-material';

const BRAND = '#6D53F4';
const BRAND_DARK = '#5A3FD6';

const PRO_PERK_LIMITS = [
  {
    icon: <HeartIcon sx={{ fontSize: 22, color: BRAND }} />,
    title: 'Likes',
    desc: 'Like profiles to show interest.',
    limit: '300 per day',
    breakdown: '150 (Stage 1) + 150 (Stage 2)',
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 22, color: BRAND }} />,
    title: 'Connect Requests',
    desc: 'Send a request to connect with someone.',
    limit: '50 per day',
    breakdown: '25 (Stage 1) + 25 (Stage 2)',
  },
  {
    icon: <RewindIcon sx={{ fontSize: 22, color: BRAND }} />,
    title: 'Rewinds',
    desc: 'Undo a previous swipe or profile decision.',
    limit: '100 per day',
    breakdown: '50 (Stage 1) + 50 (Stage 2)',
  },
];

export default function FairUseModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backdropFilter: 'blur(6px)',
        zIndex: 10000,
      }}
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(15, 23, 42, 0.45)',
        },
      }}
    >
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', sm: 540 },
            maxWidth: 540,
            maxHeight: '92vh',
            overflowY: 'auto',
            backgroundColor: '#ffffff',
            borderTopLeftRadius: '28px',
            borderTopRightRadius: '28px',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            mb: 0,
            p: { xs: 2.2, sm: 3 },
            pt: 1.5,
            pb: { xs: 3, sm: 3.5 },
            boxShadow: '0 -16px 50px rgba(0, 0, 0, 0.2)',
            outline: 'none',
          }}
        >
          {/* Drag Handle Bar */}
          <Box
            sx={{
              width: 44,
              height: 4.5,
              borderRadius: 3,
              backgroundColor: '#CBD5E1',
              mx: 'auto',
              mb: 1.8,
            }}
          />

          {/* Close Button */}
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 14,
              right: 14,
              width: 32,
              height: 32,
              color: '#64748B',
              backgroundColor: 'rgba(0,0,0,0.03)',
              '&:hover': {
                backgroundColor: 'rgba(109, 83, 244, 0.08)',
                color: BRAND,
              },
              transition: 'all 0.2s ease',
            }}
          >
            <CloseIcon sx={{ fontSize: 18 }} />
          </IconButton>

          {/* Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 0.8, pr: 4 }}>
            <Box
              sx={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                backgroundColor: BRAND,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <InfoIcon sx={{ fontSize: 18, color: '#ffffff' }} />
            </Box>
            <Typography
              sx={{
                fontSize: { xs: '1.2rem', sm: '1.35rem' },
                fontWeight: 800,
                color: '#0F172A',
                letterSpacing: '-0.01em',
              }}
            >
              How{' '}
              <Box component="span" sx={{ fontWeight: 600, color: '#1E293B' }}>
                Pro Plan
              </Box>{' '}
              works
            </Typography>
          </Box>

          <Typography sx={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.4, mb: 1.6 }}>
            <strong>Pro gives you generous</strong> daily access. Fair-use limits help keep LaBaKa safe and meaningful.
          </Typography>

          {/* Perk Rows */}
          <Box sx={{ mb: 1.8 }}>
            {PRO_PERK_LIMITS.map((item, idx) => (
              <React.Fragment key={item.title}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1.5,
                    py: 0.8,
                  }}
                >
                  {/* Left: Icon + Title & Desc */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: '#F1EFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontSize: '0.76rem', color: '#64748B', mt: 0.2 }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Right: Pill Badge */}
                  <Box
                    sx={{
                      backgroundColor: '#F1EFFF',
                      borderRadius: '12px',
                      py: 0.6,
                      px: 1.4,
                      textAlign: 'center',
                      flexShrink: 0,
                      minWidth: 135,
                    }}
                  >
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, color: BRAND, lineHeight: 1.2 }}>
                      {item.limit}
                    </Typography>
                    <Typography sx={{ fontSize: '0.66rem', color: '#64748B', fontWeight: 500, mt: 0.2 }}>
                      {item.breakdown}
                    </Typography>
                  </Box>
                </Box>

                {idx < PRO_PERK_LIMITS.length - 1 && (
                  <Divider sx={{ my: 0.5, borderColor: '#F1F5F9' }} />
                )}
              </React.Fragment>
            ))}
          </Box>

          {/* First Stage & Daily Limit Info Card */}
          <Box
            sx={{
              p: 1.8,
              borderRadius: '16px',
              backgroundColor: '#F6F5FF',
              display: 'flex',
              alignItems: 'center',
              gap: 1.8,
              mb: 1.8,
            }}
          >
            <Box
              sx={{
                width: 34,
                height: 34,
                borderRadius: '50%',
                border: `1.5px solid ${BRAND}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: BRAND,
                flexShrink: 0,
              }}
            >
              <TimeIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box sx={{ borderLeft: '1.5px solid rgba(109, 83, 244, 0.3)', pl: 1.5 }}>
              <Typography sx={{ fontSize: '0.78rem', color: '#334155', lineHeight: 1.45 }}>
                <strong>First stage:</strong> resets in{' '}
                <Box component="span" sx={{ color: BRAND, fontWeight: 700 }}>
                  2 hours
                </Box>{' '}
                after reaching the first limit.
              </Typography>
              <Typography sx={{ fontSize: '0.78rem', color: '#334155', lineHeight: 1.45, mt: 0.3 }}>
                <strong>Daily limit:</strong> resets at 12:00 AM local time.
              </Typography>
            </Box>
          </Box>

          {/* Footer Disclaimer */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.6, mb: 1.8 }}>
            <InfoOutlinedIcon sx={{ fontSize: 15, color: '#94A3B8' }} />
            <Typography sx={{ fontSize: '0.75rem', color: '#64748B' }}>
              Fair-use limits apply. See{' '}
              <Box
                component="a"
                href="/terms"
                sx={{
                  color: BRAND,
                  fontWeight: 600,
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Fair Use Policy
              </Box>
              .
            </Typography>
          </Box>

          {/* Got it Button */}
          <Button
            onClick={onClose}
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: BRAND,
              color: '#ffffff',
              borderRadius: '25px',
              py: 1.3,
              fontSize: '1rem',
              fontWeight: 700,
              textTransform: 'none',
              boxShadow: '0 8px 24px rgba(109, 83, 244, 0.3)',
              '&:hover': { backgroundColor: BRAND_DARK },
            }}
          >
            Got it
          </Button>
        </Box>
      </Slide>
    </Modal>
  );
}
