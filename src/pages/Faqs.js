import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  Chip,
  Grid,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Search as SearchIcon,
  HelpOutline as HelpIcon,
} from '@mui/icons-material';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';
import DownloadAppButton from '../components/DownloadAppButton';
import DownloadAppModal from '../components/DownloadAppModal';

const BRAND = '#6D53F4';
const BRAND_DARK = '#5A3FD6';

const FAQ_DATA = [
  {
    category: 'Account & Profile',
    questions: [
      {
        q: 'How do I create a Labaka account?',
        a: 'Download the Labaka app on Google Play or Apple App Store, open the app, and sign up using your phone number or Google account. Follow the on-screen steps to set up your profile.',
      },
      {
        q: 'Can I switch between Casual and Formal modes anytime?',
        a: 'Yes! Labaka allows instant mode toggling with a single tap. Your profile data for Casual mode and Formal mode can be customized independently.',
      },
      {
        q: 'How do I edit my profile information?',
        a: 'Navigate to the Profile tab in the app, select Edit Profile, and update your bio, photos, interests, skills, or location preferences.',
      },
    ],
  },
  {
    category: 'Features & Discovery',
    questions: [
      {
        q: 'How does real-time discovery work?',
        a: 'Labaka uses location-based discovery to show users, events, and opportunities around your current location in real time.',
      },
      {
        q: 'What are Labaka Events?',
        a: 'Labaka Events allow users and organizers to host or join social meetups, workshops, sports sessions, and networking events nearby.',
      },
      {
        q: 'Can I hide my location from others?',
        a: 'Yes, you can enable Ghost Mode or adjust location accuracy settings in Privacy Settings at any time.',
      },
    ],
  },
  {
    category: 'Chat & Connections',
    questions: [
      {
        q: 'How do I connect with someone on Labaka?',
        a: 'When you find a user or profile that interests you, tap Connect. Once both users accept, a direct chat channel opens.',
      },
      {
        q: 'Is messaging free on Labaka?',
        a: 'Yes! Basic direct messaging with matched connections is completely free for all registered users.',
      },
    ],
  },
  {
    category: 'LBK Wallet & Payments',
    questions: [
      {
        q: 'What is LBK Wallet?',
        a: 'LBK Wallet is an integrated digital wallet that allows users to send/receive tokens, pay for event tickets, and unlock premium features seamlessly.',
      },
      {
        q: 'Are transactions on LBK Wallet secure?',
        a: 'All transactions undergo multi-layer encryption and security verification to ensure maximum safety.',
      },
    ],
  },
  {
    category: 'Subscription & Plans',
    questions: [
      {
        q: 'What subscription plans does Labaka offer?',
        a: 'Labaka offers Free, Plus, and Founding Member tiers. Check out our Upgrade page for a complete breakdown of features in each plan.',
      },
      {
        q: 'Can I cancel my subscription anytime?',
        a: 'Yes, subscriptions can be managed or canceled anytime directly through your Google Play or App Store account settings.',
      },
    ],
  },
  {
    category: 'Safety & Privacy',
    questions: [
      {
        q: 'How does Labaka protect my personal data?',
        a: "Labaka strictly complies with global data protection regulations and India's DPDP Act 2023. We never sell your personal data.",
      },
      {
        q: 'How do I report or block a user?',
        a: 'Tap the three dots on any user profile or chat screen and select Report or Block. Our moderation team reviews reports 24/7.',
      },
    ],
  },
];

