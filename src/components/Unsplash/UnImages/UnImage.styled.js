import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
