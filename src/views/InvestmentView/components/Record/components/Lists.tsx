import React from 'react';
import { Box, Typography } from '@mui/material';

interface ListItem {
  rol: string;
  functions: string[];
}

interface ListsProps {
  lists: ListItem[];
}

const Lists: React.FC<ListsProps> = ({ lists }) => {
  return (
    <Box>
      {lists.map((item, index) => (
        <div key={index}>
          <Typography
            fontWeight={600}
            color={'text.secondary'}
            variant={'subtitle1'}
            align={'left'}
          >
            {item.rol}
          </Typography>
          <Typography
            fontWeight={400}
            color={'text.secondary'}
            variant={'subtitle2'}
            align={'left'}
          >
            Funciones principales:
          </Typography>
          <ul>
            {item.functions.map((functionItem, functionIndex) => (
              <li style={{ color: '#8f8f8f' }} key={functionIndex}>
                {functionItem}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Box>
  );
};

export default Lists;
