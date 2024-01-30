import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Attention = (): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          align={'left'}
          sx={{ textTransform: 'uppercase' }}
          variant={'h6'}
          color={'text.secondary'}
          fontWeight={700}
        >
          Preguntas frecuentes (FAQ)
        </Typography>
        <Typography
          fontWeight={400}
          color={'text.secondary'}
          variant={'subtitle2'}
          align={'left'}
        >
          Procedimientos Relativos a Quejas y Reclamos de los Fondos APV
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item container justifyContent="center" xs={12} md={12}>
          <Typography color={'text.secondary'}>
            <ol>
              <li style={{ paddingBottom: '1em' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li style={{ paddingBottom: '1em' }}>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </li>
              <li style={{ paddingBottom: '1em' }}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </li>
            </ol>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Attention;
