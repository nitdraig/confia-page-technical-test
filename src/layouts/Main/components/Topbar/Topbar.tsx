import React from 'react';
import Box from '@mui/material/Box';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
} from '@mui/material';
import { NavItem } from './components';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';
interface Props {
  onSidebarOpen: () => void;
  pages: {
    company: Array<PageItem>;
  };
  colorInvert?: boolean;
}

const Topbar = ({ onSidebarOpen, pages }: Props): JSX.Element => {
  const { company: companyPages } = pages;

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
      <Drawer anchor="left" open={false} onClose={onSidebarOpen}>
        <List>
          <ListItem>
            <ListItemText primary="Trámites en línea" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Ahorro e inversión" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Empresa" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Pensión" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Descuentos" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Eventos" />
          </ListItem>
        </List>
      </Drawer>
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
        <a
          href="#"
          style={{
            fontWeight: '800',
            color: '#686868',
            textDecoration: 'none',
            marginLeft: '20px',
          }}
        >
          Empresa
        </a>
        <a
          href="#"
          style={{
            fontWeight: '800',
            color: '#686868',
            textDecoration: 'none',
            marginLeft: '20px',
          }}
        >
          Pensión
        </a>
        <a
          href="#"
          style={{
            fontWeight: '800',
            color: '#686868',
            textDecoration: 'none',
            marginLeft: '20px',
          }}
        >
          Descuentos
        </a>
        <a
          href="#"
          style={{
            fontWeight: '800',
            color: '#686868',
            textDecoration: 'none',
            marginLeft: '20px',
          }}
        >
          Eventos
        </a>
      </Box>
    </Box>
  );
};

export default Topbar;
