/* eslint-disable no-unneeded-ternary */
import { RootState } from './store';

export const selectFavorites = (state: RootState) => state.favorites.items;

export const selectIsInFavorites = (state: RootState, id: string) =>
  state.favorites.items.find(item => item === id) ? true : false;
