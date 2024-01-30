import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
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
    <div>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{ borderRadius: '8px', overflow: 'hidden', marginTop: '0.5em' }}
        >
          <AccordionSummary
            style={{ backgroundColor: '#f3f3f3' }}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="subtitle1">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#f3f3f3',
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
