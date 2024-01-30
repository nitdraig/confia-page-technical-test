import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface TableData {
  title: string;
  columns: string[];
  rows: string[][];
}

interface TableAgentsProps {
  tables: TableData[];
}

const TableAgents: React.FC<TableAgentsProps> = ({ tables }) => {
  return (
    <Box>
      {tables.map((table, index) => (
        <TableContainer style={{ marginBottom: '2em' }} key={index}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell
                  style={{ fontSize: '1.5em' }}
                  colSpan={table.columns.length}
                >
                  {table.title}
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                {table.columns.map((column, columnIndex) => (
                  <TableCell key={columnIndex}>{column}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {table.rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </Box>
  );
};

export default TableAgents;
