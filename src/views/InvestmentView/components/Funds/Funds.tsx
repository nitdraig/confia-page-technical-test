import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Funds = (): JSX.Element => {
  return (
    <Box>
      <Grid container alignItems="stretch">
        <Grid item xs={6}>
          <Box
            border="1px solid #e9e9e9"
            padding={2}
            style={{
              borderRight: 0,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              height: '100%',
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta rem
            libero, at, error illum quas expedita laboriosam aliquam ut quos
            officiis voluptatem amet. Perferendis tempora, facere eaque aperiam
            dignissimos vitae?
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            border="1px solid #e9e9e9"
            padding={2}
            style={{
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              height: '100%',
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            laborum rerum harum quas ipsam optio quisquam reiciendis cupiditate
            minus repellendus excepturi, quo exercitationem, cum aliquid, ea
            delectus culpa suscipit debitis?
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Funds;
