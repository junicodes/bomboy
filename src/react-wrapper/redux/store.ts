import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import itemReducer from './slices/itemListSlice';

export const store = configureStore({
  reducer: {
    itemList: itemReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
