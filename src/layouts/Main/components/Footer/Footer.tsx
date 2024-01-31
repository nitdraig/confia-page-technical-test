import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Footer = (): JSX.Element => {
  const columns = [
    {
      title: 'Afiliados',
      links: [
        { text: 'Afiliarte a AFP CONFIA', url: '/link1' },
        { text: 'Afiliación como Trabajador', url: '/link2' },
        { text: 'Independiente', url: '/link1' },
        { text: 'Distribución de tu Cotización', url: '/link1' },
        { text: 'Tus documentos', url: '/link1' },
        { text: 'Beneficios por Retiro', url: '/link1' },
        { text: 'Beneficios por Invalidez', url: '/link1' },
        { text: 'Beneficios por Sobrevivencia', url: '/link1' },
      ],
    },
    {
      title: 'Pensionados',
      links: [
        { text: 'Tipos de pensión', url: '/link3' },
        { text: 'Pensiones y Beneficios ', url: '/link4' },
        { text: 'Formas de Pago de Pensión', url: '/link4' },
        { text: 'Control de sobrevivencia', url: '/link4' },
        {
          text: 'Continuar cotización después de cumplir la edad legal',
          url: '/link4',
        },
      ],
    },
    {
      title: 'Empresas',
      links: [
        { text: 'Inscripción de empresas', url: '/link7' },
        { text: 'Ingreso base y tasas de cotización', url: '/link8' },
        { text: 'Cotización por empleados pensionados', url: '/link7' },
        { text: 'Calendario de Pagos', url: '/link8' },
        { text: 'Donde pagar la planilla previsional', url: '/link7' },
        { text: 'Pagos en exceso', url: '/link8' },
      ],
    },
    {
      title: 'Atención al cliente',
      links: [
        { text: 'Canales de Atención', url: '/link7' },
        { text: 'Regístrate en CONFIA Virtial', url: '/link8' },
        { text: 'Contáctenos', url: '/link7' },
        { text: 'Preguntas Frecuentes', url: '/link8' },
        { text: 'Mapa del Sitio', url: '/link7' },
        { text: 'Sitios de interés', url: '/link8' },
        { text: 'Biblioteca de Documentos', url: '/link7' },
        { text: 'Canales de Atención', url: '/link8' },
      ],
    },
    {
      title: 'Ahorro voluntario',
      links: [
        { text: 'Fondo Proyecta Life', url: '/link9' },
        { text: 'Fondo Proyecta 5Plus', url: '/link10' },
      ],
    },
  ];

  return (
    <Grid style={{ backgroundColor: '#c7c7c7' }}>
      <Box style={{ backgroundColor: '#7a7a7a' }}>
        <Box marginBottom={0} display={'flex'} justifyContent={'center'}>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#ffffff',
              color: '#6b6b6b',
              fontWeight: 800,
              marginTop: '3em',
            }}
          >
            Servicio de asistencia
          </Button>
        </Box>
        <Box display={'flex'} padding={2} justifyContent={'center'}>
          <Typography
            style={{ color: '#ffffff', fontWeight: 600 }}
            justifyContent={'center'}
          >
            Disponible las 24 horas llamando al 2216-0890 o *MÁS desde tu
            celular
          </Typography>
        </Box>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        style={{ backgroundColor: '#7a7a7a' }}
        alignItems={'center'}
        marginBottom={{ xs: 2, sm: 4 }}
      >
        <Box
          style={{
            backgroundColor: '#7a7a7a',
          }}
        >
          <Box
            component={'img'}
            src="https://res.cloudinary.com/draig/image/upload/v1706692776/pruebas/confia/hylivwsfufacttaednbp.png"
            height={70}
            width={240}
            marginBottom={1}
          />
        </Box>
      </Box>

      <Grid justifyContent={'center'} container spacing={2}>
        {columns.map((column, index) => (
          <Grid
            item
            xs={12}
            style={{ paddingLeft: '2em', paddingRight: '2em' }}
            sm={2.3}
            key={index}
          >
            <Box marginTop={1}>
              <Typography variant="h6" color="black">
                {column.title}
              </Typography>
              {column.links.map((link, linkIndex) => (
                <Box key={linkIndex} marginTop={0.5}>
                  <Link
                    underline="none"
                    component="a"
                    href={link.url}
                    color="text.primary"
                    style={{ fontSize: '12px' }}
                  >
                    {link.text}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
        <Grid marginTop={8} style={{ backgroundColor: '#dadada' }} item xs={12}>
          <Typography
            marginLeft={5.5}
            marginBottom={2}
            align={'left'}
            variant={'subtitle2'}
            color="black"
            gutterBottom
          >
            2024 &copy; Copyright - AFP Confía - {}
            <a href="">Politica de Privacidad </a>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
