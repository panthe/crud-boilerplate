import { RootState } from '../../../applicationStore.ts';
import { UserState } from '../reducers';
import { createSelector } from '@reduxjs/toolkit';

export const getUserState = (state: RootState): UserState => state.user;

export const getUserLoader = createSelector(getUserState, (state): boolean => state.loading);

export const getUserData = createSelector(
  getUserState,
  (state): UserState['data'] | null => state?.data || []
);
