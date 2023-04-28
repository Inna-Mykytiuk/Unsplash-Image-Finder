import { ImageGallery, ImageGalleryWrap } from './UnImages.styled';
import { UnImage } from './UnImage';

export const Images = ({ images }) => {
  return (
    <ImageGalleryWrap>
      <ImageGallery>
        {images.map(image => (
          <UnImage
            key={image.id}
            tags={image.tags}
            smallImage={image.smallImage}
            largeImage={image.largeImage}
          />
        ))}
      </ImageGallery>
    </ImageGalleryWrap>
  );
};
