import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableAgents from './components/TableAgents';
interface tablesAgents {
  title: string;
  columns: string[];
  rows: string[][];
}

interface TablesAgentsProps {
  tables: tablesAgents[];
}

const Agents: React.FC<TablesAgentsProps> = ({ tables }) => {
  return (
    <Box paddingLeft={2} paddingRight={2} marginBottom={10}>
      <Box>
        <Typography
          align={'left'}
          variant={'subtitle1'}
          color={'text.secondary'}
          fontWeight={700}
          marginBottom={2}
        >
          Agentes comercializadores
        </Typography>
        <Typography
          fontWeight={400}
          color={'text.secondary'}
          variant={'subtitle2'}
          align={'left'}
          marginBottom={2}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          distinctio error voluptas perferendis quam laborum officiis aliquam,
          vero molestiae laudantium culpa ipsum voluptatibus. Rerum quos esse in
          qui iure labore.
        </Typography>
      </Box>
      <TableAgents tables={tables} />
    </Box>
  );
};

export default Agents;
