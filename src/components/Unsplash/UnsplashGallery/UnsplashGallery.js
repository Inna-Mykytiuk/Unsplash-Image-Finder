import React from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchImages } from 'utils/unsplashApi';
import { GalleryStyled } from './UnsplashGallery.styled';
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
      //в then записуємо рузультати і кількість сторінок(значення беремо з апі)
      .then(({ results, total_pages: totalPages }) => {
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
