/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/desafio/inscripcion',
        destination: 'https://forms.gle/8dc88mRCDcd1VafQ7',
        permanent: true,
      },
      {
        source: '/desafio/bases',
        destination: 'https://storage.googleapis.com/feriaaac/publicos/bases.pdf',
        permanent: true,
      }, 
      {
        source: '/desafio/afichecuadrado',
        destination: 'https://storage.googleapis.com/feriaaac/publicos/Afiche%20cuadrado.png',
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
