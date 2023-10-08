import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { userSlice, usersSlice } from './users';

const appReducer = combineReducers({
  user: userSlice.reducer,
  users: usersSlice.reducer,
});

/* eslint-disable @typescript-eslint/no-explicit-any */
const rootReducer = (state: CombinedState<any>, action: AnyAction) => {
  //"store/reset" action set all the store to their initial value
  if (action.type === 'store/reset') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
