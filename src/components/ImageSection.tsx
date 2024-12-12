import React from 'react'
import Image from 'next/image';
import { Box, Button, Container, ImageList, ImageListItem, Typography } from '@mui/material'

const ImageSection = () => {
  const galleryImages = [
    { src: 'https://drive.google.com/uc?export=view&id=1kLyuQdxtzeB1wa0jyCR3wQ3ys-XK2iDG', cols: 2, rows: 2, alt: 'Descripción 1' },
    { src: 'https://drive.google.com/uc?export=view&id=1G4TH8gXTOcW0494tCIgdBXWaEuWzuC7v', cols: 2, rows: 2, alt: 'Descripción 5' },
    { src: 'https://drive.google.com/uc?export=view&id=1NRwRf1nhkyGxKa_tmIn7TPgQ4iffYqNo', cols: 2, rows: 2, alt: 'Descripción 9' },
    { src: 'https://drive.google.com/uc?export=view&id=1X6tatq8mDnFcJixZwGBVaUnihodvN9Nr', cols: 2, rows: 1, alt: 'Descripción 2' },
    { src: 'https://drive.google.com/uc?export=view&id=1a1fhCO6hRs7s0suti91fTITbwYThKyjF', cols: 2, rows: 2, alt: 'Descripción 3' },
    { src: 'https://drive.google.com/uc?export=view&id=1L-rg0kTReCkPgkTdldLRtb-RnJDJMhvS', cols: 2, rows: 2, alt: 'Descripción 8' },
    { src: 'https://drive.google.com/uc?export=view&id=1CY86c3VZ8-9r5366ux4yhWmC7Xq4gPT6', cols: 2, rows: 2, alt: 'Descripción 6' },
    { src: 'https://drive.google.com/uc?export=view&id=18O5vGt23RptSbS-9KaF9diEMwYfhEqhu', cols: 2, rows: 2, alt: 'Descripción 7' },
    { src: 'https://drive.google.com/uc?export=view&id=1XGQUdhndNMsiXNWbgm5ieNcBhUDVUE1I', cols: 2, rows: 2, alt: 'Descripción 10' },
    { src: 'https://drive.google.com/uc?export=view&id=14DQIdwG35F2l9DLPGjpOaBhyslR5HF1C', cols: 2, rows: 4, alt: 'corriendo' },
    { src: 'https://drive.google.com/uc?export=view&id=1SeLikldmx0Scb4gjmCGKrwhzl7rY9M6J', cols: 2, rows: 2, alt: 'Descripción 12' },
    { src: 'https://drive.google.com/uc?export=view&id=10-HBllQrHIyjrgdqCtoDYIB-2pMhufMr', cols: 2, rows: 2, alt: 'Descripción 11' },
  ];


  const handleVisitGallery = () => {
    window.open('https://drive.google.com/drive/folders/18Z-KUnE4d_2nSvbcF3T0YJSV7jMxrGKt?usp=drive_link', '_blank', 'noopener,noreferrer');
  };


  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo transparente al 80%
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Sombra
        borderRadius: '10px', // Puntas redondeadas
        margin: '5%', // Margen del 5% con los límites de su contenedor
        padding: '20px', // Espacio interior
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
          >
            Galería
          </Typography>
        </Box>

        <Box sx={{ width: '100%', height: '600px', overflowY: 'auto' }}>
          <ImageList
            variant="quilted"
            cols={6}
            gap={8}
            sx={{
              width: '100%',
              height: '100%',
              margin: 0,
            }}
          >
            {galleryImages.map((image, index) => (
              <ImageListItem
                key={index}
                cols={
                  index === 0 || index === 7 ? 2 :
                    index === 1 || index === 6 ? 2 :
                      1
                }
                rows={
                  index === 0 || index === 7 ? 2 :
                    index === 1 || index === 6 ? 2 :
                      1
                }
                sx={{
                  position: 'relative',
                  height: index === 0 || index === 7 ? '400px' :
                    index === 1 || index === 6 ? '400px' : '200px'
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3
        }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'rgb(70,145,138)', color: 'white' }}
            onClick={handleVisitGallery}
          >
            Visitar Galería
          </Button>
        </Box>
      </Container>

    </Box>
  )
}

export default ImageSection