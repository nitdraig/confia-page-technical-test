import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SearchButton from 'components/SearchButton';

const TopNav = (): JSX.Element => {
  return (
    <Box
      display={'flex'}
      justifyContent={'flex-end'}
      marginTop={{ sm: 1 }}
      alignItems={'center'}
    >
      <Box marginRight={{ xs: 0, sm: 1 }}>
        <Link
          underline="none"
          component="a"
          href="/#us"
          color={'common.white'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          Nosotros
          <Box
            padding={0.5}
            display={'inline-flex'}
            borderRadius={1}
            marginLeft={1}
          >
            |
          </Box>
        </Link>
      </Box>
      <Box marginRight={{ xs: 0, sm: 1 }}>
        <Link
          underline="none"
          component="a"
          href="/#contact"
          color={'common.white'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          Contáctanos
          <Box
            padding={0.5}
            display={'inline-flex'}
            borderRadius={1}
            marginLeft={1}
          >
            |
          </Box>
        </Link>
      </Box>
      <Box marginRight={{ xs: 0, sm: 1 }}>
        <Link
          underline="none"
          component="a"
          href="/#benefits"
          color={'common.white'}
        >
          Conoce más
          <Box
            padding={0.5}
            display={'inline-flex'}
            borderRadius={1}
            marginLeft={1}
          >
            |
          </Box>
        </Link>
      </Box>
      <Box display={{ xs: 'none', md: 'block' }}>
        <SearchButton />
      </Box>
    </Box>
  );
};

export default TopNav;
