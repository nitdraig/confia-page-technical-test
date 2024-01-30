import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Lists from './components/Lists';

interface listItemsRecord {
  question: string;
  answer: string[];
}

interface listItemsRecordProps {
  listItems: listItemsRecord[];
}

const Record: React.FC<listItemsRecordProps> = ({ listItems }) => {
  return (
    <Box>
      <Box>
        <Typography
          align={'center'}
          sx={{ textTransform: 'uppercase' }}
          variant={'h5'}
          color={'text.secondary'}
          fontWeight={700}
        >
          Récord profesional y académico de los administradores del Fondo de
          Ahorro Previsional Voluntario Proyecta Life
        </Typography>
        <Typography
          fontWeight={700}
          color={'text.secondary'}
          variant={'subtitle2'}
          align={'center'}
        >
          Rafael Castellanos
        </Typography>
        <Typography
          fontWeight={400}
          color={'text.secondary'}
          variant={'subtitle2'}
          align={'center'}
        >
          Perfil general: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Id voluptatum sed maxime placeat corrupti consequatur
          voluptates. Architecto voluptatibus odio earum nam aspernatur eos,
          recusandae consequatur incidunt, at perferendis saepe odit!
        </Typography>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell>Columna 1</TableCell>
              <TableCell>Columna 2</TableCell>
              <TableCell>Columna 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Fila 1, Columna 1</TableCell>
              <TableCell>Fila 1, Columna 2</TableCell>
              <TableCell>Fila 1, Columna 3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fila 2, Columna 1</TableCell>
              <TableCell>Fila 2, Columna 2</TableCell>
              <TableCell>Fila 2, Columna 3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Typography
          align={'center'}
          sx={{ textTransform: 'uppercase' }}
          variant={'subtitle2'}
          color={'text.secondary'}
          fontWeight={500}
        >
          Experiencia Profesional
        </Typography>
        <Lists lists={listItems} />
      </Box>
    </Box>
  );
};

export default Record;
