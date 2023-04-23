import ImageCard from 'components/ImageCard/ImageCard';
import { GalleryStyled } from './Gallery.styled';

const Gallery = ({ images, openModal }) => {
  return (
    <>
      <GalleryStyled>
        {images.map(image => (
          <ImageCard
            openModal={openModal}
            key={image.id}
            image={image}
            tags={image.tags}
            smallImage={image.smallImage}
            largeImage={image.largeImage}
          />
        ))}
      </GalleryStyled>
    </>
  );
};
export default Gallery;
