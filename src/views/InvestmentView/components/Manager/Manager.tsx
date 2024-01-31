import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Tables from 'components/Tables';
interface ManagerItem {
  rows: string[];
  columns: string[];
}

interface ManagerProps {
  tableInfo: ManagerItem[];
}

const Manager: React.FC<ManagerProps> = ({ tableInfo }) => {
  return (
    <Box>
      <Box>
        <Typography
          marginBottom={2}
          align={'left'}
          variant={'h5'}
          color={'text.secondary'}
          fontWeight={700}
        >
          Administrador de Inversiones y Agentes Comercializadores
        </Typography>
        <Typography
          marginBottom={2}
          fontWeight={400}
          color={'text.secondary'}
          variant={'subtitle2'}
          align={'left'}
        >
          Administrador de Inversiones
        </Typography>
        <Typography
          marginBottom={2}
          fontWeight={400}
          color={'text.secondary'}
          variant={'subtitle2'}
          align={'left'}
        >
          Asiento registral ante la Superintendencia del Sistema Financiero de
          los Administradores del Fondo de Ahorro Previsional Voluntario
          Proyecta 5Plus y Proyecta Life
        </Typography>
      </Box>
      <Tables tableInfo={tableInfo} />
    </Box>
  );
};

export default Manager;
