import React from 'react';
import logo from '@/assets/logo.png'; // Reemplaza con la ruta a tu logo
import header from '@/assets/header.png'; // Reemplaza con la ruta a tu logo
import Image from 'next/image';
import Jumbotron from '@/components/Jumbotron';
import ImageSection from '@/components/ImageSection';
import { Box } from '@mui/material';




const Home = () => {


  return (
    <div className="homepage bg-teal-400">
      <div className='grid grid-cols-12 gap-4 bg-teal-100 shadow '>
        <div className='logo-top col-span-2 flex items-center'>
          <Image src={logo} alt="Club Logo" className="club-logo" width={80} />
        </div>
        <div className="col-span-1"></div>
        <div className='col-span-7 flex items-center'>
          <Image src={header} alt="header" className="mx-0 shadow-lg rounded-md my-auto" height={150} />
        </div>
      </div>



      <section className="bg-teal-400">
        <Jumbotron 
        backgroundImage='https://drive.google.com/uc?export=view&id=1TTsoXl2KrKOWlSrE26qcUV7qcTRjf9bq'
         title='¡Muchas Gracias!'
          subtitle='El Desafío de este año fué un éxito nuevamente!'
          titleColor='rgb(255,253,22)'
          subtitleColor='rgb(82,209,201)'
           />
      </section>
      <section className='h-100'>
      <Box>
        <ImageSection />
        </Box>

      </section>
      <section className="bg-teal-400">
        <div className='tope'></div>
      </section>

      <footer className="fixed bottom-0 left-0 z-20 w-full p-2 bg-teal-600 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <p className="text-sm  sm:text-center dark:text-gray-400">© 2024 <a href="https://www.aguasabiertaschiloe.cl/" className="hover:underline">Club Deportivo Social y Cultural Aguas Abiertas Chiloé</a>.
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