import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './applicationState';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ immutableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: any = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
