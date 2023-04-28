import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1200;
`;

export const StyledlModal = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const ModalImg = styled.img`
  display: block;

  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ModalText = styled.p`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 8px 16px;
  margin: 0;
  font-size: 24px;
  line-height: 1.33;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
`;
