import { Image } from './UnImage.styled';

export const UnImage = ({ data }) => {
  return (
    <div>
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <Image src={data.urls.small} alt={data.alt_description} />
      </a>
    </div>
  );
};
