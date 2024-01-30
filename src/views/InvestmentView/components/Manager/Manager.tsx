import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Manager = (): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          align={'center'}
          sx={{ textTransform: 'uppercase' }}
          variant={'h5'}
          color={'text.secondary'}
          fontWeight={700}
        >
          Administrador de Inversiones y Agentes Comercializadores
        </Typography>
        <Typography
          fontWeight={400}
          color={'text.secondary'}
          variant={'subtitle2'}
          align={'center'}
        >
          Administrador de Inversiones
        </Typography>
        <Typography
          fontWeight={400}
          color={'text.secondary'}
          variant={'subtitle2'}
          align={'center'}
        >
          Asiento registral ante la Superintendencia del Sistema Financiero de
          los Administradores del Fondo de Ahorro Previsional Voluntario
          Proyecta 5Plus y Proyecta Life
        </Typography>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell>Columna 1</TableCell>
              <TableCell>Columna 2</TableCell>
              <TableCell>Columna 3</TableCell>
              <TableCell>Columna 4</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Fila 1, Columna 1</TableCell>
              <TableCell>Fila 1, Columna 2</TableCell>
              <TableCell>Fila 1, Columna 3</TableCell>
              <TableCell>Fila 1, Columna 4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fila 2, Columna 1</TableCell>
              <TableCell>Fila 2, Columna 2</TableCell>
              <TableCell>Fila 2, Columna 3</TableCell>
              <TableCell>Fila 2, Columna 4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fila 3, Columna 1</TableCell>
              <TableCell>Fila 3, Columna 2</TableCell>
              <TableCell>Fila 3, Columna 3</TableCell>
              <TableCell>Fila 3, Columna 4</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Manager;
