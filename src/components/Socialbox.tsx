import React from 'react';
import Box from '@mui/material/Box';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  WhatsApp,
  YouTube,
} from '@mui/icons-material';

export const Socialbox = () => {
  return (
    <Box
      style={{
        position: 'fixed',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
        backgroundColor: '#D3282A',
        padding: '6px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTopLeftRadius: '12px',
        borderBottomLeftRadius: '12px',
      }}
    >
      <a
        href="URL_FACEBOOK"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '3px', cursor: 'pointer', color: 'white' }}
      >
        <Facebook />
      </a>
      <a
        href="URL_TWITTER"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '3px', cursor: 'pointer', color: 'white' }}
      >
        <Twitter />
      </a>
      <a
        href="URL_INSTAGRAM"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '3px', cursor: 'pointer', color: 'white' }}
      >
        <Instagram />
      </a>
      <a
        href="URL_LINKEDIN"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '3px', cursor: 'pointer', color: 'white' }}
      >
        <LinkedIn />
      </a>
      <a
        href="URL_WHATSAPP"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '3px', cursor: 'pointer', color: 'white' }}
      >
        <WhatsApp />
      </a>
      <a
        href="URL_YOUTUBE"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '3px', cursor: 'pointer', color: 'white' }}
      >
        <YouTube />
      </a>
    </Box>
  );
};
