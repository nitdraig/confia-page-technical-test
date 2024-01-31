import React from 'react';
import Box from '@mui/material/Box';
import NavItem from './components/NavItem';

interface Props {
  pages: {
    company: any;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const { company: companyPages } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/#"
          title="Confía"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src="https://res.cloudinary.com/draig/image/upload/v1706560307/pruebas/confia/veenioiwmec8zf545ood.png"
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Ahorro e inversión'} items={companyPages} />
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
      </Box>
    </Box>
  );
};

export default SidebarNav;
