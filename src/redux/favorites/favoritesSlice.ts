import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  items: string[];
}

const initialState: IInitialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',

  initialState,

  reducers: {
    addToFav: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteFromFav: (state, { payload }) => {
      state.items = state.items.filter(item => item !== payload);
    },
  },
});

export const { addToFav, deleteFromFav } = favoritesSlice.actions;
export const { reducer: favoritesReducer } = favoritesSlice;
