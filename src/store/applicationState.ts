import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { usersSlice } from './users';

const appReducer = combineReducers({
  users: usersSlice.reducer,
});

const rootReducer = (state: CombinedState<any>, action: AnyAction) => {
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
