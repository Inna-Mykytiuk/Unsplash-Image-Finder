// import { GalleryStyled } from './UnsplashGallery.styled';
// import { Searchbar } from '../UnSearch/UnSearchbar';
// import { Images } from '../UnImages/UnImages';
// import { useAxios } from 'utils/unsplashApi';
// import React from 'react';

// // import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { createContext, useState } from 'react';
// import { Button } from '../UnButton/UnButton';

// export const ImageContext = createContext();
// const KEY = 'wEMe4Xkd-5sh2eLmEuqABK1YZSiAeytPDL3PJCCokLY';

// export const UnsplashGallery = () => {
//   const [searchImage, setSearchImage] = useState('');
//   const [page, setPage] = useState(1);
//   const perPage = 10;
//   const { response, isLoading, error, fetchData } = useAxios(
//     `search/photos?page=${page}&query=${searchImage}&client_id=${KEY}&per_page=${perPage}`
//   );

//   const value = {
//     response,
//     isLoading,
//     error,
//     fetchData,
//     searchImage,
//     setSearchImage,
//   };

//   // if (!totalPages) {
//   //   console.log(totalPages, hits);
//   //   toast.error('There are no images for your request');
//   //   return;
//   // }

//   const onLoadMoreButton = () => {
//     // console.log(page);
//     setPage(prevPage => prevPage + 1);
//   };

//   return (
//     <ImageContext.Provider value={value}>
//       <GalleryStyled>
//         <h1>Unsplash Gallery</h1>
//         <Searchbar />
//         <Images />
//         {/* {response && response.data && response.data.length > 1 && (
//           <Button onLoadMoreButton={onLoadMoreButton}>Load More</Button>
//         )} */}
//         <Button onLoadMoreButton={onLoadMoreButton} />
//         {/* <ToastContainer /> */}
//       </GalleryStyled>
//     </ImageContext.Provider>
//   );
// };

import { GalleryStyled } from './UnsplashGallery.styled';

import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchImages } from 'utils/unsplashApi';
import { Button } from '../UnButton/UnButton';
import { Searchbar } from '../UnSearch/UnSearchbar';
import { Images } from '../UnImages/UnImages';
import { Dna } from 'react-loader-spinner';
// import { Modal } from './Modal/Modal';

export const UnsplashGallery = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  // const [showModal, setShowModal] = useState(false);
  // const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    fetchImages(query, page)
      .then(({ results, totalPages }) => {
        if (!totalPages) {
          console.log(totalPages, results);
          toast.error('There are no images for your request');
          return;
        }
        const resultsImg = results.map(
          ({ alt_description, id, urls: { small, regular } }) => ({
            tags: alt_description,
            id,
            smallImage: small,
            largeImage: regular,
          })
        );

        setImages(prevImages => [...prevImages, ...resultsImg]);
        setTotalPages(totalPages);
      })
      .catch(error => {
        toast.error('There was an error fetching images');
      })
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const submitHandler = query => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
    setQuery(query);
    setImages([]);
    setPage(1);
    setTotalPages(0);
  };

  const onLoadMoreButton = () => {
    setPage(prevPage => prevPage + 1);
  };

  // const onImageClick = activeImage => {
  //   setActiveImage(activeImage);
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  //   setActiveImage(null);
  // };

  return (
    <>
      <GalleryStyled>
        <h1>Unsplash Gallery</h1>
        <Searchbar onSubmit={submitHandler} />
        <Images images={images} />
        {totalPages > images.length && !isLoading && (
          <Button onLoadMoreButton={onLoadMoreButton} />
        )}
        {isLoading && <Dna wrapperStyle={{ margin: '0 auto' }} />}
        <ToastContainer />
      </GalleryStyled>
    </>
  );
};
