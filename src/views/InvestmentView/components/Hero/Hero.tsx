import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from 'components/Container';
import { Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

const Hero = (): JSX.Element => {
  return (
    <Box
      sx={{
        position: 'relative',
        paddingTop: '-30em',
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
                sx={{
                  marginTop: { xs: '-3em', sm: '-4em', md: '-6em' },
                }}
                alt="Confía background"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Grid container spacing={1}>
        <Grid item xs={10} sm={6} md={4} lg={6}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeOutlinedIcon style={{ color: '#D3282A' }} />
            <NavigateNextOutlinedIcon style={{ color: '#a5a5a5' }} />
            <Typography
              variant="subtitle2"
              color={'#b8b8b8'}
              sx={{ marginLeft: '4px' }}
            >
              Ahorro e inversiones
            </Typography>
            <NavigateNextOutlinedIcon style={{ color: '#a5a5a5' }} />
            <Typography
              variant="subtitle2"
              color={'#b8b8b8'}
              sx={{ marginLeft: '4px' }}
            >
              Ahorro voluntario
            </Typography>
            <NavigateNextOutlinedIcon style={{ color: '#a5a5a5' }} />
            <Typography
              variant="subtitle2"
              color={'#b8b8b8'}
              sx={{ marginLeft: '4px', fontWeight: 500, color: '#D3282A' }}
            >
              Conoce nuestros Fondos
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box display={'flex'} flexDirection="column">
        <Typography
          variant="h2"
          gutterBottom
          align={'left'}
          color="#D3282A"
          style={{
            fontWeight: 800,
          }}
        >
          Conoce nuestros Fondos
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
