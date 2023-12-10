import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') {
        return;
      }

      onClose();
    };

    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>{children}</Backdrop>,
    modalRoot
  );
};
