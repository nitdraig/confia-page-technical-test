import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';

import { Hero, Jobs, Newsletter, About, Funds, Attention } from './components';

const CareerListing = (): JSX.Element => {
  return (
    <Main>
      <Box>
        <Container>
          <Hero />
        </Container>
        <Container id="funds">
          <Funds />
        </Container>
        <Container id="atention">
          <Attention />
        </Container>
        <Container id="faq">
          <About />
        </Container>
      </Box>
      <Box bgcolor={'alternate.main'}>
        <Container maxWidth={1000}>
          <Jobs />
        </Container>
        <Container paddingTop={'0 !important'}>
          <Newsletter />
        </Container>
      </Box>
    </Main>
  );
};

export default CareerListing;
