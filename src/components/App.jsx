import { AppStyled } from './App.styled';
import { UnsplashGallery } from './Unsplash/UnsplashGallery/UnsplashGallery';
import React from 'react';

export const App = () => {
  return (
    <AppStyled>
      <UnsplashGallery />
    </AppStyled>
  );
};
