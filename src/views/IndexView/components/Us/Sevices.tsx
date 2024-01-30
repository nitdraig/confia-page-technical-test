/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 'Inversión a largo plazo',
    subtitle:
      'Nuevas formas de invertir. Tenemos en cuenta todos los movimientos para crear tu cartera ideal. ',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
            stroke="#D3282A"
            strokeWidth="1.5"
          ></path>
          <path
            d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6"
            stroke="#D3282A"
            strokeWidth="1.5"
          ></path>
          <path
            d="M12 17.3333C13.1046 17.3333 14 16.5871 14 15.6667C14 14.7462 13.1046 14 12 14C10.8954 14 10 13.2538 10 12.3333C10 11.4129 10.8954 10.6667 12 10.6667M12 17.3333C10.8954 17.3333 10 16.5871 10 15.6667M12 17.3333V18M12 10V10.6667M12 10.6667C13.1046 10.6667 14 11.4129 14 12.3333"
            stroke="#D3282A"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    title: 'Para tu seguridad',
    subtitle:
      'Consultanos 24/7, tenemos asesores expertos en cada área para solucionar tus dudas e inconvenientes.',
    icon: (
      <svg
        viewBox="-0.5 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <path
            d="M6.72266 5.47968C6.81011 4.6032 7.11663 3.7628 7.61402 3.03585C8.11141 2.30889 8.78368 1.71874 9.56895 1.31971C10.3542 0.920684 11.2272 0.725607 12.1077 0.752437C12.9881 0.779267 13.8476 1.02714 14.6071 1.47324C15.3666 1.91935 16.0017 2.54934 16.4539 3.30524C16.9061 4.06113 17.1609 4.91863 17.1948 5.79881C17.2287 6.67899 17.0407 7.55355 16.648 8.342C16.2627 9.11563 15.6925 9.78195 14.9883 10.2821"
            stroke="#D3282A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{' '}
          <path
            d="M7.43945 3.35268C8.25207 4.19161 9.22512 4.85854 10.3007 5.31379C11.3763 5.76904 12.5325 6.00332 13.7005 6.00268C14.8492 6.00382 15.9865 5.77762 17.0469 5.33742"
            stroke="#D3282A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{' '}
          <path
            d="M10.8232 9.75268C10.5266 9.75268 10.2366 9.84065 9.98989 10.0055C9.74321 10.1703 9.55096 10.4046 9.43742 10.6787C9.32389 10.9527 9.29419 11.2543 9.35206 11.5453C9.40994 11.8363 9.5528 12.1036 9.76258 12.3133C9.97236 12.5231 10.2396 12.666 10.5306 12.7239C10.8216 12.7817 11.1232 12.752 11.3973 12.6385C11.6714 12.525 11.9056 12.3327 12.0704 12.086C12.2353 11.8394 12.3232 11.5493 12.3232 11.2527C12.3232 10.8549 12.1652 10.4733 11.8839 10.192C11.6026 9.91071 11.2211 9.75268 10.8232 9.75268Z"
            stroke="#D3282A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{' '}
          <path
            d="M4.82324 7.17467V8.25268C4.82324 9.04832 5.13931 9.81139 5.70192 10.374C6.26453 10.9366 7.02759 11.2527 7.82324 11.2527H9.24649"
            stroke="#D3282A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{' '}
          <path
            d="M21.7005 23.2527C21.7006 21.4693 21.211 19.7202 20.2852 18.196C19.3632 16.6779 18.0438 15.4409 16.4697 14.6187"
            stroke="#D3282A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{' '}
          <path
            d="M2.2002 23.2527C2.2 21.4695 2.68926 19.7206 3.61465 18.1963C4.53542 16.6797 5.85284 15.4435 7.42453 14.621"
            stroke="#D3282A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{' '}
        </g>
      </svg>
    ),
  },
  {
    title: 'Nosotros',
    subtitle:
      'Tenemos la última tecnología para resguardar tus datos, inversiones y movimientos.',
    icon: (
      <svg
        fill="#D3282A"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 31.465 31.465"
        xmlSpace="preserve"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <path d="M30.219,7.011V5.03l-0.287-0.113c-0.097-0.039-2.426-0.943-5.533-0.943c-3.328,0-6.193,1.014-8.526,3.015 c-2.332-2.001-5.199-3.015-8.527-3.015c-3.107,0-5.436,0.904-5.533,0.942L1.526,5.03v1.835C0.585,7.041,0,7.356,0,7.87 c0,2.676,0,18.918,0,18.918h13.932c0.482,0.432,1.187,0.703,1.975,0.703s1.493-0.271,1.975-0.703h13.583c0,0,0-17.979,0-18.918 C31.464,7.452,30.99,7.179,30.219,7.011z M15.722,25.296c-1.157-0.477-5.141-1.991-9.13-1.991c-1.576,0-2.973,0.241-4.163,0.719 V5.655c0.694-0.231,2.587-0.779,4.917-0.779c3.064,0,5.696,0.927,7.846,2.734v10.964l0.531-0.584L15.722,25.296L15.722,25.296z M29.316,24.028c-1.278-0.514-2.744-0.772-4.371-0.772c-3.987,0-7.783,1.528-8.924,2.03v-7.297l0.53,0.584V7.609 c2.15-1.808,4.783-2.734,7.847-2.734c2.322,0,4.221,0.549,4.916,0.779v18.374H29.316z"></path>{' '}
              <path d="M4.215,8.071l0.188,0.707c4.705-1.247,8.938,1.062,8.98,1.086l0.356-0.64C13.557,9.123,9.211,6.747,4.215,8.071z"></path>{' '}
              <path d="M4.215,10.141l0.188,0.706c4.705-1.248,8.938,1.062,8.98,1.084l0.356-0.637C13.557,11.191,9.211,8.817,4.215,10.141z"></path>{' '}
              <path d="M4.215,12.084l0.188,0.707c4.705-1.246,8.938,1.063,8.98,1.086l0.356-0.64C13.557,13.137,9.211,10.763,4.215,12.084z"></path>{' '}
              <path d="M4.215,14.218l0.188,0.706c4.705-1.248,8.938,1.062,8.98,1.086l0.356-0.639C13.557,15.269,9.211,12.893,4.215,14.218z"></path>{' '}
              <path d="M4.215,16.192l0.188,0.707c4.705-1.248,8.938,1.062,8.98,1.086l0.356-0.64C13.557,17.245,9.211,14.87,4.215,16.192z"></path>{' '}
              <path d="M4.215,18.223l0.188,0.705c4.705-1.247,8.938,1.063,8.98,1.086l0.356-0.638C13.557,19.273,9.211,16.898,4.215,18.223z"></path>{' '}
              <path d="M4.215,20.255l0.188,0.707c4.705-1.248,8.938,1.062,8.98,1.085l0.356-0.638C13.557,21.307,9.211,18.932,4.215,20.255z"></path>{' '}
              <path d="M22.943,10.952v-0.8h-0.521v0.8c-0.313,0-0.631,0.046-0.95,0.136c-0.322,0.09-0.609,0.229-0.867,0.42 c-0.256,0.191-0.467,0.434-0.631,0.731c-0.162,0.296-0.244,0.649-0.244,1.055c0,0.288,0.043,0.529,0.129,0.727 c0.086,0.197,0.211,0.367,0.371,0.51c0.16,0.145,0.354,0.268,0.58,0.371c0.228,0.104,0.479,0.201,0.752,0.295 c0.152,0.053,0.301,0.099,0.445,0.135c0.145,0.037,0.281,0.075,0.415,0.115v1.412c-0.192-0.015-0.344-0.056-0.45-0.125 c-0.106-0.07-0.188-0.154-0.246-0.252c-0.057-0.096-0.093-0.197-0.109-0.306c-0.018-0.104-0.025-0.202-0.025-0.289H19.45 c0.014,0.327,0.077,0.646,0.19,0.951c0.112,0.307,0.289,0.577,0.524,0.815c0.237,0.237,0.541,0.428,0.911,0.57 c0.371,0.143,0.82,0.215,1.347,0.215v0.99h0.521v-0.99c0.527,0,0.977-0.07,1.347-0.209c0.37-0.141,0.672-0.32,0.905-0.542 c0.234-0.22,0.402-0.467,0.506-0.739c0.104-0.273,0.154-0.548,0.154-0.82c0-0.281-0.029-0.542-0.09-0.782 c-0.061-0.239-0.19-0.462-0.396-0.664c-0.204-0.204-0.498-0.392-0.882-0.563c-0.383-0.169-0.898-0.324-1.545-0.465v-1.12 c0.125,0.026,0.232,0.059,0.32,0.091c0.086,0.033,0.157,0.076,0.215,0.13c0.056,0.054,0.1,0.124,0.129,0.209 c0.031,0.088,0.052,0.194,0.065,0.322h1.911c0-0.407-0.07-0.759-0.215-1.053c-0.145-0.293-0.337-0.534-0.581-0.726 c-0.243-0.189-0.524-0.33-0.847-0.42C23.625,10.997,23.291,10.952,22.943,10.952z M22.423,13.535 c-0.474-0.094-0.711-0.274-0.711-0.539c0-0.201,0.074-0.328,0.22-0.382c0.147-0.054,0.312-0.08,0.491-0.08V13.535z M23.555,15.852 c0.146,0.091,0.219,0.224,0.219,0.396c0,0.194-0.08,0.34-0.239,0.437c-0.16,0.097-0.357,0.155-0.591,0.176v-1.271 C23.204,15.674,23.407,15.762,23.555,15.852z"></path>{' '}
            </g>
          </g>
        </g>
      </svg>
    ),
  },
];

const Us = (): JSX.Element => {
  return (
    <Box id="us">
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Nosotros
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            Te ayudamos a potenciar tu dinero.
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  style={{ backgroundColor: 'transparent' }}
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Us;