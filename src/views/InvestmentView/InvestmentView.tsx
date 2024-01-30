import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Manager,
  Faq,
  Funds,
  Attention,
  Record,
  Agents,
} from './components';
import { faqs } from 'views/data';

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
          <Faq faqs={faqs} />
        </Container>
        <Container maxWidth={1000}>
          <Manager />
        </Container>
        <Container maxWidth={1000}>
          <Record />
        </Container>
        <Container maxWidth={1000}>
          <Agents />
        </Container>
      </Box>
    </Main>
  );
};

export default CareerListing;
