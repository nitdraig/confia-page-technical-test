import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Funds = (): JSX.Element => {
  return (
    <Box padding={2} marginTop={-8}>
      <Grid container alignItems="stretch">
        <Grid item xs={6}>
          <Box
            border="2px solid #e9e9e9"
            padding={2}
            style={{
              borderRight: 0,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              height: '100%',
            }}
          >
            <Typography
              marginBottom={2}
              variant={'body1'}
              color={'text.secondary'}
              fontWeight={700}
            >
              Proyecta 5Plus
            </Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            delectus culpa suscipit debitis?
            <br />
            <Typography
              marginBottom={2}
              marginTop={2}
              variant={'body1'}
              color={'text.secondary'}
              fontWeight={700}
            >
              Proyecta 5Plus
            </Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            laborum rerum harum quas ipsam optio quisquam reiciendis cupiditate
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            border="2px solid #e9e9e9"
            padding={2}
            style={{
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              height: '100%',
            }}
          >
            <Typography
              marginBottom={2}
              variant={'body1'}
              color={'text.secondary'}
              fontWeight={700}
            >
              Proyecta Life
            </Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            laborum rerum harum quas ipsam optio quisquam reiciendis cupiditate
            <br />
            <Typography
              marginBottom={2}
              marginTop={2}
              variant={'body1'}
              color={'text.secondary'}
              fontWeight={700}
            >
              Proyecta Life
            </Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            laborum rerum harum quas ipsam optio quisquam reiciendis cupiditate
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Funds;
