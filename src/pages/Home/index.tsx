import React, { useState, useEffect } from 'react';
import logo from '@/assets/logo.png'; // Reemplaza con la ruta a tu logo
import header from '@/assets/header.png'; // Reemplaza con la ruta a tu logo
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';

interface iDias {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const Home = () => {
  const [timeLeft, setTimeLeft] = useState<iDias | null>(null);

  useEffect(() => {
    const targetDate = new Date('2024-11-30Z09:00:00').getTime(); // Fecha y hora del evento

    const timer = setInterval(() => {
      const difference: number = targetDate - (new Date()).getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft(null);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="homepage-background">
       <Image src={header} alt="header" className="header" />
      <div className='logo-top'>
        <Image src={logo} alt="Club Logo" className="club-logo" height={80} width={80} />
      </div>
      <h1>Tiempo faltante para la largada:</h1>
      <div className="timer">
        {timeLeft && (
          <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          bgcolor="rgb(86,165,170)" // Azul oscuro de fondo
          color="rgb(255,253,22)" // Amarillo fosforescente
          p={3}
          borderRadius="12px"
        >
          <Box textAlign="center">
            <Typography variant="h4" sx={{ color: 'rgb(255,253,22)' }}>{timeLeft.days}</Typography>
            <Typography variant="subtitle1">Días</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h4" sx={{ color: 'rgb(255,253,22)' }}>{timeLeft.hours}</Typography>
            <Typography variant="subtitle1">Horas</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h4" sx={{ color: 'rgb(255,253,22)' }}>{timeLeft.minutes}</Typography>
            <Typography variant="subtitle1">Minutos</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h4" sx={{ color: 'rgb(255,253,22)' }}>{timeLeft.seconds}</Typography>
            <Typography variant="subtitle1">Segundos</Typography>
          </Box>
        </Box>
        //   <>

        //   <span className="hours">{String(timeLeft?.days).padStart(2, '0')}</span>
        //   <span className="separator">:</span>
        //   <span className="hours">{String(timeLeft?.hours).padStart(2, '0')}</span>
        //   <span className="separator">:</span>
        //   <span className="minutes">{String(timeLeft?.minutes).padStart(2, '0')}</span>
        //   <span className="separator">:</span>
        //   <span className="seconds">{String(timeLeft?.seconds).padStart(2, '0')}</span>
        // </>
      
      )}
      </div>

      <div className="downloads mt-8">
        <h1>No olvides leer los siguientes documentos:</h1>
        <Button><form action="https://storage.googleapis.com/feriaaac/publicos/seguridad.pdf" >
          <input type="submit" value="Plan de Seguridad" />
        </form></Button>

        <Button>
          <form action="https://storage.googleapis.com/feriaaac/publicos/bases.pdf" >
            <input type="submit" value="Bases" />
          </form></Button>

        <div className="register mt-8">
          <Button variant="contained" color="success">
            <form action="https://forms.gle/8dc88mRCDcd1VafQ7" target="_blank" rel="noopener noreferrer">
              <input type="submit" value="!Inscribete!" />
            </form></Button>
        </div>
      </div>
    </div>
  );
};

export default Home;