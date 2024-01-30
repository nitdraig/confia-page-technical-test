import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';

import Container from 'components/Container';

const Hero = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.alternate.main,
        backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
        marginTop: -13,
        paddingTop: 13,
      }}
    >
      <Container>
        <Box>
          <Box
            marginBottom={{ xs: 0, sm: 4 }}
            display={'flex'}
            flexDirection={'column'}
          >
            <Typography
              variant="h3"
              gutterBottom
              align={'left'}
              color="#D3282A"
              sx={{
                fontWeight: 900,
              }}
            >
              Conoce nuestros Fondos
            </Typography>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <Grid
              item
              container
              justifyContent={'flex-end'}
              alignItems={'flex-end'}
              xs={4}
            >
              <Box
                component={'img'}
                loading="lazy"
                height={1}
                width={1}
                borderRadius={2}
                src={'https://assets.maccarianagency.com/backgrounds/img21.jpg'}
                alt="..."
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent={'flex-start'}
              alignItems={'flex-end'}
              xs={8}
            >
              <Box
                component={'img'}
                loading="lazy"
                height={1}
                width={1}
                borderRadius={2}
                src={'https://assets.maccarianagency.com/backgrounds/img22.jpg'}
                alt="..."
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent={'flex-end'}
              alignItems={'flex-start'}
              xs={8}
            >
              <Box
                component={'img'}
                loading="lazy"
                height={1}
                width={1}
                borderRadius={2}
                src={'https://assets.maccarianagency.com/backgrounds/img24.jpg'}
                alt="..."
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              xs={4}
            >
              <Box
                component={'img'}
                loading="lazy"
                height={1}
                width={1}
                borderRadius={2}
                src={'https://assets.maccarianagency.com/backgrounds/img25.jpg'}
                alt="..."
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
