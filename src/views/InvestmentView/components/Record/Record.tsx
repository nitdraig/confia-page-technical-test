import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Lists from './components/Lists';
import Tables from 'components/Tables';

interface listItemsRecord {
  rol: string;
  functions: string[];
}
interface listableDataRecord {
  rows: string[];
  columns: string[];
}

interface listItemsRecordProps {
  listItems: listItemsRecord[];
  listTableData: listableDataRecord[];
}

const Record: React.FC<listItemsRecordProps> = ({
  listItems,
  listTableData,
}) => {
  return (
    <Box padding={2}>
      <Box>
        <Typography
          align={'left'}
          variant={'subtitle1'}
          color={'text.secondary'}
          fontWeight={700}
          marginBottom={2}
        >
          Récord profesional y académico de los administradores del Fondo de
          Ahorro Previsional Voluntario Proyecta Life
        </Typography>
        <Typography
          fontWeight={700}
          color={'text.secondary'}
          variant={'subtitle1'}
          align={'left'}
          marginBottom={2}
        >
          Rafael Castellanos
        </Typography>
        <Typography
          fontWeight={400}
          color={'text.secondary'}
          variant={'subtitle2'}
          align={'left'}
          marginBottom={2}
        >
          Perfil general: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Id voluptatum sed maxime placeat corrupti consequatur
          voluptates. Architecto voluptatibus odio earum nam aspernatur eos,
          recusandae consequatur incidunt, at perferendis saepe odit!
        </Typography>
      </Box>
      <Box paddingBottom={2}>
        <Tables tableInfo={listTableData} />
      </Box>
      <Box>
        <Typography
          align={'left'}
          variant={'subtitle2'}
          color={'text.secondary'}
          fontWeight={500}
          marginBottom={1}
        >
          Experiencia Profesional:
        </Typography>
        <Lists lists={listItems} />
      </Box>
    </Box>
  );
};

export default Record;
