import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { userSlice, usersSlice } from './users';

const appReducer = combineReducers({
  user: userSlice.reducer,
  users: usersSlice.reducer,
});

const rootReducer = (state: CombinedState<never>, action: AnyAction) => {
  /**
   * Se l'azione è "store/reset" viene passato undefined all'appReducer, impostando
   * tutti gli store su initialValue.
   */
  if (action.type === 'store/reset') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
