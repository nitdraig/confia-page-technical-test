import React from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const SearchButton = (): JSX.Element => {
  return (
    <Button
      sx={{
        borderRadius: 2,
        minWidth: 'auto',
        padding: 0.5,
      }}
    >
      <SearchIcon style={{ color: 'white' }} />
    </Button>
  );
};

export default SearchButton;
