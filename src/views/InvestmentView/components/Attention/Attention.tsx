import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Attention = (): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          align={'center'}
          sx={{ textTransform: 'uppercase' }}
          variant={'h5'}
          color={'text.secondary'}
          fontWeight={700}
        >
          Atención al inversionista
        </Typography>
        <Typography
          fontWeight={400}
          color={'text.secondary'}
          variant={'subtitle2'}
          align={'center'}
        >
          Procedimientos Relativos a Quejas y Reclamos de los Fondos APV
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item container justifyContent="center" xs={12} md={6}>
          <Typography color={'text.secondary'}>
            <ol>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </li>
              <li>
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
