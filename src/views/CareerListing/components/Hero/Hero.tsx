import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
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
    </Box>
  );
};

export default Hero;
