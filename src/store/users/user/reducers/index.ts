import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../../../dto/user.ts';
import { setUser } from '../actions';
import { MN_USERS, TYPE_ELEMENT } from '../../../../common/commonConstants.ts';

export interface UserState {
  data: IUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: `${MN_USERS}/${TYPE_ELEMENT}`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUser, (state, { payload }) => {
      state.data = payload;
    });
  },
});
