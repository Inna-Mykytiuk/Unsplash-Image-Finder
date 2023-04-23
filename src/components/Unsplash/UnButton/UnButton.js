import { ButtonLoadMore } from './UnButton.styled';

export const Button = ({ onLoadMoreButton }) => {
  return (
    <ButtonLoadMore type="button" onClick={onLoadMoreButton}>
      Load more
    </ButtonLoadMore>
  );
};
