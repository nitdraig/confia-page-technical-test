import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

interface Props {
  pages: {
    company: Array<PageItem>;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const { company: companyPages } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Company'} items={companyPages} />
        </Box>
        <Box>
          <a
            style={{
              fontWeight: '800',
              color: '#686868',
              textDecoration: 'none',
            }}
            href=""
          >
            Trámites en línea
          </a>
        </Box>

        <Box>
          <a
            style={{
              fontWeight: '800',
              color: '#686868',
              textDecoration: 'none',
            }}
            href=""
          >
            Empresa
          </a>
        </Box>

        <Box>
          <a
            style={{
              fontWeight: '800',
              color: '#686868',
              textDecoration: 'none',
            }}
            href=""
          >
            Pensión
          </a>
        </Box>
        <Box>
          <a
            style={{
              fontWeight: '800',
              color: '#686868',
              textDecoration: 'none',
            }}
            href=""
          >
            Descuentos
          </a>
        </Box>
        <Box>
          <a
            style={{
              fontWeight: '800',
              color: '#686868',
              textDecoration: 'none',
            }}
            href=""
          >
            Eventos
          </a>
        </Box>
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="https://thefront.maccarianagency.com/docs/introduction"
            target={'blank'}
          >
            Documentation
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
          >
            Purchase now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
