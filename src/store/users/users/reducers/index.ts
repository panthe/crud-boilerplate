import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../../../dto/user.ts';
import { setUsers } from '../actions';
import { MN_USERS } from '../../../../common/commonConstants.ts';

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
  name: MN_USERS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUsers, (state, { payload }) => {
      state.data = payload;
    });
  },
});
