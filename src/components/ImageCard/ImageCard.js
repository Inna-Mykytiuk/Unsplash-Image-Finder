import { GalleryItem, GalleryImg } from './ImageCard.styled';

const ImageCard = ({ tags, smallImage, largeImage, openModal }) => {
  return (
    <GalleryItem
      onClick={() => openModal({ largeUrl: largeImage, targetAlt: tags })}
    >
      <GalleryImg
        src={smallImage}
        alt={tags}
        loading="lazy"
        width={480}
        height={260}
      />
    </GalleryItem>
  );
};

export default ImageCard;
