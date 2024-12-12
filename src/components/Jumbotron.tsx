import React from 'react';
import { Button, Container, Typography,styled, Box } from '@mui/material';
import Image from 'next/image';

interface iJumbotron{
    backgroundImage:string; 
  title:string; 
  subtitle: string;
  titleColor?:string,
  subtitleColor?:string,
  buttonText?:string;
  onButtonClick?:()=>void;
}
const Jumbotron = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  titleColor="#00ff00",
  subtitleColor="#ff0000",
  buttonText, 
  onButtonClick 
}:iJumbotron) => {
  const JumbotronBox = styled(Box)(({theme}) => ({
    position: 'relative',
    height: '500px',
    width: '90%', // Ocupar 90% del ancho
    maxWidth: '1200px', // Ancho máximo opcional
    margin: '20px auto', // Centrar horizontalmente
    borderRadius: theme.shape.borderRadius * 2, // Bordes redondeados
    overflow: 'hidden', // Asegurar que la imagen respete los bordes redondeados
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }));

  
  const ImageBackground = styled(Image)({
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
    objectFit: 'cover',
  });
  const Overlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1
  });

  const ContentBox = styled(Container)({
    position: 'relative',
    zIndex: 2,
    color: 'white',
    textAlign: 'center'
  });
  return (
    <JumbotronBox>
      <ImageBackground
        src={backgroundImage}
        alt="Jumbotron Background"
        fill
        priority
      />
      <Overlay />
      <ContentBox maxWidth="md">
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            marginBottom: 2,
            color: titleColor
          }}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="h5" 
          component="p" 
          sx={{ 
            marginBottom: 3,
            color: subtitleColor
          }}
        >
          {subtitle}
        </Typography>
        
        {buttonText && (
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        )}
      </ContentBox>
    </JumbotronBox>
  );
};

export default Jumbotron;