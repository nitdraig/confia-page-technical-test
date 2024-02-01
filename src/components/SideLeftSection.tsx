import { Box, Typography } from '@mui/material';
import React from 'react';

export const SideLeftSection = () => {
  return (
    <Box
      style={{
        position: 'absolute',
        left: 0,
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'flex-start',
        marginLeft: '4rem',
        marginTop: '4em',
      }}
    >
      <Box>
        <Typography variant={'subtitle1'} fontWeight={700} color={'#D3282A'}>
          Fondos de Ahorro Provicional
        </Typography>
        <Typography
          variant={'subtitle1'}
          fontWeight={700}
          color={'text.secondary'}
        >
          Proyecta Life
        </Typography>
        <Typography
          variant={'subtitle1'}
          fontWeight={700}
          color={'text.secondary'}
        >
          Proyecta 5Plus
        </Typography>
      </Box>
    </Box>
  );
};
