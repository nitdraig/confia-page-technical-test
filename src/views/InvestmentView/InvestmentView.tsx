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
        <Box
          style={{
            borderLeft: '1px solid #e0e0e0',
            borderRight: '1px solid #e0e0e0',
            margin: '0 auto',
            width: 'calc(100% - 40px)',
            marginBottom: '23m',
          }}
          maxWidth={600}
        >
          <Container id="funds">
            <Funds />
          </Container>
          <Container id="atention">
            <Attention />
          </Container>
          <Container id="faq">
            <Faq faqs={faqs} />
          </Container>
          <Container>
            <Manager />
          </Container>
          <Container>
            <Record />
          </Container>
          <Container>
            <Agents />
          </Container>
        </Box>
      </Box>
    </Main>
  );
};

export default CareerListing;
