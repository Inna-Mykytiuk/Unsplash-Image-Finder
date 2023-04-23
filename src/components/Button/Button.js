import { ButtonLoadMore } from './Button.styled';

const Button = ({ onLoadMoreButton }) => {
  return (
    <ButtonLoadMore type="button" onClick={onLoadMoreButton}>
      Load more
    </ButtonLoadMore>
  );
};
export default Button;
