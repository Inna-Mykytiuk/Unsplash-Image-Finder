import { ImageGallery, ImageGalleryWrap } from './UnImages.styled';
import { UnImage } from './UnImage';

export const Images = ({ images, openModal }) => {
  return (
    <ImageGalleryWrap>
      <ImageGallery>
        {images.map(image => (
          <UnImage
            openModal={openModal}
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
