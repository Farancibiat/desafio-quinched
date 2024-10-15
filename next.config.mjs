/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/desafio/inscripcion',
        destination: 'https://forms.gle/NR5wCEFRCDcnMTu27',
        permanent: true,
      },
      {
        source: '/desafio/bases',
        destination: 'https://storage.googleapis.com/feriaaac/publicos/bases.pdf',
        permanent: true,
      }, 
      {
        source: '/desafio/afichevalores',
        destination: 'https://storage.googleapis.com/feriaaac/publicos/AFICHE%20VALORES%20DESAFIO%20UNI%C3%93N%20DE%20LAS%20ISLAS.jpg',
        permanent: true,
      },
      {
        source: '/desafio/afichegral',
        destination: 'https://storage.googleapis.com/feriaaac/publicos/AFICHE%20DESAFIO%20UNI%C3%93N%20DE%20LAS%20ISLAS.jpg',
        permanent: true,
      },
      {
        source: '/desafio/seguridad',
        destination: 'https://storage.googleapis.com/feriaaac/publicos/seguridad.pdf',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
