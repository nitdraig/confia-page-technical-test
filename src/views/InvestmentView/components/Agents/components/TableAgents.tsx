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
        <Box
          key={index}
          border="1px solid #ccc"
          borderRadius="8px"
          overflow="hidden"
          marginBottom={3}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell
                    style={{ fontSize: '1.5em', color: '#949494' }}
                    colSpan={table.columns.length}
                  >
                    {table.title}
                  </TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: '#f5f5f5', color: '#777777' }}>
                  {table.columns.map((column, columnIndex) => (
                    <TableCell key={columnIndex}>{column}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {table.rows.map((row, rowIndex) => (
                  <TableRow key={rowIndex} sx={{ color: '#777777' }}>
                    {row.map((cell, cellIndex) => (
                      <TableCell key={cellIndex}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </Box>
  );
};

export default TableAgents;
