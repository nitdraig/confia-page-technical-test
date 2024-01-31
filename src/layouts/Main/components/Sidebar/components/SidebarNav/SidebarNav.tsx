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

  const linkStyles = {
    fontWeight: '800',
    color: '#686868',
    textDecoration: 'none',
  };

  const links = [
    { title: 'Trámites en línea', href: '#' },
    { title: 'Empresa', href: '#' },
    { title: 'Pensión', href: '#' },
    { title: 'Descuentos', href: '#' },
    { title: 'Eventos', href: '#' },
  ];

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
        <Box marginBottom={2}>
          <NavItem title={'Ahorro e inversión'} items={companyPages} />
        </Box>
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

export default SidebarNav;
