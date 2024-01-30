import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from 'components/Container';
import { Typography } from '@mui/material';

const Hero = (): JSX.Element => {
  return (
    <Box
      sx={{
        position: 'relative',
        marginTop: -26,
        paddingTop: 13,
      }}
    >
      <Container>
        <Box>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Box
                component={'img'}
                loading="lazy"
                height="auto"
                width="100%"
                borderRadius={2}
                src={
                  'https://res.cloudinary.com/draig/image/upload/v1706579019/pruebas/confia/y0rpwg5f10pwp0nigtla.png'
                }
                alt="..."
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box display={'flex'} flexDirection="column">
        <Typography
          variant="h2"
          gutterBottom
          align={'left'}
          color="#D3282A"
          style={{
            fontWeight: 900,
          }}
        >
          Conoce nuestros Fondos
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
