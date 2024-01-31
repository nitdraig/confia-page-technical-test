import React, { useEffect, useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
  title: string;
  items: any;
}

const NavItem = ({ title, items }: Props): JSX.Element => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink = () => items.find((i) => i.href === activeLink);

  return (
    <Box>
      <Accordion
        disableGutters
        elevation={0}
        sx={{ backgroundColor: 'transparent' }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                width: 16,
                height: 16,
                color: '#D3282A',
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0 }}
        >
          <Typography
            fontWeight={hasActiveLink() ? 500 : 800}
            color={'#686868'}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <Grid container spacing={1}>
            {items.map((p, i) => (
              <Grid item key={i} xs={12}>
                <Button
                  size={'large'}
                  component={'a'}
                  href={p.href}
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    color: ' #4e4e4e',
                    backgroundColor: alpha('#D3282A', 0.1),
                    fontWeight: activeLink === p.href ? 1000 : 800,
                  }}
                >
                  {p.title}
                </Button>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default NavItem;
