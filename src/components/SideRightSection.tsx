import { Box, Typography } from '@mui/material';
import React from 'react';

export const SideRightSection = () => {
  const noticias = [
    {
      imagen: 'image1.png',
      titulo: 'Título de la noticia 1',
      subtitulo: 'Subtítulo de la noticia 1',
      fecha: '10/12/2009',
    },
    {
      imagen: 'image2.png',
      titulo: 'Título de la noticia 2',
      subtitulo: 'Subtítulo de la noticia 2',
      fecha: '10/12/2009',
    },
    {
      imagen: 'image3.png',
      titulo: 'Título de la noticia 3',
      subtitulo: 'Subtítulo de la noticia 3',
      fecha: '10/12/2009',
    },
  ];
  return (
    <Box
      style={{
        position: 'absolute',
        right: 0,
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '15em',
      }}
    >
      <Box style={{ marginLeft: '-18em' }}>
        <Typography variant={'h5'} fontWeight={700} color={'text.secondary'}>
          Índice
        </Typography>
        <Typography variant={'subtitle2'} color={'text.secondary'}>
          Cotizaciones
        </Typography>
        <Typography variant={'subtitle2'} color={'text.secondary'}>
          Devolución de saldo por enfermedad
        </Typography>
        <Typography variant={'subtitle2'} color={'text.secondary'}>
          Afiliados extranjeros
        </Typography>
        <Box style={{ marginTop: '1em' }}>
          <Typography variant={'h5'} fontWeight={700} color={'text.secondary'}>
            Noticias
          </Typography>
          {noticias.map((noticia, index) => (
            <Box
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '2em',
              }}
            >
              <img
                src={noticia.imagen}
                alt={`Imagen ${index + 1}`}
                style={{ width: '80px', marginRight: '1em' }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  color="text.secondary"
                >
                  {noticia.titulo}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {noticia.subtitulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {noticia.fecha}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
