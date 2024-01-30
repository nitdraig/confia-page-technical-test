import React from 'react';
import Box from '@mui/material/Box';
import { NavItem } from './components';

interface Props {
  onSidebarOpen: () => void;
  pages: {
    company: Array<PageItem>;
  };
  colorInvert?: boolean;
}

const Topbar = ({ pages }: Props): JSX.Element => {
  const { company: companyPages } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Confia"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src="https://res.cloudinary.com/draig/image/upload/v1706560307/pruebas/confia/veenioiwmec8zf545ood.png"
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <a
            style={{
              fontWeight: '800',
              color: '#686868',
              textDecoration: 'none',
            }}
            href="#"
          >
            Trámites en línea
          </a>
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Ahorro e inversión'}
            id={'company-pages'}
            items={companyPages}
          />
        </Box>
        <Box marginLeft={4}>
          <a
            style={{
              fontWeight: '800',
              color: '#686868',
              textDecoration: 'none',
            }}
            href="#"
          >
            Empresa
          </a>
        </Box>

        <Box marginLeft={4}>
          <a
            style={{
              fontWeight: '800',
              color: '#686868',
              textDecoration: 'none',
            }}
            href="#"
          >
            Pensión
          </a>
        </Box>
        <Box marginLeft={4}>
          <a
            style={{
              fontWeight: '800',
              color: '#686868',
              textDecoration: 'none',
            }}
            href="#"
          >
            Descuentos
          </a>
        </Box>
        <Box marginLeft={4}>
          <a
            style={{
              fontWeight: '800',
              color: '#686868',
              textDecoration: 'none',
            }}
            href="#"
          >
            Eventos
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
