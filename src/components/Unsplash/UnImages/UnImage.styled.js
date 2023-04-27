import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 450px;
  border-radius: 5px;
  border: 1px solid beige;
  padding: 3px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
