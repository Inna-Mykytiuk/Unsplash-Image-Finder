import { useContext } from 'react';
import { ImageGallery, ImageGalleryWrap } from './UnImages.styled';
import { ImageContext } from '../UnsplashGallery/UnsplashGallery';
import { UnImage } from './UnImage';
// import { Skeleton } from './Skeleton';
import { Dna } from 'react-loader-spinner';

export const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);
  return (
    <ImageGalleryWrap>
      <h2>Results for {searchImage || 'Cats'}</h2>
      {isLoading && <Dna wrapperStyle={{ margin: '0 auto' }} />}
      <ImageGallery>
        {isLoading
          ? null
          : response.map(data => <UnImage key={data.id} data={data} />)}
      </ImageGallery>
    </ImageGalleryWrap>
  );
};
