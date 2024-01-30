import React from 'react';
import { Box, Typography } from '@mui/material';

interface ListItem {
  question: string;
  answer: string[];
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
            align={'center'}
          >
            {item.question}
          </Typography>
          <Typography
            fontWeight={400}
            color={'text.secondary'}
            variant={'subtitle2'}
            align={'center'}
          >
            Funciones principales:
          </Typography>
          <ul>
            {item.answer.map((answerItem, answerIndex) => (
              <li style={{ color: '#8f8f8f' }} key={answerIndex}>
                {answerItem}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Box>
  );
};

export default Lists;
