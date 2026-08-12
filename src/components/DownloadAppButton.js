import React from 'react';
import { Box, Button } from '@mui/material';

const BRAND = '#6D53F4';
const BRAND_DARK = '#5A3FD6';

export const AppleLogoIcon = ({ size = 20, color = 'currentColor' }) => (
  <Box
    component="svg"
    viewBox="0 0 170 170"
    sx={{ width: size, height: size, fill: color, display: 'block' }}
  >
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-5.14.12-10.04-1.95-14.7-6.22-3.08-2.73-7.01-7.44-11.8-14.13-5.63-7.86-10.15-16.73-13.56-26.62-3.41-9.88-5.11-19.51-5.11-28.89 0-14.76 3.79-26.54 11.37-35.34 7.58-8.8 17.07-13.25 28.47-13.36 4.7 0 9.77 1.17 15.22 3.51 5.46 2.34 9.17 3.51 11.14 3.51 1.63 0 5.48-1.23 11.55-3.69 6.07-2.46 11.1-3.58 15.09-3.37 11.96.86 21.32 5.37 28.08 13.54-10.68 6.46-15.91 15.39-15.69 26.79.22 8.92 3.69 16.32 10.41 22.21 6.72 5.89 14.61 9.21 23.68 9.97-2.5 7.42-5.78 14.86-9.85 22.32zM119.22 31.95c0-7.14 2.58-13.84 7.74-20.1 5.16-6.27 11.66-9.92 19.5-10.96.11.98.17 1.8.17 2.45 0 7.03-2.67 13.88-8.01 20.55-5.34 6.67-11.84 10.37-19.5 11.1-0.11-.87-.17-1.89-.17-3.04z" />
  </Box>
);

export const PlayStoreTriangleIcon = ({ size = 22 }) => (
  <Box
    component="svg"
    viewBox="0 0 512 512"
    sx={{ width: size, height: size, display: 'block' }}
  >
    <path fill="#41A5EE" d="M32.5 13.6C26.9 19.3 24 27.6 24 38.3v435.4c0 10.7 2.9 19 8.5 24.7l1.7 1.7L276 258.3v-4.6L34.2 11.9l-1.7 1.7z" />
    <path fill="#FBB03B" d="M359.7 342L276 258.3v-4.6l83.7-83.7 2 1.1 99.2 56.4c28.3 16.1 28.3 42.4 0 58.5l-99.2 56.4-2 1.1z" />
    <path fill="#EE4445" d="M361.7 340.9L276 255.3l-241.8 244c9.3 9.9 24.7 11.1 42.4 1.1l285.1-162.2" />
    <path fill="#32B76C" d="M361.7 171.1L76.6 9C58.9-1 43.5.2 34.2 10.1l241.8 244 85.7-83z" />
  </Box>
);

export default function DownloadAppButton({
  onClick,
  showIcons = true,
  variant = 'pill-with-icons',
  sx = {},
  buttonText = 'Download App',
}) {
  if (variant === 'simple') {
    return (
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          borderRadius: '28px',
          px: 3,
          py: 0.9,
          textTransform: 'none',
          fontWeight: 700,
          fontSize: '0.88rem',
          backgroundColor: BRAND,
          boxShadow: `0 4px 16px rgba(109,83,244,0.35)`,
          '&:hover': {
            backgroundColor: BRAND_DARK,
            boxShadow: `0 6px 24px rgba(109,83,244,0.45)`,
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.3s ease',
          ...sx,
        }}
      >
        {buttonText}
      </Button>
    );
  }

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.25,
        ...sx,
      }}
    >
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          borderRadius: '28px',
          px: 3,
          py: 0.9,
          textTransform: 'none',
          fontWeight: 700,
          fontSize: '0.88rem',
          backgroundColor: BRAND,
          color: '#ffffff',
          boxShadow: `0 4px 16px rgba(109,83,244,0.35)`,
          '&:hover': {
            backgroundColor: BRAND_DARK,
            boxShadow: `0 6px 24px rgba(109,83,244,0.45)`,
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        {buttonText}
      </Button>

      {showIcons && (
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
          <Box
            component="button"
            onClick={onClick}
            aria-label="Download on App Store"
            sx={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              '&:hover': { transform: 'scale(1.1)', opacity: 0.8 },
            }}
          >
            <AppleLogoIcon size={24} color="#000000" />
          </Box>
          <Box
            component="button"
            onClick={onClick}
            aria-label="Get it on Google Play"
            sx={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              '&:hover': { transform: 'scale(1.1)', opacity: 0.8 },
            }}
          >
            <PlayStoreTriangleIcon size={24} />
          </Box>
        </Box>
      )}
    </Box>
  );
}
