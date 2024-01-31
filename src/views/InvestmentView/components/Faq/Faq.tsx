import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const Faq: React.FC<FAQProps> = ({ faqs }) => {
  return (
    <div style={{ paddingLeft: 20, paddingRight: 20 }}>
      <Box marginBottom={4}>
        <Typography
          align={'left'}
          variant={'h6'}
          color={'text.secondary'}
          fontWeight={700}
        >
          Preguntas frecuentes (FAQ)
        </Typography>
      </Box>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            borderRadius: '8px',
            overflow: 'hidden',
            marginTop: '0.3em',
            boxShadow: 'none',
          }}
        >
          <AccordionSummary
            style={{ backgroundColor: '#eeeded' }}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="subtitle1">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#eeeded',
              borderEndEndRadius: '8px',
              borderEndStartRadius: '8px',
            }}
          >
            <Typography variant="subtitle2">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Faq;
