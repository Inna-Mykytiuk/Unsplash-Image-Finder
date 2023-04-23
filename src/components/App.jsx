import { AppStyled } from './App.styled';
// import { ImageGallery } from './ImageGallery/ImageGallery';
import { UnsplashGallery } from './Unsplash/UnsplashGallery/UnsplashGallery';
import React from 'react';

export const App = () => {
  return (
    <AppStyled>
      {/* <ImageGallery /> */}
      <UnsplashGallery />
    </AppStyled>
  );
};
