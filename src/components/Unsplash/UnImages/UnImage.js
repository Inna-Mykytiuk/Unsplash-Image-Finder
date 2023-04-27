// import { Image } from './UnImage.styled';

// export const UnImage = ({ data }) => {
//   return (
//     <div>
//       <a href={data.urls.regular} target="_blank" rel="noreferrer">
//         <Image src={data.urls.small} alt={data.alt_description} />
//       </a>
//     </div>
//   );
// };
import { Image } from './UnImage.styled';

export const UnImage = ({ tags, smallImage }) => {
  return (
    <div>
      <Image
        src={smallImage}
        alt={tags}
        loading="lazy"
        width={480}
        height={260}
      />
    </div>
  );
};
