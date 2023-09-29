import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../../../dto/user.ts';
import { setUsers } from '../actions';

export interface UsersState {
  data: IUser[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  data: [],
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUsers, (state, { payload }) => {
      state.data = payload;
    });
  },
});
