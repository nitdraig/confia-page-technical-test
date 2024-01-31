import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

export const SideSection = () => {
  return (
    <Grid item xs={12} md={8}>
      <Box
        style={{
          padding: '20px',
          borderLeft: '1px solid #e0e0e0',
          backgroundColor: '#f8f8f8',
        }}
      >
        <Box marginBottom={4}>
          <Typography variant="h5">Índice</Typography>
          <Typography>Texto 1</Typography>
          <Typography>Texto 2</Typography>
          <Typography>Texto 3</Typography>
        </Box>

        <Box marginBottom={4}>
          <Typography variant="h5">Noticias</Typography>

          <Box marginBottom={2}>
            <img src="ruta_imagen_1" alt="Noticia 1" />
            <Typography variant="subtitle1">Título 1</Typography>
            <Typography>Subtítulo 1</Typography>
            <Typography>Fecha 1</Typography>
          </Box>
          <Box marginBottom={2}>
            <img src="ruta_imagen_2" alt="Noticia 2" />
            <Typography variant="subtitle1">Título 2</Typography>
            <Typography>Subtítulo 2</Typography>
            <Typography>Fecha 2</Typography>
          </Box>
          <Box marginBottom={2}>
            <img src="ruta_imagen_3" alt="Noticia 3" />
            <Typography variant="subtitle1">Título 3</Typography>
            <Typography>Subtítulo 3</Typography>
            <Typography>Fecha 3</Typography>
          </Box>
        </Box>

        <Box marginBottom={4}>
          <Typography variant="h5">Imagen Fija</Typography>
          <Box>
            <img
              src="ruta_imagen_fija"
              alt="Imagen Fija"
              style={{
                width: '100%',
                borderRadius: '12px',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
