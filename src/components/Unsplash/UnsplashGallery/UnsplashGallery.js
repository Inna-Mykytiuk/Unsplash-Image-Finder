import { GalleryStyled } from './UnsplashGallery.styled';
import { Searchbar } from '../UnSearch/UnSearchbar';
import { Images } from '../UnImages/UnImages';
import { useAxios } from 'utils/unsplashApi';
import React from 'react';

import { createContext, useState } from 'react';
import { Button } from '../UnButton/UnButton';

export const ImageContext = createContext();
const KEY = 'wEMe4Xkd-5sh2eLmEuqABK1YZSiAeytPDL3PJCCokLY';

export const UnsplashGallery = () => {
  const [searchImage, setSearchImage] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 10;
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=${page}&query=${searchImage}&client_id=${KEY}&per_page=${perPage}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  const onLoadMoreButton = () => {
    // console.log(page);
    setPage(prevPage => prevPage + 1);
  };

  return (
    <ImageContext.Provider value={value}>
      <GalleryStyled>
        <h1>Unsplash Gallery</h1>
        <Searchbar />
        <Images />
        {/* {response && response.data && response.data.length > 1 && (
          <Button onLoadMoreButton={onLoadMoreButton}>Load More</Button>
        )} */}
        <Button onLoadMoreButton={onLoadMoreButton} />
      </GalleryStyled>
    </ImageContext.Provider>
  );
};
