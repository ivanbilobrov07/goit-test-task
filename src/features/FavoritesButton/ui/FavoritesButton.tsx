/* eslint-disable react/self-closing-comp */
import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/hooks/reduxHooks';
import { selectIsInFavorites } from '@/redux/selectors';
import { addToFav, deleteFromFav } from '@/redux/favorites/favoritesSlice';

import { FavButton } from './Favorites.styled';

import heartIcon from '../../../../assets/sprite.svg';

interface IFavoritesButtonProps {
  id: string;
}

export const FavoritesButton: FC<IFavoritesButtonProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const isInFavorites = useAppSelector(state => selectIsInFavorites(state, id));

  const toggleFavorites = () => {
    if (isInFavorites) {
      dispatch(deleteFromFav(id));
      return;
    }

    dispatch(addToFav(id));
  };

  return (
    <FavButton
      $isFavorite={isInFavorites}
      type="button"
      onClick={toggleFavorites}
    >
      <svg width={18} height={18}>
        <use href={`${heartIcon}#icon-heart`}></use>
      </svg>
    </FavButton>
  );
};
