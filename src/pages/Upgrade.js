import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
} from '@mui/material';
import {
  Check as CheckIcon,
  WorkspacePremium as CrownIcon,
  CardGiftcard as RibbonIcon,
  WorkOutline as BriefcaseIcon,
} from '@mui/icons-material';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloadAppButton from '../components/DownloadAppButton';
import DownloadAppModal from '../components/DownloadAppModal';

// ─── Brand Colors ───────────────────────────────────────────────────────
const BRAND = '#6D53F4';
const BRAND_LIGHT = '#8B73FF';
const BRAND_DARK = '#5A3FD6';





// ─── Circle Badge Component for Comparison Table ───────────────────────
const CircleBadge = ({ variant, text }) => {
  if (variant === 'free') {
    return (
      <Box
        sx={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          border: '1.5px solid #A0AEC0',
          color: '#718096',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.82rem',
          fontWeight: 700,
          mx: 'auto',
        }}
      >
        {text}
      </Box>
    );
  }
  if (variant === 'plus') {
    return (
      <Box
        sx={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          backgroundColor: '#718096',
          color: '#FFFFFF',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.82rem',
          fontWeight: 700,
          mx: 'auto',
        }}
      >
        {text}
      </Box>
    );
  }
  return (
    <Box
      sx={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        backgroundColor: BRAND,
        color: '#FFFFFF',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.82rem',
        fontWeight: 700,
        boxShadow: '0 4px 10px rgba(109, 83, 244, 0.3)',
        mx: 'auto',
      }}
    >
      {text}
    </Box>
  );
};



