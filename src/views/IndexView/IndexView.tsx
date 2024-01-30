import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { ContactForm, Features, Us, Benefits, Hero } from './components';
import { ContactFormData } from './components/ContactForm/ContactForm';

const IndexView = (): JSX.Element => {
  const handleSubmit = (formData: ContactFormData) => {
    console.log('Form submitted:', formData);
  };
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main>
        <Hero />
        <Container id="us">
          <Us />
        </Container>
        <Box>
          <Container id="clients">
            <Features />
          </Container>
          <Container id="benefits">
            <Benefits />
          </Container>
        </Box>
        <Container id="contact">
          <ContactForm onSubmit={handleSubmit} />
        </Container>
      </Main>
    </Box>
  );
};

export default IndexView;
