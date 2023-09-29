import { createAction } from '@reduxjs/toolkit';
import { IUser } from '../../../../dto/user.ts';

export const setUsers = createAction<IUser[]>('users/set');