// ─── Main Upgrade Page Component ────────────────────────────────────────
export default function Upgrade() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  const featureRows = [
    {
      name: 'See Who Liked You',
      desc: 'Someone shared interest,\nNo - blurred profile in PRO',
      free: <CircleBadge variant="free" text="1" />,
      plus: <CircleBadge variant="plus" text="5" />,
      pro: <CircleBadge variant="pro" text="✓" />,
    },
    {
      name: 'Direct Message',
      desc: 'Message with connected users',
      free: <CircleBadge variant="free" text="5" />,
      plus: <CircleBadge variant="plus" text="✓" />,
      pro: <CircleBadge variant="pro" text="✓" />,
    },
    {
      name: 'Likes',
      desc: 'Share your interest',
      free: <CircleBadge variant="free" text="15" />,
      plus: <CircleBadge variant="plus" text="30" />,
      pro: <CircleBadge variant="pro" text="✓" />,
    },
    {
      name: 'Connect Requests',
      desc: 'Establish trust with a connect requests',
      free: <CircleBadge variant="free" text="✕" />,
      plus: <CircleBadge variant="plus" text="50" />,
      pro: <CircleBadge variant="pro" text="✓" />,
    },
    {
      name: 'QR code profile share',
      desc: 'Quick share your profile',
      free: <CircleBadge variant="plus" text="✓" />,
      plus: <CircleBadge variant="plus" text="✓" />,
      pro: <CircleBadge variant="pro" text="✓" />,
    },
    {
      name: 'Advanced Filters',
      desc: 'Find the right people and events',
      free: <CircleBadge variant="free" text="✕" />,
      plus: <CircleBadge variant="plus" text="✓" />,
      pro: <CircleBadge variant="pro" text="✓" />,
    },
    {
      name: 'Super Likes',
      desc: 'Show extra interest',
      free: <CircleBadge variant="free" text="✕" />,
      plus: <CircleBadge variant="plus" text="5" />,
      pro: <CircleBadge variant="pro" text="10" />,
    },
    {
      name: 'Rewinds',
      desc: 'Go back to skipped',
      free: <CircleBadge variant="free" text="✕" />,
      plus: <CircleBadge variant="plus" text="25" />,
      pro: <CircleBadge variant="pro" text="✓" />,
    },
    {
      name: 'Profile Boost',
      desc: 'Highlight your profile',
      free: <CircleBadge variant="free" text="✕" />,
      plus: <CircleBadge variant="plus" text="1" />,
      pro: <CircleBadge variant="pro" text="3" />,
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F8F9FE',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Shared Navbar */}
      <Navbar onOpenDownloadModal={() => setDownloadOpen(true)} />

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
                  mb: 3,
                }}
              >
                Choose how you want to grow your network and unlock premium features.
              </Typography>

              <Box sx={{ mb: 3 }}>
                <DownloadAppButton onClick={() => setDownloadOpen(true)} />
              </Box>

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
        {/* Top "Pro" Pill Badge */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              p: '3px',
              border: `1.5px solid ${BRAND}`,
              borderRadius: '30px',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 14px rgba(109, 83, 244, 0.12)',
            }}
          >
            <Box
              sx={{
                backgroundColor: BRAND,
                color: '#ffffff',
                px: 5,
                py: 0.8,
                borderRadius: '24px',
                fontWeight: 700,
                fontSize: '1.05rem',
                letterSpacing: '0.5px',
              }}
            >
              Pro
            </Box>
          </Box>
        </Box>

        {/* 3 Membership Cards */}
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          {/* Card 1: Starter */}
          <Grid item xs={12} sm={4} md={3.8}>
            <Box
              sx={{
                height: '100%',
                backgroundColor: '#ffffff',
                borderRadius: '36px',
                p: { xs: 3.5, sm: 4 },
                textAlign: 'center',
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 35px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.07)',
                },
              }}
            >
              <BriefcaseIcon sx={{ fontSize: 40, color: '#94A3B8', mb: 3 }} />
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', mb: 1 }}>
                BEST FOR TRY
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                PRO - 7 DAYS
              </Typography>
            </Box>
          </Grid>

          {/* Card 2: Pro (Featured Card with FOUNDERS - FREE) */}
          <Grid item xs={12} sm={4} md={3.8}>
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                backgroundColor: 'rgba(109, 83, 244, 0.02)',
                borderRadius: '36px',
                p: { xs: 3.5, sm: 4 },
                textAlign: 'center',
                border: `2px solid ${BRAND}`,
                boxShadow: '0 15px 40px rgba(109, 83, 244, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 48px rgba(109, 83, 244, 0.22)',
                },
              }}
            >
              {/* Top Floating Badge */}
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
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 12px rgba(109, 83, 244, 0.4)',
                }}
              >
                FOUNDERS - FREE
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', pt: 1 }}>
                <RibbonIcon sx={{ fontSize: 44, color: BRAND, mb: 2.5 }} />

                <Typography sx={{ fontSize: '2.8rem', fontWeight: 900, color: '#0F172A', lineHeight: 1 }}>
                  ₹0
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#EF4444',
                    textDecoration: 'line-through',
                    mt: 0.5,
                  }}
                >
                  ₹1199
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '1px', mt: 1, mb: 3 }}>
                  FOR 3 MONTHS
                </Typography>
              </Box>

              {/* Bottom Purple Checkmark Circle */}
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  backgroundColor: BRAND,
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(109, 83, 244, 0.35)',
                }}
              >
                <CheckIcon sx={{ fontSize: 18 }} />
              </Box>
            </Box>
          </Grid>

          {/* Card 3: Pro Yearly */}
          <Grid item xs={12} sm={4} md={3.8}>
            <Box
              sx={{
                height: '100%',
                backgroundColor: '#ffffff',
                borderRadius: '36px',
                p: { xs: 3.5, sm: 4 },
                textAlign: 'center',
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 35px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.07)',
                },
              }}
            >
              <CrownIcon sx={{ fontSize: 40, color: '#94A3B8', mb: 3 }} />
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', mb: 1 }}>
                BEST VALUE
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                PRO - YEARLY
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ─── FEATURE COMPARISON TABLE SECTION ───────────────────────────────── */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Box
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            p: { xs: 2, sm: 4 },
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            border: '1px solid #E2E8F0',
            overflowX: 'auto',
          }}
        >
          <Box sx={{ minWidth: 650 }}>
            <Box
              component="table"
              sx={{
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: 0,
              }}
            >
              <Box component="thead">
                <Box component="tr">
                  <Box
                    component="th"
                    sx={{
                      textAlign: 'left',
                      pl: 1,
                      py: 2,
                      pr: 2,
                      borderBottom: '1px solid #F1F5F9',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: '#94A3B8',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      width: '44%',
                    }}
                  >
                    FEATURES
                  </Box>
                  <Box
                    component="th"
                    sx={{
                      textAlign: 'center',
                      py: 2,
                      px: 2,
                      borderBottom: '1px solid #F1F5F9',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: '#94A3B8',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      width: '18%',
                    }}
                  >
                    FREE
                  </Box>
                  <Box
                    component="th"
                    sx={{
                      textAlign: 'center',
                      py: 2,
                      px: 2,
                      borderBottom: '1px solid #F1F5F9',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: '#718096',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      width: '18%',
                    }}
                  >
                    PLUS
                    <Typography component="div" sx={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 'normal' }}>
                      Per Day
                    </Typography>
                  </Box>
                  {/* PRO Header Cell */}
                  <Box
                    component="th"
                    sx={{
                      textAlign: 'center',
                      py: 2,
                      px: 2,
                      width: '20%',
                      backgroundColor: 'rgba(109, 83, 244, 0.04)',
                      borderTop: `2px solid ${BRAND}`,
                      borderLeft: `2px solid ${BRAND}`,
                      borderRight: `2px solid ${BRAND}`,
                      borderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px',
                    }}
                  >
                    <Typography sx={{ fontSize: '0.95rem', fontWeight: 900, color: BRAND }}>
                      PRO
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: BRAND_LIGHT, fontWeight: 600 }}>
                      Per Day
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box component="tbody">
                {featureRows.map((row, index) => {
                  const isLast = index === featureRows.length - 1;
                  return (
                    <Box component="tr" key={row.name}>
                      {/* Name + Description */}
                      <Box
                        component="td"
                        sx={{
                          py: 2,
                          pl: 1,
                          pr: 2,
                          borderBottom: !isLast ? '1px solid #F8FAFC' : 'none',
                        }}
                      >
                        <Typography sx={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A', mb: 0.3 }}>
                          {row.name}
                        </Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.4, whiteSpace: 'pre-line' }}>
                          {row.desc}
                        </Typography>
                      </Box>

                      {/* FREE Column */}
                      <Box
                        component="td"
                        sx={{
                          py: 2,
                          px: 2,
                          textAlign: 'center',
                          borderBottom: !isLast ? '1px solid #F8FAFC' : 'none',
                        }}
                      >
                        {row.free}
                      </Box>

                      {/* PLUS Column */}
                      <Box
                        component="td"
                        sx={{
                          py: 2,
                          px: 2,
                          textAlign: 'center',
                          borderBottom: !isLast ? '1px solid #F8FAFC' : 'none',
                        }}
                      >
                        {row.plus}
                      </Box>

                      {/* PRO Column */}
                      <Box
                        component="td"
                        sx={{
                          py: 2,
                          px: 2,
                          textAlign: 'center',
                          backgroundColor: 'rgba(109, 83, 244, 0.04)',
                          borderLeft: `2px solid ${BRAND}`,
                          borderRight: `2px solid ${BRAND}`,
                          ...(isLast && {
                            borderBottom: `2px solid ${BRAND}`,
                            borderBottomLeftRadius: '20px',
                            borderBottomRightRadius: '20px',
                          }),
                        }}
                      >
                        {row.pro}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* ─── INVITE FRIENDS REWARD CARD ─────────────────────────────────────── */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          sx={{
            borderRadius: '28px',
            p: { xs: 3.5, sm: 4.5 },
            border: `1.5px solid ${BRAND}`,
            backgroundColor: 'rgba(109, 83, 244, 0.03)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3.5 }}>
            <Box
              component="img"
              src="/CoinPot.png"
              alt="Coin Pot"
              sx={{
                width: { xs: 90, sm: 120 },
                height: { xs: 90, sm: 120 },
                objectFit: 'contain',
                flexShrink: 0,
              }}
            />
            <Box>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', mb: 0.5 }}>
                Invite Friends & Earn Rewards
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5 }}>
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
              borderRadius: '30px',
              px: { xs: 4, sm: 6 },
              py: 1.4,
              fontSize: '1rem',
              fontWeight: 800,
              textTransform: 'none',
              boxShadow: '0 8px 24px rgba(109, 83, 244, 0.3)',
              whiteSpace: 'nowrap',
              width: { xs: '100%', md: 'auto' },
              '&:hover': { backgroundColor: BRAND_DARK },
            }}
          >
            Refer Friends
          </Button>
        </Box>
      </Container>

      {/* Shared Footer */}
      <Footer onOpenDownloadModal={() => setDownloadOpen(true)} />

      {/* Download Modal */}
      <DownloadAppModal open={downloadOpen} onClose={() => setDownloadOpen(false)} />
    </Box>
  );
}
