import { RootState } from '../../../applicationStore.ts';
import { UsersState } from '../reducers';
import { createSelector } from '@reduxjs/toolkit';

export const getUsersState = (state: RootState): UsersState => state.users;

export const getUsersLoader = createSelector(getUsersState, (state): boolean => state.loading);

export const getUsersData = createSelector(
  getUsersState,
  (state): UsersState['data'] | null => state?.data || []
);
