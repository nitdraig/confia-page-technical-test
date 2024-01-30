import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

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
    <Grid>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        marginBottom={{ xs: 2, sm: 4 }}
      >
        <Box
          component={'img'}
          src="https://res.cloudinary.com/draig/image/upload/v1706560307/pruebas/confia/veenioiwmec8zf545ood.png"
          height={60}
          width={200}
        />
      </Box>
      <Grid justifyContent={'center'} container spacing={2}>
        {columns.map((column, index) => (
          <Grid item xs={12} sm={2.3} key={index}>
            <Box marginTop={1}>
              <Typography variant="h6" color="text.primary">
                {column.title}
              </Typography>
              {column.links.map((link, linkIndex) => (
                <Box key={linkIndex} marginTop={1}>
                  <Link
                    underline="none"
                    component="a"
                    href={link.url}
                    color="text.primary"
                    variant={'subtitle2'}
                  >
                    {link.text}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography
            align={'left'}
            variant={'subtitle2'}
            color="text.secondary"
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
