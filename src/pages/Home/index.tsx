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
    <div className="homepage ">
      <div className='grid grid-cols-12 gap-4 bg-teal-100 shadow '>
        <div className='logo-top col-span-2 flex items-center'>
          <Image src={logo} alt="Club Logo" className="club-logo" width={80} />
        </div>
        <div className="col-span-1"></div>
        <div className='col-span-7 flex items-center'>
          <Image src={header} alt="header" className="mx-0 shadow-lg rounded-md my-auto" height={150} />
        </div>
      </div>



      <section className="bg-center bg-no-repeat bg-teal-400 bg-blend-multiply ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 mb-8">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8 p-0" >


            <h1 className="text-gray-900 dark:text-white text-2xl md:text-4xl font-bold mb-2">Tiempo faltante para la largada:</h1>

            <div className="flex justify-center gap-4 mb-8">
            <div className='flex items-center'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100">
                  {/* <!-- Reloj circular --> */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="black"
                    stroke-width="5"
                    fill="none" />

                  {/* <!-- Aguja de la hora --> */}
                  <line
                    x1="50"
                    y1="50"
                    x2="50"
                    y2="30"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round" />

                  {/* <!-- Aguja del minuto --> */}
                  <line
                    x1="50"
                    y1="50"
                    x2="70"
                    y2="50"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round" />

                  {/* <!-- Centro del reloj --> */}
                  <circle
                    cx="50"
                    cy="50"
                    r="2"
                    fill="black" />
                </svg>
              </div>
              <div >
                <div className="timer">

                  <Box
                    className='mt-2'
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
                      <Typography variant="h4" className='text-3xl md:text-5xl' sx={{ color: 'rgb(255,253,22)' }}>{timeLeft ? timeLeft.days : 0}</Typography>
                      <Typography variant="subtitle1">Días</Typography>
                    </Box>
                    <Box textAlign="center">
                      <Typography variant="h4" className='text-3xl md:text-5xl' sx={{ color: 'rgb(255,253,22)' }}>{timeLeft ? timeLeft.hours : 0}</Typography>
                      <Typography variant="subtitle1">Horas</Typography>
                    </Box>
                    <Box textAlign="center">
                      <Typography variant="h4" className='text-3xl md:text-5xl' sx={{ color: 'rgb(255,253,22)' }}>{timeLeft ? timeLeft.minutes : 0}</Typography>
                      <Typography variant="subtitle1">Minutos</Typography>
                    </Box>
                    <Box textAlign="center">
                      <Typography variant="h4" className='text-3xl md:text-5xl' sx={{ color: 'rgb(255,253,22)' }}>{timeLeft ? timeLeft.seconds : 0}</Typography>
                      <Typography variant="subtitle1">Segundos</Typography>
                    </Box>
                  </Box>

                </div>
              </div>




            </div>


            <Button className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" variant="contained" color="success">
              <form action="https://forms.gle/NR5wCEFRCDcnMTu27" target="_blank" rel="noopener noreferrer">
                <input type="submit" value='¡ Inscribete !' />

              </form></Button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <a href="#" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                <svg className="w-2.5 h-2.5 me-1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
                  stroke="currentColor">

                  <circle
                    cx="50"
                    cy="80"
                    r="5"
                    stroke="currentColor"
                  />


                  <line

                    x1="50"
                    y1="60"
                    x2="50"
                    y2="20"
                    stroke="currentColor"
                    stroke-width="8"
                    stroke-linecap="round" />
                </svg>
                Importante
              </a>
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Revisas las Bases 2024</h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Te recomendamos leer detenidamente las bases, para evitar problemas de último minuto. En ellas encontrarás los recorridos, plan de contingencia y otros.</p>
              <a href="https://storage.googleapis.com/feriaaac/publicos/bases.pdf" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Ver Documento
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <a href="#" className="bg-yellow-100 text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-yellow-500 mb-2">
                <svg className="w-5 h-5 me-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" fill="currentColor">
                  <path d="M50 5 L75 20 L75 60 Q50 90 25 60 L25 20 Z" stroke="currentColor" stroke-width="5" fill="none" />
                  <path d="M35 50 L45 60 L65 40" stroke="currentColor" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Seguridad
              </a>
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Revisa el plan de Contingencia</h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Es nuestro compromiso asegurar que todos quienes participen del evento cuenten con el mayor resguardo, por lo que ponemos a disposición de todos los competidores el plan de contingencia 2024.</p>
              <a href="https://storage.googleapis.com/feriaaac/publicos/seguridad.pdf" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Ver Plan
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className=" p-2 bg-teal-600 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"></section>

      <footer className="fixed bottom-0 left-0 z-20 w-full p-2 bg-teal-600 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <p className="text-sm  sm:text-center dark:text-gray-400">© 2024 <a href="https://www.aguasabiertaschiloe.com/" className="hover:underline">Club Deportivo Social y Cultural Aguas Abiertas Chiloé</a>.
          </p>
          <p>
            <a href="https://www.farancibiat.cl/" className="hover:underline text-xs">Sitio desarrollado por Farancibiat</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;