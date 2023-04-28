import { Image } from './UnImage.styled';

export const UnImage = ({ tags, largeImage, openModal, id }) => {
  return (
    <div onClick={() => openModal({ largeUrl: largeImage, tags, id })} key={id}>
      <Image
        src={largeImage}
        alt={tags}
        loading="lazy"
        width={480}
        height={260}
      />
    </div>
  );
};
