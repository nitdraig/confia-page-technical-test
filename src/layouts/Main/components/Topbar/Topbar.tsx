import React from 'react';
import Box from '@mui/material/Box';
import { IconButton, Stack } from '@mui/material';
import { NavItem } from './components';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';

interface Props {
  onSidebarOpen: () => void;
  pages: {
    company: any;
  };
  colorInvert?: boolean;
}

const Topbar = ({ onSidebarOpen, pages }: Props): JSX.Element => {
  const { company: companyPages } = pages;
  const linkStyles = {
    fontWeight: '800',
    color: '#686868',
    textDecoration: 'none',
    marginLeft: '1.5em',
  };

  const links = [
    { title: 'Empresa', href: '#' },
    { title: 'Pensión', href: '#' },
    { title: 'Descuentos', href: '#' },
    { title: 'Eventos', href: '#' },
  ];

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width={1}
      padding={2}
    >
      <Stack spacing={2} display={{ xs: 'block', md: 'none' }}>
        <IconButton
          onClick={onSidebarOpen}
          edge="start"
          aria-label="menu"
          sx={{ mr: 2 }}
          style={{ color: '#D3282A' }}
        >
          <Menu />
        </IconButton>
      </Stack>
      <Link href="/#">
        <Box
          component="img"
          src="https://res.cloudinary.com/draig/image/upload/v1706560307/pruebas/confia/veenioiwmec8zf545ood.png"
          height={40}
          width={120}
          display="block"
        />
      </Link>
      <Box display={{ xs: 'none', md: 'flex' }}>
        <a
          href="/#"
          style={{
            fontWeight: '800',
            color: '#686868',
            textDecoration: 'none',
            marginLeft: '20px',
            marginRight: '20px',
          }}
        >
          Trámites en línea
        </a>
        <NavItem
          title={'Ahorro e inversión'}
          id={'company-pages'}
          items={companyPages}
        />
        {links.map((link, index) => (
          <Box key={index} marginBottom={1}>
            <a style={linkStyles} href={link.href}>
              {link.title}
            </a>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Topbar;