export default function Faqs() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const openDownloadModal = () => setDownloadModalOpen(true);
  const closeDownloadModal = () => setDownloadModalOpen(false);

  const categories = ['All', ...FAQ_DATA.map((c) => c.category)];

  const filteredFaqs = FAQ_DATA.map((cat) => {
    const questions = cat.questions.filter((q) => {
      const matchesSearch =
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || selectedCategory === cat.category;
      return matchesSearch && matchesCategory;
    });
    return { ...cat, questions };
  }).filter((cat) => cat.questions.length > 0);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fff', overflowX: 'hidden' }}>
      {/* Shared Navbar */}
      <Navbar onOpenDownloadModal={openDownloadModal} />

      {/* Sub Navbar */}
      <SubNavbar />

      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 20, md: 24 },
          pb: { xs: 8, md: 10 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, #3a1f8e 0%, ${BRAND_DARK} 30%, ${BRAND} 60%, #8B73FF 100%)`,
          color: '#fff',
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '28px',
              px: 2.5,
              py: 0.75,
              fontSize: '0.85rem',
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 2,
              backdropFilter: 'blur(8px)',
            }}
          >
            Help & FAQs
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.8rem', md: '3.2rem' },
              fontWeight: 800,
              color: '#fff',
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            Everything You Need To Know
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.98rem', md: '1.1rem' },
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: 580,
              mx: 'auto',
              lineHeight: 1.7,
              mb: 4,
            }}
          >
            Have questions about Labaka? Search our knowledge base or browse through categories below.
          </Typography>

          {/* Search Box */}
          <Box sx={{ maxWidth: 560, mx: 'auto' }}>
            <TextField
              fullWidth
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: BRAND }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: '30px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  pr: 2,
                  py: 0.5,
                  fontSize: '0.95rem',
                },
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Category Chips Filter */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4, justifyContent: 'center' }}>
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => setSelectedCategory(cat)}
              sx={{
                px: 1,
                py: 2.2,
                borderRadius: '20px',
                fontWeight: 600,
                fontSize: '0.85rem',
                backgroundColor: selectedCategory === cat ? BRAND : 'rgba(109, 83, 244, 0.08)',
                color: selectedCategory === cat ? '#ffffff' : '#0d1b2a',
                '&:hover': {
                  backgroundColor: selectedCategory === cat ? BRAND_DARK : 'rgba(109, 83, 244, 0.15)',
                },
              }}
            />
          ))}
        </Box>

        {/* FAQs Accordion List */}
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((cat) => (
            <Box key={cat.category} sx={{ mb: 5 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: '#0d1b2a',
                  mb: 2.5,
                  fontSize: { xs: '1.25rem', md: '1.45rem' },
                }}
              >
                {cat.category}
              </Typography>
              {cat.questions.map((item, idx) => (
                <Accordion
                  key={idx}
                  elevation={0}
                  sx={{
                    mb: 1.5,
                    borderRadius: '16px !important',
                    border: '1px solid rgba(109, 83, 244, 0.12)',
                    boxShadow: '0 2px 12px rgba(109,83,244,0.04)',
                    '&:before': { display: 'none' },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: BRAND }} />}
                    sx={{ px: 3, py: 1 }}
                  >
                    <Typography sx={{ fontWeight: 700, color: '#0d1b2a', fontSize: '0.98rem' }}>
                      {item.q}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, pb: 2.5, pt: 0 }}>
                    <Typography sx={{ color: '#5a6175', fontSize: '0.92rem', lineHeight: 1.7 }}>
                      {item.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          ))
        ) : (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <HelpIcon sx={{ fontSize: 48, color: BRAND, mb: 1, opacity: 0.7 }} />
            <Typography variant="h6" sx={{ color: '#0d1b2a', fontWeight: 700 }}>
              No matching questions found
            </Typography>
            <Typography sx={{ color: '#5a6175', fontSize: '0.9rem', mt: 0.5 }}>
              Try adjusting your search terms or selecting a different category.
            </Typography>
          </Box>
        )}

        {/* Still Have Questions Box */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(109,83,244,0.06), rgba(139,115,255,0.12))',
            border: '1px solid rgba(109,83,244,0.18)',
            borderRadius: '20px',
            p: { xs: 3.5, md: 4 },
            textAlign: 'center',
            mt: 6,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#0d1b2a', mb: 1 }}>
            Still Have Questions?
          </Typography>
          <Typography sx={{ color: '#5a6175', fontSize: '0.95rem', mb: 3 }}>
            Can't find the answer you're looking for? Reach out to our support team directly.
          </Typography>
          <DownloadAppButton onClick={openDownloadModal} sx={{ justifyContent: 'center' }} />
        </Box>
      </Container>

      {/* Shared Footer */}
      <Footer onOpenDownloadModal={openDownloadModal} />

      {/* Download Modal */}
      <DownloadAppModal open={downloadModalOpen} onClose={closeDownloadModal} />
    </Box>
  );
}
