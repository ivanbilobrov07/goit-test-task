/* eslint-disable react/self-closing-comp */
import { FC, useState } from 'react';

import { Modal } from '@/shared/Modal';
import { CloseButton, StyledButton, Wrapper } from './CarDetailsButton.styled';

import iconsSprite from '../../../../assets/sprite.svg';

interface ICarDetailsButtonProps {
  carDetailsSlot: React.ReactElement;
}

export const CarDetailsButton: FC<ICarDetailsButtonProps> = ({
  carDetailsSlot,
}) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const openModal = () => {
    setIsModalShown(true);
  };

  const closeModal = () => {
    setIsModalShown(false);
  };

  return (
    <>
      <StyledButton onClick={openModal}>Learn more</StyledButton>
      {isModalShown && (
        <Modal onClose={closeModal}>
          <Wrapper>
            <CloseButton onClick={closeModal}>
              <svg width={24} height={24}>
                <use href={`${iconsSprite}#icon-close`}></use>
              </svg>
            </CloseButton>
            {carDetailsSlot}
          </Wrapper>
        </Modal>
      )}
    </>
  );
};
