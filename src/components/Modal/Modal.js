import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StyledlModal, Overlay, ModalImg, ModalText } from './Modal.styled';

export const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const onOverlay = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={onOverlay}>
      <StyledlModal>
        <ModalImg src={image.largeUrl} alt={image.tags} />
        <ModalText>{image.tags}</ModalText>
      </StyledlModal>
    </Overlay>,
    document.querySelector('#modalRoot')
  );
};
