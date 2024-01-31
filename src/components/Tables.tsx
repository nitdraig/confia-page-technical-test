import React from 'react';
import Box from '@mui/material/Box';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

interface TableInfo {
  rows: string[];
  columns: string[];
}

interface TableInfoProps {
  tableInfo: TableInfo[];
}

const Tables: React.FC<TableInfoProps> = ({ tableInfo }) => {
  if (!tableInfo || tableInfo.length === 0) {
    return <div>No hay información de la tabla disponible.</div>;
  }

  return (
    <Box border="1px solid #ccc" borderRadius="8px" overflow="hidden">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              {tableInfo[0].columns.map((columnHeader, index) => (
                <TableCell key={index}>{columnHeader}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableInfo.map((rowInfo, rowIndex) => (
              <TableRow key={rowIndex}>
                {rowInfo.rows.map((cellData, cellIndex) => (
                  <TableCell key={cellIndex}>{cellData}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Tables;
